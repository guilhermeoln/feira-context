import { useContext } from 'react';

import {
    Flex,
    Text,
    Button
} from '@chakra-ui/react';

import { useNavigate } from 'react-router-dom';

import { ProdutosContext } from '../../context/Produtos';
import { UsuarioContext } from '../../context/Usuario';
import Produto from '../../Components/Produto';
import Carrinho from '../../Components/Carrinho';
import { useCarrinho } from '../../context/Carrinho';


export default function Produtos() {

    const { produtos } = useContext(ProdutosContext);

    const { nomeUsuario } = useContext(UsuarioContext);

    const { carrinho } = useCarrinho();

    const navigate = useNavigate();

    return (
        <Flex
            justifyContent="center"
            width="100%"
        >
            <Flex
                flexDirection="column"
                width="50%"
                marginTop="30px"
            >
                <Text
                    fontSize="30px"
                    textTransform="uppercase"
                >
                    Olá, {nomeUsuario}
                </Text>
                {produtos.map((produto) => (
                    <Produto key={produto.id} {...produto} />
                ))}
                {carrinho.length > 0 
                    &&
                    <Carrinho />
                }
                <Button
                    marginTop="20px"
                    onClick={() => navigate(-1)}
                >
                    Voltar
                </Button>
            </Flex>
        </Flex>
    );
}