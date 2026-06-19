import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB", 
    overflow: "hidden", 
    marginBottom: 20,
  },

  containerImagem: {
    width: "100%",
    position: "relative", 
  },
  imagem: {
    width: "100%",
    height: 140,
    objectFit: "cover"
  },
  pilula: {
    position: "absolute",
    top: 10,
    right: 10,
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  pilulaText: {
    color: "#FFFFFF",
    fontSize: 12,
    fontWeight: "bold",
  },

  containerConteudo: {
    padding: 16, 
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#50606F",
    marginBottom: 8,
  },
  containerEndereco: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  textoEndereco: {
    color: "#50606F", 
    fontSize: 14,
    marginLeft: 4,
  },

  headerEstoque: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 6,
  },
  textoEstoqueGeral: {
    fontSize: 12,
    color: "#50606F",
  },
  textoStatus: {
    fontSize: 12,
    fontWeight: "bold",
  },
  barra: {
    height: 6,
    width: "100%",
    backgroundColor: "#E2E8F0",
    borderRadius: 3,
    marginBottom: 16, 
  },
  barrinha: {
    height: "100%",
    borderRadius: 3,
  },
});
