import {
    Flex,
    Text
} from '@chakra-ui/react';

import { useContext } from 'react';
import { CarrinhoContext } from '../../context/Carrinho';


export default function Carrinho(){

    const { carrinho } = useContext(CarrinhoContext);

    return(
        <Flex
            flexDirection="column"
            marginTop="20px"
        >
            <Text
                fontWeight="700"
                fontSize="28px"
                textTransform="uppercase"
            >
                Detalhes do pedido
            </Text>
            <hr />
            {carrinho.map((produtoCarrinho) => (
                <Text
                    marginTop="15px"
                >
                    {produtoCarrinho.quantidadeCompra}x {produtoCarrinho.nome}
                </Text>
            ))}
        </Flex>
    );
}