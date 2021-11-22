import React, { useState } from 'react';

function TextInput({ type = 'text', label }) {
  const [value, setValue] = useState('');

  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <div className="input-container">
      <input id="namedInput" type={type} value={value} onChange={handleChange} />
      <label className={value && 'filled'} htmlFor="namedInput">
        {label}
      </label>
    </div>
  );
}

export const Form = ({ onSubmit }) => (
  <form onSubmit={onSubmit}>
    <p> Please give us some information! </p>
    <div className="form-group">
      <TextInput name="full_name" label="Full Name" />
    </div>
    <div className="form-group">
      <TextInput name="company_name" label="Company Name" />
    </div>
    <div className="form-group">
      <TextInput name="company_email" label="Company Email" />
    </div>
    <div className="form-group">
      <button className="form-control btn btn-primary" type="submit">
        Submit
      </button>
    </div>
  </form>
);
export default Form;
