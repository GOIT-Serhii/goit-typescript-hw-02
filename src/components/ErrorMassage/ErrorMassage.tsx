import css from "./ErrorMassage.module.css";

export default function ErrorMassage(): JSX.Element {
  return (
    <div>
      <b className={css.error}>ERROR!!!</b>
    </div>
  );
}
