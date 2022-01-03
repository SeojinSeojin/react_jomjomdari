import React from 'react';
import { useState } from 'react';

type InputProps = {
  onChange?: (value: string) => void;
  onSubmit: (value: string) => void;
  placeholder: string;
};

function Input(props: InputProps) {
  const { onChange, onSubmit, placeholder } = props;
  const [value, setValue] = useState('');
  return (
    <input
      type='text'
      onChange={(e) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
      }}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit(value)}
      placeholder={placeholder}
    />
  );
}

export default Input;
