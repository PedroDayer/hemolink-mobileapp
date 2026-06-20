import { Modal, Text, View, Pressable } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

interface ProspModalDoacao {
  visible: boolean;
  onClose: () => void;
  modalClose: () => void;
}

export const ModalDoacao = ({
  visible,
  onClose,
  modalClose,
}: ProspModalDoacao) => {
  return (
    <View style={styles.container}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={visible}
        onRequestClose={onClose}
      >
        <View style={styles.containerFundo}>
          <View style={styles.modalView}>
            <View style={styles.modalHeader}>
              <Text style={{ color: "#141D23", fontSize: 20,  fontWeight: 500}}>Contribuir com a Causa</Text>
              <View>
                <Pressable onPress={modalClose}>
                  <Ionicons name="close" size={24} color="#5C5F60" />
                </Pressable>
              </View>
            </View>
            <View
              style={{
                borderColor: "#EAD0CF",
                borderWidth: 0.1,
                width: "100%",
                marginHorizontal: 30,
              }}
            ></View>

            <View style={{ marginTop: 10 }}>
              <Text style={{ color: "#5C5F60", fontSize: 13,  fontWeight: 500}}>
                Sua doação apoia diretamente a infraestrutura de coleta de
                sangue de sangue e o alcance comunitário.
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};
