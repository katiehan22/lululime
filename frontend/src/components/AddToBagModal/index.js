import { useState } from "react";
import AddToBag from "./AddToBag";
import { Modal } from "../../context/Modal";
import { useSelector } from "react-redux";

function AddToBagModal({ handleAddToBag, setErrors }) {
  const [showAddBagModal, setShowAddBagModal] = useState(false);
  let user = useSelector(state => state.session.user);

  const handleAddToBagClick = () => {
    if(!user) {
      setErrors(["Please sign in in to add items to your bag"]);
    } else {
      handleAddToBag();
      setShowAddBagModal(true);
    }
  }

  return (
    <>
      <button id="add-to-bag-button" onClick={() => handleAddToBagClick()}>ADD TO BAG</button>
      {showAddBagModal && (
        <Modal onClose={() => setShowAddBagModal(false)}>
          <AddToBag setShowAddBagModal={setShowAddBagModal} />
        </Modal>
      )}
    </>
  )
}

export default AddToBagModal;