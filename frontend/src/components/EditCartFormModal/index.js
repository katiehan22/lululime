import EditCartForm from "./EditCartForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";

function EditCartFormModal({cartItemId}) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button className="bag-item-edit-button" onClick={() => setShowModal(true)}>Edit</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCartForm cartItemId={cartItemId} setShowModal={setShowModal}/>
        </Modal>
      )}
    </>
  )
}

export default EditCartFormModal;