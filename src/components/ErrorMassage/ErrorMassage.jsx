import css from "./ErrorMassage.module.css";

export default function ErrorMassage() {
  return (
    <div>
      <b className={css.error}>ERROR!!!</b>
    </div>
  );
}
