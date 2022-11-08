import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/Home';
import HeaderComponent from './components/HeaderComponent';
import BorrowList from './pages/BorrowList';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/your-books",
    element: <BorrowList />,
  },
]);

function App() {
  return (
    <div>
      <HeaderComponent />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
