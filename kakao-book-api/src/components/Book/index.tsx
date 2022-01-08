import React from 'react';
import { Wrapper } from './style';

type BookType = {
  title: string;
  price: number;
  thumbnail: string;
  url: string;
};

function Book(book: BookType) {
  return (
    <Wrapper
      onClick={() => {
        window.location.href = book.url;
      }}
    >
      <div key={book.title}>{book.title}</div>
      <img src={book.thumbnail} alt={book.title} />
      <div>{book.price}</div>
    </Wrapper>
  );
}

export default Book;
