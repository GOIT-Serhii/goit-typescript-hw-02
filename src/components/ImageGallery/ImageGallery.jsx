import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ items, openModal }) {
  return (
    <ul className={css.imageGalleryList}>
      {items.map((item) => (
        <li className={css.imageGalleryItem} key={item.id}>
          <ImageCard openModal={openModal} item={item} />
        </li>
      ))}
    </ul>
  );
}
