import { Result } from "../App/App.types";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  item: Result;
  openModal: (valueSrc: string, descr: string) => void;
}

export default function ImageCard({
  item,
  openModal,
}: ImageCardProps): JSX.Element {
  return (
    <div>
      <img
        onClick={() => openModal(item.urls.regular, item.description)}
        className={css.image}
        src={item.urls.small}
        alt={item.description}
      />
    </div>
  );
}
