import { createContext, useState } from "react";


export const ProdutosContext = createContext();



export const ProdutosProvider = ({children}) => {

    const [produtos, setProdutos] = useState([
        {
            id: 1,
            nome: 'Abacate',
            imagem: "https://saude.abril.com.br/wp-content/uploads/2017/07/abacate3.jpg?quality=85&strip=info&w=680&h=453&crop=1",
            valor: 3
        },
        {
            id: 2,
            nome: 'Melancia',
            imagem: "https://us-southeast-1.linodeobjects.com/storage/greenfruit/media/uploads/produto/melancia_in_natura_kg_02546c91-e229-4c28-adc3-ff709a70f5d6.png",
            valor: 8
        },
        {
            id: 3,
            nome: 'Abacaxi',
            imagem: "https://ibassets.com.br/ib.item.image.big/b-c07a880332b647379357fc8accae1e45.jpeg",
            valor: 5
        },
        {
            id: 4,
            nome: 'Melão',
            imagem: "https://s3-sa-east-1.amazonaws.com/bluesoft-erp/sitioverde/ecommerce/produtos/fotos/4d028fc0-ce0d-4b0b-a358-aead88b69dd3/foto_product.jpg",
            valor: 7
        }
    ])

    return(
        <ProdutosContext.Provider value={{produtos}}>
            {children}
        </ProdutosContext.Provider>
    );
}
