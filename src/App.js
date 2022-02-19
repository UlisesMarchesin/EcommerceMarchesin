import './App.css';
import Footer from './components/footer'

function App() {

  const mensajeBienvenida = 'Bienvenidos a React!!'

  const stylesLi = {
    color: 'red'
  }

  const alertMsg = () => { alert('Hola') }

  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <h1>{mensajeBienvenida}</h1>
      <ul>
        <li style={stylesLi}>React</li>
        <li>JSX</li>
        <li>Webpack</li>
      </ul>
      <Footer name="Ana" action={alertMsg}>
        <h3>Mi children</h3>
        <h4>Otro children</h4>
      </Footer>
    </div>
  );
}

export default App;
