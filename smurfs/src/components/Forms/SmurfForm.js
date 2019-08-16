import React from "react";
import { withFormik, Form, Field } from "formik";
import { Button } from './StyledSmurfs.js';

function SmurfForm() {
  return (
    <>
    <h3>Enter Smurf Village</h3>
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
      <Button type="submit">Send a smurf to the village</Button>
    </Form>
    </>
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