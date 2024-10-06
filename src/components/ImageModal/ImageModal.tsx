import Modal from "react-modal";

import css from "./ImageModal.module.css";

interface CustomStyles {
  content: {
    top: string;
    left: string;
    right: string;
    bottom: string;
    marginRight: string;
    transform: string;
  };
}

const customStyles: CustomStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

interface ImageModalProps {
  currentItem: string;
  currentItemDescr: string;
  isOpen: boolean;
  onClose: () => void;
}

export default function ImageModal({
  currentItem,
  currentItemDescr,
  isOpen,
  onClose,
}: ImageModalProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <div>
        <img className={css.img} src={currentItem} alt={currentItemDescr} />
      </div>
    </Modal>
  );
}
