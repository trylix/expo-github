import React, { useEffect, useRef } from 'react';
import { string } from 'prop-types';
import { useField } from '@unform/core';

interface InputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return <input ref={inputRef} defaultValue={defaultValue} {...rest} />;
};

Input.propTypes = {
  name: string.isRequired,
};

export default Input;
