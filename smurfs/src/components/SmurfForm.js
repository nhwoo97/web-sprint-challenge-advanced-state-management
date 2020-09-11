import React, { useState } from "react";
import { connect } from "react-redux";
import { postSmurf, fetchSmurfs } from "../actions/smurfActions";

const initialFormValues = {
  name: "",
  age: "",
  height: "",
};

const SmurfForm = (props) => {
  const [formValues, setFormValues] = useState(initialFormValues);

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const addSmurf = (e) => {
    e.preventDefault();

    let newSmurf = {
      name: formValues.name,
      age: formValues.age,
      height: `${formValues.height}cm`,
    };
    console.log(newSmurf);

    postSmurf(newSmurf);
    setFormValues(initialFormValues);
  };
  return (
    <div>
      <h3>Create your own smurf!</h3>
      <form>
        <label>
          Name:
          <input
            type="text"
            name="name"
            placeholder="name"
            onChange={onInputChange}
            value={formValues.name}
          ></input>
        </label>
        <label>
          Age:
          <input
            type="text"
            name="age"
            placeholder="age"
            onChange={onInputChange}
            value={formValues.age}
          ></input>
        </label>
        <label>
          height:
          <input
            type="text"
            name="height"
            placeholder="height"
            onChange={onInputChange}
            value={formValues.height}
          ></input>
        </label>
        <button onClick={addSmurf}>CLICK</button>
      </form>
    </div>
  );
};

export default connect(null, { postSmurf, fetchSmurfs })(SmurfForm);
