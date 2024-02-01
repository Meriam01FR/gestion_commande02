import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AddCommande from './Composants/AddCommande';
import UpdateCommande from './Composants/UpdateCommande';
import CommandeList from './Composants/CommandeList';
function App() {
  return (
    <div style={{paddingLeft:40}}>
      <h1>GESTION DES COMMANDES</h1>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<CommandeList />} />
          <Route path='/add-commande' element={<AddCommande />} />
          <Route path='/update-commande/:id' element={<UpdateCommande/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;