import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// scroll bar
import 'simplebar/src/simplebar.css';

// third-party
import { Provider as ReduxProvider } from 'react-redux';

// apex-chart
import 'assets/third-party/apex-chart.css';

// project import
import App from './App';
// import {store ,persistor} from './store'

import { PersistGate } from 'redux-persist/integration/react';
import reportWebVitals from './reportWebVitals';
// import * as serviceWorkerRegistration from './service-worker';
// import * as serviceWork from './service-worker'
import * as serviceWork from './serviceWorkerRegistration'
// import { store } from 'store/index';
import { store,persistor} from '../src/store/index'



// ==============================|| MAIN - REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  // <StrictMode>
    <ReduxProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {/* <BrowserRouter basename="/free"> */}
      <BrowserRouter>    
        <App />
      </BrowserRouter>
      </PersistGate>
    </ReduxProvider>
  // </StrictMode>
);

serviceWork.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
