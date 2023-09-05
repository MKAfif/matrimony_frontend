import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Conversation = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [socket, setSocket] = useState(null);
  const APIURL = useSelector((state) => state.APIURL.url);

  useEffect(() => {

    console.log('Before creating WebSocket');
    const newSocket = new WebSocket('ws://127.0.0.1:8000/ws/chat/matrimony_chat/');
    console.log('WebSocket created');

    newSocket.onopen = () => {
      console.log('WebSocket connection established');
    };

    newSocket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    newSocket.onmessage = (event) => {
      const data = JSON.parse(event.data);

      if (data.type === 'users') {
        setUsers(data.users);
      } else if (data.type === 'message') {
        const newMessage = {
          sender: data.sender,
          content: data.content,
        };
        setMessages((prevMessages) => [...prevMessages, newMessage]);
      }
    };

    newSocket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = () => {
    if (selectedUser && message.trim() !== '') {
      const data = {
        type: 'message',
        recipient: selectedUser,
        content: message,
      };
      socket.send(JSON.stringify(data));
      setMessage('');
    }
  };

  return (
    <div className="flex">
      {/* User list */}
      <div className="w-1/4 bg-gray-100 p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Users</h2>
        <ul>
          {users.map((user) => (
            <li
              key={user.id}
              className={`cursor-pointer py-2 px-4 ${
                selectedUser === user.id ? 'bg-blue-200' : ''
              }`}
              onClick={() => setSelectedUser(user.id)}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>

      {/* Chat messages */}
      <div className="flex-1 p-2 sm:p-6 justify-between flex flex-col h-screen">
        {/* Header code remains the same */}
        {/* ... */}

        {/* Chat messages and input */}
        <div
          id="messages"
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch flex-1"
        >
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`chat-message ${
                msg.sender === 'You' ? 'justify-end' : ''
              }`}
            >
              <div className="flex items-end">
                <div
                  className={`flex flex-col space-y-2 text-xs max-w-xs mx-2 order-${
                    msg.sender === 'You' ? '1' : '2'
                  } items-${msg.sender === 'You' ? 'end' : 'start'}`}
                >
                  <div>
                    <span
                      className={`px-4 py-2 rounded-lg inline-block ${
                        msg.sender === 'You'
                          ? 'rounded-br-none bg-blue-600 text-white'
                          : 'bg-gray-300 text-gray-600'
                      }`}
                    >
                      {msg.content}
                    </span>
                  </div>
                </div>
                <img
                  src={msg.senderImage}
                  alt={msg.sender}
                  className="w-6 h-6 rounded-full order-2"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Input for sending messages */}
        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <input
              type="text"
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>
              {/* Add other buttons here */}
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
                onClick={() => sendMessage()}
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path
                    d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
