import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./component/Home";
import Document from './component/Document';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/document' element={<Document/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
