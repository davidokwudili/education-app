import React from 'react';
import { Navbar } from '../Navbar/Navbar';
import Courses from '../Course/Courses';

export const Home = () => {
   return (
      <div class="page">
         <Navbar />

         <div class="page-wrapper">

            <Courses />

         </div>
      </div>
   )
}
