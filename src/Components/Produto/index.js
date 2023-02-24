import { Flex, Text, Image, Button } from '@chakra-ui/react';
import { useCarrinho } from '../../context/Carrinho';



export default function Produto(props) {

    const { id, nome, valor, imagem } = props;

    const { carrinho, addToCart, mudarQuantidade, removerProduto } = useCarrinho();

    const produtoNoCarrinho = carrinho.find((produtoCarrinho) => produtoCarrinho.id === id);

    return (
        <Flex
            alignItems="center"
            justifyContent="space-around"
            width="100%"
            borderRadius="5px"
            boxShadow="0px 7.03294px 14.0659px rgba(69, 69, 69, 0.24);"
            padding="20px"
            marginTop="20px"
        >
            <Image
                src={imagem}
                alt={nome}
                width="50px"
                height="50px"
            />
            <Text
                fontSize="20px"
                width="120px"
            >
                {nome}
            </Text>
            {produtoNoCarrinho
                &&
                <>
                    <Button
                        onClick={ () => {
                            if(produtoNoCarrinho.quantidadeCompra > 1){
                                mudarQuantidade(props, -1)
                            }
                        }}
                    >
                        -
                    </Button>
                    <Text>
                        {produtoNoCarrinho.quantidadeCompra}
                    </Text>
                    <Button
                        onClick={ () => mudarQuantidade(props, 1)}
                    >
                        +
                    </Button>
                </>
            }
            <Text
                fontSize="20px"
            >
                R${valor}
            </Text>
            {!produtoNoCarrinho
                ?
                <Button
                    onClick={() => addToCart(props)}
                >
                    Comprar
                </Button>
                :
                <Button
                    backgroundColor="red"
                    onClick={ () => removerProduto(props)}
                >
                    X
                </Button>
            }
        </Flex>
    );
}