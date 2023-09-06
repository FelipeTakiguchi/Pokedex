import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import { PagamentoProvider } from "./context/Pagamentos";
import AddPagamento from "./components/AddPagamento";
import Historico from "./components/Historico";
import ReqPage from "./pages/ReqPage";
import FormPage from "./pages/Form";
import ListPokemons from "./components/ListPokemons";
import Describer from "./components/Describer";
import { PokemonsProvider } from "./context/Pokemons";

function App() {
  return (
    <>
      <PagamentoProvider>
        <PokemonsProvider>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/historico' element={<Historico />} />
            <Route path='/addPagamento' element={<AddPagamento />} />
            <Route path='/req' element={<ReqPage />} />
            <Route path='/form' element={<FormPage />} />
            <Route path='/listPokemons' element={<ListPokemons />} />
            <Route path='/pokemon/:id' element={<Describer />} />
            {/* <Route path='*' element={<NotFoundPage />} /> */}
          </Routes>
        </PokemonsProvider>
      </PagamentoProvider>
    </>
  );
}

export default App;