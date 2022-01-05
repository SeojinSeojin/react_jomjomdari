import React from 'react';

type BookType = {
  title: string;
  price: number;
  thumbnail: string;
  url: string;
};

function Book(book: BookType) {
  return (
    <div
      onClick={() => {
        window.location.href = book.url;
      }}
    >
      <div key={book.title}>{book.title}</div>
      <img src={book.thumbnail} alt={book.title} />
      <div>{book.price}</div>
    </div>
  );
}

export default Book;
