/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <>
      <View style={{flexDirection: 'column'}}>
        <Text style={styles.title}>Welcome to Globoticket</Text>
        <Image
          style={styles.globologo}
          source={{
            uri: 'https://images.unsplash.com/photo-1593643946890-b5b85ade6451?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1978&q=80',
          }}
        />
      </View>
      <Text style={styles.subtitle}>Ramalaso</Text>
      <View style={styles.textcontainer}>
        <Text style={styles.content}>{introText}</Text>
      </View>
    </>
  );
};

const introText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const styles = StyleSheet.create({
  content: {
    marginTop: 2,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
  },
  subtitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  textcontainer: {
    fontWeight: '700',
  },
  globologo: {
    width: '100%',
    height: '50%',
  },
});

export default App;
