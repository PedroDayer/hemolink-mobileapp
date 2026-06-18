// Nota: esse componente sera usado para: Ex:
//  -Busca sem resultados;
//  -Lista vazia;
//  -Dados vindos da API vazios;
//  -Nenhum favorito salvo;
//  -Você não possui notificações.

import { Text, View } from "react-native";

export const EmptyState = () => {
  return (
    <View>
      <Text></Text>
    </View>
  );
};
