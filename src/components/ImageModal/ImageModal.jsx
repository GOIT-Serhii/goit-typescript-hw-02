import css from "./ImageModal.module.css";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

export default function ImageModal({
  currentItem,
  currentItemDescr,
  isOpen,
  onClose,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={() => onClose()}
      style={customStyles}
    >
      <div>
        <img className={css.img} src={currentItem} alt={currentItemDescr} />
      </div>
    </Modal>
  );
}
