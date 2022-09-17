import React from "react";
import { useFormik } from "formik";

function UserSignin() {
  const onSubmit = (values) => {
    console.log(values);
  };

  const initialValues = {
    name: "",
    email: "",
    cname: "",
  };

  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = "Name field is Required";
    }
    if (!values.email) {
      errors.email = "Email field is Required";
    } else if (
      !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)
    ) {
      errors.email = "Envalid formate of Email";
    }
    if (!values.cname) {
      errors.cname = "Company name is Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validate,
  });
  // console.log("Form Errors: ", formik.errors);
  return (
    <div className="App">
      <form onSubmit={formik.handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={formik.handleChange}
            value={formik.values.name}
            onBlur={formik.handleBlur}
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="errors">{formik.errors.name}</div>
          ) : null}
        </div>

        <div className="form-control">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={formik.handleChange}
            value={formik.values.email}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="errors">{formik.errors.email}</div>
          ) : null}
        </div>
        <div className="form-control">
          <label htmlFor="name">Company Name</label>
          <input
            type="text"
            id="cname"
            name="cname"
            onChange={formik.handleChange}
            value={formik.values.cname}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cname && formik.errors.cname ? (
            <div className="errors">{formik.errors.cname}</div>
          ) : null}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserSignin;
