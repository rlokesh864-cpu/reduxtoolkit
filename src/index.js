import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './app/store';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  Route,
  Link,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Countries from './features/countries/Countries';
import Products from './features/products/products';
import Counter from './features/counter/Counter';
import Todolist from './features/todolist/Todolist';
import CountryDetails from './features/countries/CountryDetails';
import AddProduct from './features/products/Addproducts';
import EditProduct from './features/products/EditProducts';

const router =createBrowserRouter([
  {
    path:"/",
    element: <App/>,
    children:[
      {
        path:'/countries',
        element:<Countries></Countries>,
        children:[
          {
            path:"/countries/countryDetails/:cname",
          element:<CountryDetails></CountryDetails>
          }
        ]
      },
      {
        path:'/products',
        element:<Products></Products>
      },
      {
        path:'/counter',
        element:<Counter></Counter>
      },
      {
        path:'/todolist',
        element:<Todolist></Todolist>
      },
      {
        path:'/addProducts',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/editProduct/:pid',
        element:<EditProduct></EditProduct>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
