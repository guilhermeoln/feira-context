import { createContext, useState, useContext } from "react";



export const CarrinhoContext = createContext();


export const CarrinhoProvider = ({ children }) => {

    const [carrinho, setCarrinho] = useState([]);

    return (
        <CarrinhoContext.Provider value={{carrinho, setCarrinho}}>
            {children}
        </CarrinhoContext.Provider>
    );
}

export const useCarrinho = () => {

    const { carrinho, setCarrinho } = useContext(CarrinhoContext);

    function addToCart(produto) {
        setCarrinho([...carrinho, {...produto, quantidadeCompra : 1}]);
        alert(`${produto.nome} Adicionado!`)
    }

    function mudarQuantidade(produto, quantidade){
        setCarrinho(carrinho.map((produtoCarrinho) => {
            if(produtoCarrinho.id === produto.id) produtoCarrinho.quantidadeCompra += quantidade
            return produtoCarrinho;
        }))
    }

    function removerProduto(produto){
        const produtoRemovido = carrinho.filter((produtoCarrinho) => produtoCarrinho.id != produto.id)

        setCarrinho(produtoRemovido);
    }

    return {
        carrinho,
        addToCart,
        mudarQuantidade,
        removerProduto
    }
}