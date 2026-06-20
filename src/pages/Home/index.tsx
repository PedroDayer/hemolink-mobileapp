import { ScrollView, Text, View } from "react-native";
import { Header } from "../../components/Hearder";
import { styles } from "./style";

export const Home = () => {
  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitulo}>
          <View style={styles.containerTituloFilho}>
            <Text style={styles.title}>Olá, "usuário" 😆</Text>
            <Text style={styles.subTitle}>
              Seu gesto salva vidas todos os dias.
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
