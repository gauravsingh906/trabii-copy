import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './Layout';
import ContactPage from './Components/Contact/ContactPage';
import ServicesSection from './Components/Services/ServicesPage';



const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout></Layout>}>
      <Route path='' element={<div>kuldeep</div>} />
      <Route path='/pre-register' element={<div>kuldeep</div>} />
      <Route path='/for-users' element={<div>kuldeep</div>} />
      <Route path='/for-business-owners' element={<div>kuldeep</div>} />
      <Route path='/contact' element={<ContactPage></ContactPage>} />
      <Route path='/services' element={<ServicesSection></ServicesSection>} />
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