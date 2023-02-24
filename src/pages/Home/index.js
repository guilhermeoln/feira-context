import {
    Flex,
    Input,
    Button
} from '@chakra-ui/react';

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UsuarioContext } from '../../context/Usuario';


export default function Home() {

    const { nomeUsuario, setNomeUsuario} = useContext(UsuarioContext);

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
                <Input 
                    placeholder='Digite o seu nome' 
                    value={nomeUsuario}
                    onChange={ e => setNomeUsuario(e.target.value)}
                />
                <Button
                    marginTop="20px"
                    isDisabled={nomeUsuario.length < 4}
                    onClick={ () => navigate('/produtos')}
                >
                    Continuar
                </Button>
            </Flex>
        </Flex>
    );
}