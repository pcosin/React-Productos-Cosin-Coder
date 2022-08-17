import './App.css';
import ItemListContainer from './components/Main/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';

function App() {
  return (
    <>
   <NavBar />
   <ItemListContainer name = "Saludos" />
   </>
  );
}

export default App;
