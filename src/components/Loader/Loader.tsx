import { Bars } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader(): JSX.Element {
  return (
    <div className={css.loaderWrap}>
      <Bars
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
