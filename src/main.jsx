import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Timer from './pages/Timer.jsx';
import Stopwatch from './pages/Stopwatch.jsx';
import Alarm from './pages/Alarm.jsx';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/timer',
        element: <Timer />,
    },
    {
        path: '/stopwatch',
        element: <Stopwatch />,
    },
    {
        path: '/alarm',
        element: <Alarm />,
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
