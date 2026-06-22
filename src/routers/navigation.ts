export type ParametrosRotasAuth = {
  Login: undefined;
  Cadastro: undefined;
};

export type ParametrosRotasApp = {
  AppHome: undefined;
  DetalheHospital: { id: string };
  CadastroHospital: { id?: string };
};

export type ParametrosRotasTabs = {
  TabsHome: undefined;
  TabsPerfil: undefined;
  TabsCatalogo: undefined;
  TabsAdministrador: undefined;
};

export type ParametrosRotasDrawer = {
  DrawerHome: undefined;
  DrawerPerfil: undefined;
  DrawerCatalogo: undefined;
  DrawerLojaPontos: undefined;
};

declare global {
  namespace ReactNavigation {
    interface RootParamList extends ParametrosRotasDrawer, ParametrosRotasTabs, ParametrosRotasAuth, ParametrosRotasApp {}
  }
}