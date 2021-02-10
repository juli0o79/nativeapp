import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Alert,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
  Platform,
} from "react-native";
import { Container, Text, Image, Button, ButtonText } from "./styles";
export default function App() {
  const dealWithTouch = () => {
    console.log("imagem tocada");
    /* o style, ali na View, recebe um objeto. No caso, vc pode referenciar um objeto de uma variácel
    como a const styles lá embaixo, ou vc pode chamar um objeto direto com as características desejadas.
    No caso, vc vai abrir outra chaves para escrever um objeto direto, ou apenas referenciar a propriedade de styles, que é
    um objeto ver 1:10:46 para entender melhor*/
    // stylesheet.create assegura que as  propriedas do objeto estão corretas
    //No caso do obeto javascript puro, o native não aponta um erro
    //Você também, pode colocar uma array e referenciar mais de um objeto
  };
  return (
    <Container>
      <View style={{ backgroundColor: "none" }}></View>
      <Text onPress={() => console.log("clicado")}>Helloo World!</Text>
      <Image source={require("./assets/splash.png")} />
      <TouchableWithoutFeedback onPress={dealWithTouch}>
        <Image source={{ uri: "https://picsum.photos/200/300" }} />
      </TouchableWithoutFeedback>
      <Button
        onPress={() =>
          Alert.alert("Título da mensagem", "mensagem", [
            { text: "Sim", onPress: () => console.log("Acesso permitido.") },
            { text: "Não", onPress: () => console.log("Acesso negado.") },
          ])
        }
      >
        <ButtonText>Sou um botão</ButtonText>
      </Button>
      <StatusBar style="auto" />
      <View style={styles.PlatContainer}></View>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1c",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
  },
  PlatContainer: {
    backgroundColor: Platform.OS === "android" ? "blue" : "red",
    height: 25,
    width: 100,
  },
});
