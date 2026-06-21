import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@hemolink:fotoPerfil';

export const salvarFoto = async (uri: string) => {
    try {
        await AsyncStorage.setItem(CHAVE, uri);
    } catch (e) {
        console.log('Erro ao salvar foto:', e);
    }
};

export const lerFoto = async (): Promise<string | null> => {
    try {
        return await AsyncStorage.getItem(CHAVE);
    } catch (e) {
        console.log('Erro ao ler foto:', e);
        return null;
    }
};