
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Views/Blog';
import ListadoPeliculas from './Views/ListadoPeliculas';

export default function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<ListadoPeliculas />} />
      <Route path="Blog" element={<Blog />} />
    </Routes>
  </BrowserRouter>
  );
}
