import React from 'react'
import Header from './Header'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';

const VideoCallInterface = () => {
    const {roomId} = useParams()

    const meeting = async (e) =>{
        const appID =1277037766
        const serverSecret = "3f20970ba2ec33c01a22ddde81546eef"
        const kitToken =  ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID, 
            serverSecret,
             roomId ,
             Date.now().toString(),
             "Enter Your name"

             
        );
        const zc = ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container   : e,
            sharedLinks : [
                {
                    name : 'Copy Link',
                    url  :  `http://localhost:3000/videocallinterface/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall, 
                
              },

        })


    }
   
  return (
    <div>
      <Header/>
      <div
        ref = {meeting}
        style={{ width: '100vw', height: '100vh' }}
      >

      </div>
    </div>
  )
}

export default VideoCallInterface
