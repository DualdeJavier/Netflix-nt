
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Blog from './Views/Blog';
import ListadoPeliculas from './Views/ListadoPeliculas';
import Celebrity01 from './Views/Celebrity01';
import Celebrity02 from './Views/Celebrity02';
import Blockbuster from './Views/BlockBuster';
import CelebrityInfo from './Views/CelebrityInfo';
import CelebritySingle from './Views/CelebritySingle';

export default function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route path="/" element={<ListadoPeliculas />} />
      <Route path="Blog" element={<Blog />} />
      <Route path="Blockbuster" element={<Blockbuster />} />
      <Route path="Celebrity01" element={<Celebrity01 />} />
      <Route path="Celebrity02" element={<Celebrity02 />} />
      <Route path="celebrity-info" element={<CelebrityInfo />} />
      <Route path="celebritySingle" element={<CelebritySingle />} />
    </Routes>
  </BrowserRouter>
  );
}
