
import { Route, Routes } from 'react-router-dom';
import Allresturnts from './Allresturnts';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import Viewretuarent from './Viewretuarent';




function App() {
  return (
    <>
    <header>
      <Header/>

    </header>
      <section>
        <Routes>
          <Route path="/" element={ <Allresturnts/>} />
          <Route path="/view-resturent/:id" element={<Viewretuarent/>} />
        </Routes>
       
      </section>
      <footer>
        <Footer/>
      </footer>
     
    </>
  );
}

export default App;
