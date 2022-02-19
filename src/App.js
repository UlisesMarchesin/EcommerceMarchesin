import './App.css';
import ItemListContainer from './components/container/ItemListContainer';
import NavBar from './components/NavBar';

const App = () => {
  return (
    <>
      <NavBar></NavBar>
      <ItemListContainer saludo="Hola"></ItemListContainer>
    </>
  )
}

export default App