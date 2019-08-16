import React from "react";
import { withFormik, Form, Field } from "formik";

function SmurfForm() {
  return (
    <Form>
      <div>
        <Field name="name" type="text" placeholder="Name" required/>
      </div>
      <div>
        <Field name="age" type="text" placeholder="Age" required/>
      </div>
      <div>
        <Field name="height" type="text" placeholder="Height" required/>
      </div>
      <button type="submit">Send a smurf to the village</button>
    </Form>
  );
}

const FormikSmurfForm = withFormik({
  mapPropsToValues({ name, age, height }) {
    return {
      name: name || "",
      age: age || "",
      height: height || ""
    };
  },
  handleSubmit(values, { resetForm, props }) {
    props.addSmurf(values);
    resetForm();
  }
})(SmurfForm);

export default FormikSmurfForm;