
import { createRoot } from 'react-dom/client'
import Navbar from './components/Navbar.tsx'
import Cards from "./components/Cards.tsx";
import Form from './components/Form.tsx';
import Articles from './components/Articles.tsx';
import '../src/components/style.css'
import Pages from './components/Pages.tsx';
// import List from './components/List.tsx';
import Footer from "./components/Footer.tsx";
// import App from './App.tsx';


createRoot(document.getElementById('root')!).render(
  
    <>
    
      <Navbar />
      {/* <App /> */}
      <Cards />
      <Articles />
      <Pages />
    
    <Form />
    <Footer />
    
    
    </>
 
)
