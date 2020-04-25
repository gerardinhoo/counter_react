import React, {useState} from 'react';
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};
 
 
const CounterModal = () => {
  const [modalIsOpen,setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  }
 
  const closeModal = () => {
    setIsOpen(false);
  }
 
    return (
      <div>
        <button onClick={openModal} style={{marginBottom: "5rem"}}>CLICK FOR INFOS...</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
        >
          <button onClick={closeModal}>close</button>
          <div>THIS COUNTER APP ENABLE YOU TO ADD AND SUBSTRACT THE COUNTER...</div>
        </Modal>
      </div>
    );
}

export default CounterModal;