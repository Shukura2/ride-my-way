import React, { useState } from "react";
import Modal from "react-modal";
import EditModal from "./EditModal";

const RenderMyOffer = ({
  destination,
  amount,
  id,
  deletOffer,
  editOffer
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const handleEdit = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div className="flex-container">
      <div className="flex-container-2">
        <p>Amount:{amount}</p>
        <p>Destination:{destination}</p>

        <button className="color-grn btn-offer" onClick={handleEdit}>
          Edit
        </button>
        <button className="color-red btn-offer" onClick={() => deletOffer(id)}>
          Delete
        </button>
      </div>
      <Modal isOpen={isOpen} style={customStyles}>
        <EditModal
          amount={amount}
          destination={destination}
          closeModal={closeModal}
          editOffer={editOffer}
          id={id}
        />
      </Modal>
    </div>
  );
};

export default RenderMyOffer;
