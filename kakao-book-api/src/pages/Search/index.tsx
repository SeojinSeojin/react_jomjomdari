import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Book from '../../components/Book';
import Selector from '../../components/common/Selector';
import { useAuthentication } from '../../hooks/useAuthentication';

type BookType = {
  title: string;
  price: number;
  thumbnail: string;
  url: string;
};

function SearchPage() {
  const { token } = useAuthentication();
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [books, setBooks] = useState<BookType[]>([]);
  useEffect(() => {
    if (!token || !selectedQuery) return;
    axios
      .get(
        `https://dapi.kakao.com/v3/search/book?target=title&query=${selectedQuery}`,
        { headers: { Authorization: token } }
      )
      .then((res) => {
        setBooks(res.data.documents);
      });
  }, [selectedQuery, token]);
  return (
    <>
      <div style={{ display: 'flex' }}>
        {['수학', '과학', '국어', '영어'].map((query) => (
          <Selector
            key={query}
            isSelected={selectedQuery === query}
            content={query}
            onClick={() => setSelectedQuery(query)}
          />
        ))}
      </div>
      <div>
        {books.map((book) => (
          <Book
            title={book.title}
            price={book.price}
            thumbnail={book.thumbnail}
            url={book.url}
            key={book.title}
          />
        ))}
      </div>
    </>
  );
}

export default SearchPage;
