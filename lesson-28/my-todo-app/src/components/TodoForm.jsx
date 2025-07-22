import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const TodoForm = () => {
  const [todos, setTodos] = useState([]);

  const formik = useFormik({
    initialValues: {
      todo: "",
    },
    validationSchema: Yup.object({
      todo: Yup.string().min(5, "min 5 simbols").required("Required field"),
    }),
    onSubmit: (values, { resetForm }) => {
      setTodos([...todos, values.todo]);
      resetForm();
    },
  });

  return (
    <div className="todo-container">
      <h2>📝 TODO List</h2>
      <form onSubmit={formik.handleSubmit}>
        <input
          type="text"
          name="todo"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.todo}
          placeholder="Enter the task..."
        />
        {formik.touched.todo && formik.errors.todo && (
          <div className="error">{formik.errors.todo}</div>
        )}
        <button type="submit">ADD</button>
      </form>

      <ul className="todo-list">
        {todos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TodoForm;
