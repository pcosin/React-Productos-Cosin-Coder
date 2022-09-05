import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/itemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from './components/Main/cart/Cart';

function App() {
  return (
   <BrowserRouter>
   <NavBar />
   <Routes>
   <Route path='/' element= {<ItemListContainer name = "Bienvenidos a nuestra tienda de cerámicas" />}/>
   <Route path="/categoria/:categoriaId" element= { <ItemListContainer />} />  
   <Route path="/detail/:detailId" element= { <ItemDetailContainer />} />
   <Route path="/cart" element={<Cart />} />
   </Routes>
   </BrowserRouter>
   
  );
}

export default App;
