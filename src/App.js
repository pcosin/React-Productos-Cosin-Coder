import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import ItemDetailContainer from './components/Main/itemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
   <NavBar />
   <ItemListContainer name = "Bienvenidos a nuestra tienda de cerámicas" />
   <ItemDetailContainer />
   </>
  );
}

export default App;
