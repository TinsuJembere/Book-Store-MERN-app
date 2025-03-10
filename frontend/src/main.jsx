import './index.css';
import App from './App.jsx';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store.js';
import { Provider } from 'react-redux';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
