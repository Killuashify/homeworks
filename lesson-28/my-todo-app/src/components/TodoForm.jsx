import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TodoForm = ({ onAdd }) => {
  const formik = useFormik({
    initialValues: { todo: "" },
    validationSchema: Yup.object({
      todo: Yup.string().min(5, "Min 5 symbols").required("Required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      onAdd(values.todo);
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        type="text"
        name="todo"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.todo}
        placeholder="Enter task..."
      />
      {formik.touched.todo && formik.errors.todo && (
        <div className="error">{formik.errors.todo}</div>
      )}
      <button type="submit">ADD</button>
    </form>
  );
};

export default TodoForm;
