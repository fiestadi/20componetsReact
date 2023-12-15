// 
import React, { useState } from 'react';
import Button from './components/Button/button';
import Form from './components/Form/form';
import Modal from './components/Modal/modal';
import SliderComponent from './components/Sliders/slider';
import CheckboxComponent from './components/Checbox/checkbox';
import './App.css';
import Alert from './components/Alert/alert';
import Navbar from './components/Navbar/navbar';
function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [alertData, setAlertData] = useState(null);
  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  const handleButtonClick = () => {
    openModal();
  };

  const handleModalClose = () => {
    closeModal();
  };
  const showAlert = (type, message) => {
    setAlertData({ type, message });
    
  };
  const closeAlert = () => {
    setAlertData(null);
  };

  return (
    <div>
   <Navbar />
      <h1 className='text'>Four Seasons</h1>
      <Button onClick={handleButtonClick} label="Registration" />
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <Form closeModal={handleModalClose}showAlert={showAlert} />
      </Modal>
      <div className='content'>
        <CheckboxComponent />
        <SliderComponent />

      </div>
      {alertData && <Alert type={alertData.type} message={alertData.message} />}
      </div>
)};
export default App;