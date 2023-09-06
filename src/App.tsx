import React from 'react';
import { ToastContainer } from 'react-toastify';
import Constants from './Helpers';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import RoutesWrapper from './Router';
// import { persistor, store } from './Redux/store';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Provider store={store}> */}
            <ToastContainer />
            <BrowserRouter>
              <RoutesWrapper />
            </BrowserRouter>
      {/* </Provider> */}
    </div>
  );
}

export default App;
