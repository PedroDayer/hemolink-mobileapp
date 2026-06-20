import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },

  containerFundo: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },

  modalView: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    padding: "5%",
    width: "90%",
    alignItems: "center",
    // height: "80%"
  },

  modalHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    justifyContent: "space-between",
    // borderColor: "pink",
    // borderWidth: 2
  },
});
