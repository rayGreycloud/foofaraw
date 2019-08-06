import React from 'react';

const FormInput = ({ handleChange, label, ...otherProps }) => {
  const labelClasses = `${
    otherProps.value.length ? 'shrink' : ''
  } form-input-label`;

  return (
    <div className='group'>
      <input className='form-input' onChange={handleChange} {...otherProps} />
      {label && (
        <label className={labelClasses} htmlFor={otherProps.name}>
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;
