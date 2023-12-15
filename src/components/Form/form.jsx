
import React from 'react';

const Form = ({  closeModal, showAlert  }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
   
    showAlert('success', 'Registration successful!');
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit} >
      <label>
        Name:
        <input type="text" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <button type="submit">Send</button>
      <button type="button" onClick={closeModal}>Close</button>
    </form>
  );
};

export default Form;