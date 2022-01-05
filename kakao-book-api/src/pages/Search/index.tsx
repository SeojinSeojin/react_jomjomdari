import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from 'react-router-dom';
import Book from '../../components/Book';
import Selector from '../../components/common/Selector';
import { useAuthentication } from '../../hooks/useAuthentication';
import { BookWrapper, SelectorWrapper } from './style';

type BookType = {
  title: string;
  price: number;
  thumbnail: string;
  url: string;
};

function SearchPage() {
  const { token } = useAuthentication();
  const [searchParams, setSearchParams] = useSearchParams({ query: '' });
  const [selectedQuery, setSelectedQuery] = useState<string | null>(null);
  const [books, setBooks] = useState<BookType[]>([]);

  useEffect(() => {
    if (!token) return;
    if (selectedQuery === '' || !selectedQuery) {
      setBooks([]);
      return;
    }
    axios
      .get(
        `https://dapi.kakao.com/v3/search/book?target=title&query=${selectedQuery}`,
        { headers: { Authorization: token } }
      )
      .then((res) => {
        setBooks(res.data.documents);
      });
  }, [selectedQuery, token]);

  useEffect(() => {
    const searchQuery = searchParams.get('query');
    setSelectedQuery(searchQuery);
  }, [searchParams]);

  return (
    <>
      <SelectorWrapper>
        {['수학', '과학', '국어', '영어'].map((query) => (
          <Selector
            key={query}
            isSelected={selectedQuery === query}
            content={query}
            onClick={() => setSearchParams({ query })}
          />
        ))}
      </SelectorWrapper>
      <BookWrapper>
        {books.map((book) => (
          <Book
            title={book.title}
            price={book.price}
            thumbnail={book.thumbnail}
            url={book.url}
            key={book.title}
          />
        ))}
      </BookWrapper>
    </>
  );
}

export default SearchPage;
