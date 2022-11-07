import EditCartForm from "./EditCartForm";
import { useState } from "react";
import { Modal } from "../../context/Modal";

function EditCartFormModal() {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button onClick={() => setShowModal(true)}>Edit Cart Item</button>
      {showModal && (
        <Modal onClose={() => setShowModal(false)}>
          <EditCartForm />
        </Modal>
      )}
    </>
  )
}

export default EditCartFormModal;