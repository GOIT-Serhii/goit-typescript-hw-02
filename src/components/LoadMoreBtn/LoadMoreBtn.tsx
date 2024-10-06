import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  onClick: () => void;
}

export default function LoadMoreBtn({
  onClick,
}: LoadMoreBtnProps): JSX.Element {
  return (
    <div>
      <button className={css.btnLoadMore} onClick={onClick}>
        Load more
      </button>
    </div>
  );
}
