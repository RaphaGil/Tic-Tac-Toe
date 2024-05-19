// import ReactDOM from 'react-dom/client.js';

// import App from './App.jsx';
// import './index.css';

// ReactDOM.createRoot(document.getElementById('root')).render(<App />);
import React from 'react';
import ReactDOM from 'react-dom/client'; // Note the '/client' part
import App from './App';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
