import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from "react-native";
import { Header } from "../../components/Hearder";
import { styles } from "./style";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { Button } from "../../components/Button";
import { BotaoAtalho } from "../../components/BotaoAtalho";

export const Home = () => {
  const botoesFiltros = [
    {
      id: "1",
      label: "Agendar",
      icon: "calendar-outline",
      corIcone: "#9E001F",
    },
    { id: "2", label: "Histórico", icon: "time-outline", corIcone: "#9E001F" },
    {
      id: "3",
      label: "Carteirinha",
      icon: "card-outline",
      corIcone: "#9E001F",
    },
    {
      id: "4",
      label: "Indicar",
      icon: "share-social-outline",
      corIcone: "#9E001F",
    },
  ] as const;

  return (
    <View style={styles.containerMain}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.containerTitulo}>
          <View style={styles.containerTituloFilho}>
            <Text style={styles.titulo}>Olá, "usuário" 👋​</Text>
            <Text style={styles.subTitulo}>
              Seu gesto salva vidas todos os dias.
            </Text>
          </View>
        </View>

        <View style={styles.cardContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerTitulo}>SEU IMPACTO</Text>
            <FontAwesome name="heart" size={24} color="#FFDAD8" />
          </View>
          <View style={styles.statusContainer}>
            <View style={styles.miniCard}>
              <Text style={styles.numero}>3</Text>
              <Text style={styles.descricaoNumero}>Vidas Salvas</Text>
            </View>
            <View style={styles.miniCard}>
              <Text style={styles.numero}>1</Text>
              <Text style={styles.descricaoNumero}>Doação este ano</Text>
            </View>
          </View>
        </View>

        <View style={styles.containerAgendamento}>
          <View>
            <Text style={styles.tituloAgendamento}>PRÓXIMO AGENDAMENTO</Text>
          </View>
          <View style={styles.containerCalendario}>
            <TouchableOpacity>
              <Feather name="calendar" size={16} color="#C8102E" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.containerAgenda}>
          <View style={styles.data}>
            <Text style={styles.dataMes}>OUT</Text>
            <Text style={styles.dataDia}>25</Text>
          </View>
          <View style={styles.containerData}>
            <Text style={styles.tituloData}>Hospital Central</Text>
            <Text style={styles.subtituloData}>Terça-feira as 10:00</Text>
          </View>
          <View style={styles.containerBotao}>
            <Button
              texto="Ver local"
              fontSizeTexto={12}
              paddingHorizontal={5}
              paddingVertical={0}
              onPress={() => {}}
            />
          </View>
        </View>

        <View style={styles.containerBotoesPai}>
          <FlatList
            data={botoesFiltros}
            keyExtractor={(item) => item.id}
            horizontal
            scrollEnabled={false}
            contentContainerStyle={styles.listaBotoesConteudo}
            renderItem={({ item }) => {
              return (
                <View>
                  <BotaoAtalho
                    label={item.label}
                    icon={item.icon}
                    onPress={() => {}}
                    corIcone={item.corIcone}
                  />
                </View>
              );
            }}
          />
        </View>

        <View style={styles.containerCampanhas}>
          <View>
            <Text style={styles.tituloCampanhas}>CAMPANHAS EM DESTAQUE</Text>
          </View>
        </View>

        
      </ScrollView>
    </View>
  );
};
