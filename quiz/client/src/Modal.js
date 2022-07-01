



import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const {questions, correct, isModalOpen, closeModal} = useGlobalContext()
  return (
    <div className={`${isModalOpen ? ('modal-container isOpen') : ('modal-container')}`}>
      <div className='modal-content'>
        <h2>Congrats!</h2>
        <p>Your Answers {((correct / questions.length) * 100).toFixed(0)} % of questions correctly</p>
        <button className='close-btn' onClick={closeModal}>Play Again</button>
      </div>
    </div>
  );
};

export default Modal;