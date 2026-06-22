import React from 'react'
import { ScrollView, View, Text, FlatList } from 'react-native'
import { styles } from './style'
import { Header } from '../../components/Hearder'
import { ICONS } from '../../icones'
import Icon from "@expo/vector-icons/Ionicons";
import { BotaoAtalho } from '../../components/BotaoAtalho'
import { categorias } from './helper'
import { theme } from '../../theme'
export const LojaDePontos = () => {
  return (
    <View>
      <Header />
      <ScrollView style={styles.container}>


        <Text style={{ fontWeight: 700, fontSize: 22 }}>Loja de Pontos</Text>
        <Text>Use seus pontos para ganhar recompensas incriveis</Text>


        <View style={styles.pointsContainer}>
          <View style={styles.heroSquare} />
          <Icon style={styles.gifIcon} name={ICONS.gift} size={60} color="white" />
          <View style={{ padding: 20, gap: 10 }}>
            <Text style={styles.textWhite}>Meu Texto</Text>
            <Text style={[styles.textWhite, styles.points]}>3000</Text>
            <Text style={styles.textWhite}>Faça uma doação e ganhe pontos</Text>
          </View>
        </View>

        <Text>Categorias</Text>

        <View>
           <View style={styles.fullWidthSection}>
            <FlatList
              data={categorias}
              keyExtractor={(item) => item.id}
              horizontal
              scrollEnabled={true}
              contentContainerStyle={[
                styles.categoriesContainer,
                { paddingBottom: 10 }
              ]}
              renderItem={({ item }) => {
                return (
                  <View>
                    <BotaoAtalho
                      label={item.label}
                      icon={item.icon}
                      onPress={() => { }}
                      corIcone={`${theme.colors.primary}`}
                    />
                  </View>
                );
              }}
            />
          </View>
        </View>
          
        <Text>Destaques para você</Text>

        <View>
            <Text>Google Play R$ 50,00</Text>

        </View>

      </ScrollView>
    </View>


  )
}
