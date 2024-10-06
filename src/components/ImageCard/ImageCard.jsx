import css from "./ImageCard.module.css";

export default function ImageCard({ item, openModal }) {
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
