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
        border: isSelected ? '1px solid black' : 'none',
        cursor: 'pointer',
      }}
    >
      {content}
    </div>
  );
}

export default Selector;
