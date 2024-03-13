import './App.css';
import { Route, BrowserRouter } from "react-router-dom";
import Menu from './ProvaViagem/Menu/Menu'
import Inicio from './ProvaViagem/Inicio/Inicio';
import Combustivel from './ProvaViagem/Combustivel/Combustivel';
import Destinos from './ProvaViagem/Destinos/Destinos';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Menu />
        <div className="display-prova">
          {/* <Route path="/" exact component={Inicio} /> */}
          <Route path="/viagem" exact component={Inicio} />
          <Route path="/viagem/Combustivel" component={Combustivel} />
          <Route path="/viagem/Destinos" component={Destinos} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
