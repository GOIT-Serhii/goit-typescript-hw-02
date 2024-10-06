import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ onClick }) {
  return (
    <div>
      <button className={css.btnLoadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
