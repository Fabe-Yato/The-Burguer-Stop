import Header from '../src/Componentes/Header'
import Button from '../src/Componentes/Button'
import './Menu.css'
function App() {
  return (
    <div>
      <Header/>
      <h1 className = 'texto'>O melhor hamburguer artesanal da cidade de São Paulo, agora ao seu alcance.</h1>
      <p className = 'texto2'>Faça seu pedido agora mesmo! Frete grátis para toda São Paulo.</p>

      <Button/>
    </div>
  );
}

export default App;
