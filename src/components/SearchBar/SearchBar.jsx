import css from "./SearchBar.module.css";
import { Field, Form, Formik } from "formik";
import { FaSearch } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast";

export default function SearchBar({ onSearch }) {
  return (
    <header className={css.header}>
      <Formik
        className={css.formik}
        initialValues={{ topic: "" }}
        onSubmit={(values, actions) => {
          if (values.topic.trim() === "") {
            toast.error("You need to type something");
          } else {
            onSearch(values.topic);
            actions.resetForm();
          }
        }}
      >
        <Form className={css.form}>
          <Field
            type="text"
            name="topic"
            placeholder="Search photos and images"
            className={css.input}
          />
          <button className={css.sbtBtn} type="submit">
            <FaSearch className={css.icon} />
          </button>
        </Form>
      </Formik>
      <Toaster position="top-center" reverseOrder={false} />
    </header>
  );
}
