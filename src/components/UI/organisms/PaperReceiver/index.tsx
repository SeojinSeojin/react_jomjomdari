import React from 'react';
import { useState } from 'react';
import Input from '../../atoms/Input';

function PaperReceiver() {
  const [receiver, setReceiver] = useState(localStorage.getItem('receiver'));

  const saveReceiver = (receiver: string) => {
    setReceiver(receiver);
    localStorage.setItem('receiver', receiver);
  };

  return (
    <>
      {receiver ? <div>To. {receiver}</div> : <Input onSubmit={saveReceiver} />}
    </>
  );
}

export default PaperReceiver;
