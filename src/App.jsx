import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Inicio from './pages/inicio';
import Contacto from './pages/contacto';
import Blog from './pages/blog';
import LayoutPublic from "./Layouts/LayoutPublic";
import NotFound from "./pages/NotFound";

const App = () => {
return <>
<Navbar />
   <Routes>
      <Route path="/" element={ < LayoutPublic/>}>
         <Route element={ <Inicio /> } index></Route> 
         <Route element={ <Contacto /> } path="/contacto"></Route> 
         <Route element={ <Blog /> } path="/blog"></Route>
      </Route>
      <Route element={ <NotFound /> } path="*"></Route>
   </Routes>
</>
};

export default App;