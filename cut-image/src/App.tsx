import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

function App() {
  const [imageEdge, setImageEdge] = useState({
    top: 0,
    left: 0,
  });
  const [imageLength, setImageLength] = useState(180);
  const [dragTarget, setDragTarget] = useState<
    'LEFT' | 'RIGHT' | 'TOP' | 'BOTTOM' | undefined
  >(undefined);

  const handleSetDragTarget = (e: MouseEvent) => {};

  const onDragHandleLeft = (absoluteX: number) => {
    const prevX = imageEdge.left;
    const nextX = absoluteX - window.innerWidth / 2;
    if (absoluteX === 8) return;
    setImageEdge((prev) => ({ ...prev, left: nextX }));
    setImageLength((prev) => prev - (nextX - prevX));
  };

  const handleMoueMove = (e: MouseEvent) => {
    e.preventDefault();
    const absoluteX = e.pageX;
    switch (dragTarget) {
      case 'LEFT':
        onDragHandleLeft(absoluteX);
        break;
    }
  };

  const handleMoueUp = () => {
    setDragTarget(undefined);
  };

  useEffect(() => {
    window.addEventListener('mousedown', handleSetDragTarget);
    window.addEventListener('mousemove', handleMoueMove);
    window.addEventListener('mouseup', handleMoueUp);

    return () => {
      window.removeEventListener('mousedown', handleSetDragTarget);
      window.removeEventListener('mousemove', handleMoueMove);
      window.removeEventListener('mouseup', handleMoueUp);
    };
  }, []);

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        width: '100vw',
      }}
    >
      <img
        src='https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
        alt='among us'
      />
      <div style={{ position: 'relative' }}>
        <img
          src='https://play-lh.googleusercontent.com/8ddL1kuoNUB5vUvgDVjYY3_6HwQcrg1K2fd_R8soD-e2QYj8fT9cfhfh3G0hnSruLKec'
          alt='among us'
        />
        <div
          style={{
            position: 'absolute',
            height: imageLength,
            width: imageLength,
            left: imageEdge.left + 20,
            top: imageEdge.top + 20,
            backgroundColor: '#ffffff4b',
          }}
        />
        <div
          className='handle-left'
          style={{
            position: 'absolute',
            width: 0,
            height: imageLength,
            borderLeft: '20px dotted grey',
            left: imageEdge.left,
            top: imageEdge.top,
            zIndex: 4,
          }}
        />
        <div
          style={{
            position: 'absolute',
            width: 0,
            height: imageLength,
            borderLeft: '20px dotted grey',
            left: imageEdge.left + imageLength,
            top: imageEdge.top,
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: 0,
            width: imageLength,
            borderTop: '20px dotted grey',
            left: imageEdge.left,
            top: imageEdge.top,
          }}
        />
        <div
          style={{
            position: 'absolute',
            height: 0,
            width: imageLength,
            borderTop: '20px dotted grey',
            left: imageEdge.left,
            top: imageEdge.top + imageLength,
          }}
        />
      </div>
    </div>
  );
}

export default App;
