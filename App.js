import { StyleSheet, Text, Image, View, SafeAreaView, StatusBar, Pressable, Linking } from 'react-native';

const colorGitHub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/86981163?v=4';
const urlToMyGithub = 'https://github.com/mjkaraujo';

export default function App() {

  const handIePressGoToGithub = async () => {
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      await Linking.openURL(urlToMyGithub);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colorGitHub} barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.text}>Estudo de React Native</Text>
        <Image accessibilityLabel='Imagem do Mauricio no parque' style={styles.avatar} source={{ uri: imageProfileGithub }} />
        <Text accessibilityLabel='Nome: Mauricio Araujo' style={[styles.defautText, styles.name]}>Mauricio Araujo</Text>
        <Text accessibilityLabel='NickName: mjkAraujo' style={[styles.defautText, styles.nickName]}>mjkAraujo</Text>
        <Text accessibilityLabel='Descrição: Desenvolvedor' style={[styles.defautText, styles.description]}>Desenvolvedor</Text>
        <Pressable onPress={handIePressGoToGithub}>
          <View style={styles.button}>
            <Text style={[styles.defautText, styles.textButton]}>Open in GitHub</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { //colums
    flex: 1, // Expandir para a tela inteira
    backgroundColor: colorGitHub,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  content: {
    alignItems: 'center',
    padding: 20,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'yellow',
  },
  avatar: {
    marginTop: 20,
    width: 150,
    height: 150,
    borderRadius: 75,
    borderColor: 'white',
    borderWidth: 2,
  },
  defautText: {
    color: 'white',
  },
  name: {
    marginTop: 10,
    fontWeight: 'bold',
    fontSize: 28,
  },
  nickName: {
    fontSize: 18,
    color: 'grey',
  },
  description: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {
    backgroundColor: 'grey',
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
  },
  textButton: {
    fontWeight: 'bold',
    fontSize: 14,
  },
});
