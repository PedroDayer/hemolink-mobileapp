import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { TabsRouters } from "./tabs";
import { Text, View } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Perfil } from "../pages/Perfil";
import { Catalogo } from "../pages/Catalogo";
import { ParametrosRotasDrawer } from "./navigation";
import { LojaDePontos } from "../pages/LojaDePontos";

const Drawer = createDrawerNavigator<ParametrosRotasDrawer>();

const CustomizacaoDrawer = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <View style={{ padding: 20, backgroundColor: "#f4f4f4" }}>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>Menu</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
};

export const DrawerRouters = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
      }}
      drawerContent={(props) => <CustomizacaoDrawer {...props} />}
    >
      <Drawer.Screen
        name="DrawerHome"
        component={TabsRouters}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="home" color={color} size={size} />
          ),
          drawerLabel: "Início",
          title: "",
        }}
      />
      <Drawer.Screen
        name="DrawerPerfil"
        component={Perfil}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="user" color={color} size={size} />
          ),
          drawerLabel: "Perfil",
          title: "Perfil",
        }}
      />
      <Drawer.Screen
        name="DrawerCatalogo"
        component={Catalogo}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
          drawerLabel: "Catalogo",
          title: "Catalogo",
        }}
      />
      <Drawer.Screen
        name="DrawerLojaPontos"
        component={LojaDePontos}
        options={{
          drawerIcon: ({ color, size }) => (
            <Feather name="list" color={color} size={size} />
          ),
          drawerLabel: "Loja de Pontos",
          title: "Loja de Pontos",
        }}
      />
    </Drawer.Navigator>
  );
};