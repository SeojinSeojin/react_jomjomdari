import React from 'react';
import { useState } from 'react';

type InputProps = {
  onChange?: (value: string) => void;
  onSubmit: (value: string) => void;
};

function Input(props: InputProps) {
  const { onChange, onSubmit } = props;
  const [value, setValue] = useState('');
  return (
    <input
      type='text'
      onChange={(e) => {
        onChange && onChange(e.target.value);
        setValue(e.target.value);
      }}
      onKeyDown={(e) => e.key === 'Enter' && onSubmit(value)}
    />
  );
}

export default Input;
