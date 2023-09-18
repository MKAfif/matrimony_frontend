import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { PersistGate } from 'redux-persist/integration/react';
import thunk from 'redux-thunk';
import rootReducer from './Redux/Reducers/Root';

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk, ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: ['FLUSH', 'REHYDRATE', 'PAUSE', 'PERSIST', 'PURGE', 'REGISTER'],
    },
  })],
});



const persistor = persistStore(store);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </>
);

