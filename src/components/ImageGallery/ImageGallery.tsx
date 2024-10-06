import { Result } from "../App/App.types";
import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

interface ImageGalleryProps {
  items: Result[];
  openModal: (valueSrc: string, descr: string) => void;
}

export default function ImageGallery({
  items,
  openModal,
}: ImageGalleryProps): JSX.Element {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item: Result) => (
        <li className={css.imageGalleryItem} key={item.id}>
          <ImageCard openModal={openModal} item={item} />
        </li>
      ))}
    </ul>
  );
}
