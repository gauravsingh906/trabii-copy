import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import PreRegistar from './Pages/PreRegistar';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<div>kuldeep</div>} />
      <Route path='/pre-register' element={<PreRegistar/>} />
      <Route path='/for-users' element={<div>kuldeep</div>} />
      <Route path='/for-business-owners' element={<div>kuldeep</div>} />
      <Route path='/contact' element={<div>kuldeep</div>} />
      <Route path='/services' element={<div>kuldeep</div>} />
      <Route path='/legality' element={<div>kuldeep</div>} />
      <Route path='/privacy-policy-app' element={<div>kuldeep</div>} />
      <Route path='/privacy-policy-website' element={<div>kuldeep</div>} />
      <Route path='/terms-and-conditions' element={<div>kuldeep</div>} />
      <Route path='/refund-policy' element={<div>kuldeep</div>} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)