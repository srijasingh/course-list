import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './components/Home';
import Form from './components/Form';
import Enquiries from './components/Enquiries';
import NotFound from './components/NotFound';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} exact />
          <Route path="/courses" element={<Home/>} />
          <Route path="/form/:name" element={<Form/>} />
          <Route path="/enquiries" element={<Enquiries/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
      )
  }
export default App;
