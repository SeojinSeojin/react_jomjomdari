import React from 'react';

type SelectorProps = {
  content: string;
  isSelected: boolean;
  onClick: () => void;
};

function Selector(props: SelectorProps) {
  const { content, isSelected, onClick } = props;
  return (
    <div
      onClick={onClick}
      style={{
        border: isSelected ? '1px solid black' : '1px solid transparent',
        cursor: 'pointer',
        padding: '8px 16px',
        borderRadius: 60,
      }}
    >
      {content}
    </div>
  );
}

export default Selector;
