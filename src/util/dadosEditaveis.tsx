import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@hemolink:dadosEditaveis';

type DadosEditaveis = {
    nome: string;
    telefone: string;
};

export const salvarDados = async (dados: DadosEditaveis) => {
    try {
        await AsyncStorage.setItem(CHAVE, JSON.stringify(dados));
    } catch (e) {
        console.log('Erro ao salvar dados:', e);
    }
};

export const lerDados = async (): Promise<DadosEditaveis | null> => {
    try {
        const dados = await AsyncStorage.getItem(CHAVE);
        return dados ? JSON.parse(dados) : null;
    } catch (e) {
        console.log('Erro ao ler dados:', e);
        return null;
    }
};