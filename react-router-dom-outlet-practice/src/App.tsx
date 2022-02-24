import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import First from './pages/First';
import Second from './pages/Second';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='first/*' element={<First />}>
          <Route path='second' element={<Second />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
