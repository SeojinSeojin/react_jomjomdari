import React from 'react';
import { Link } from 'react-router-dom';
import { useAuthentication } from '../../hooks/useAuthentication';

function HomePage() {
  const { setToken, resetToken, isAuthenticated } = useAuthentication();
  return isAuthenticated ? (
    <>
      <div>토큰을 이미 입력하셨어요!</div>
      <div onClick={resetToken}>토큰 초기화하기</div>
      <Link to='/search'>검색하러 가기</Link>
    </>
  ) : (
    <>
      <div>토큰을 안 입력하셨어요!</div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formTarget = e.target as HTMLFormElement;
          const inputTarget = formTarget.elements[0] as HTMLInputElement;
          setToken(inputTarget.value);
        }}
      >
        <input type='text' name='token_input' placeholder='토큰 입력하기' />
      </form>
    </>
  );
}

export default HomePage;
