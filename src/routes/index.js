import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import { UsuarioProvider } from '../context/Usuario';
import { ProdutosProvider } from '../context/Produtos';
import Produtos from '../pages/Produtos';
import { CarrinhoProvider } from '../context/Carrinho';

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <UsuarioProvider>
                <CarrinhoProvider>
                    <ProdutosProvider>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/produtos" element={<Produtos />} />
                        </Routes>
                    </ProdutosProvider>
                </CarrinhoProvider>
            </UsuarioProvider>
        </BrowserRouter>
    );
}