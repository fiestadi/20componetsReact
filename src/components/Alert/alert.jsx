import React, { useState, useEffect } from 'react';
import './alert.module.css';

const Alert = ({ type, message, onClose }) => {
   useEffect(() => {
     const timeout = setTimeout(() => {
       if (typeof onClose === 'function') {
         onClose(); // Убедимся, что onClose является функцией перед вызовом
       }
     }, 3000);
 
     return () => clearTimeout(timeout);
   }, [onClose]);
 
   return (
     <div className={`alert ${type}`}>
       <p>{message}</p>
     </div>
   );
 };
 
 export default Alert;