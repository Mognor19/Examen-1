import React from 'react';
import { StyleSheet, Text, ScrollView ,View , Image} from 'react-native';
import Albums from './src/screens/Albums';
import fetchRecentAlbum from './src/api/index';

const { width , height} = Dimensions.get("screen");

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.album_reciente}>
            <View style={styles.text}>
              <Text>Primer titulo de primer Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/6dd9cb')}
            />
        </View>
        <View style={styles.album_reciente}>
            <View style={styles.text}>
              <Text>segundo titulo de primer Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/1b9d08')}
            />
        </View>
        <View style={styles.segundo_reciente}>
            <View style={styles.text}>
              <Text>primer titulo del segundo Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/6dd9cb')}
            />
        </View>
        <View style={styles.segundo_reciente}>
            <View style={styles.text}>
              <Text>segundo titulo del segundo Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/6dd9cb')}
            />
        </View>
        <View style={styles.tercer_reciente}>
            <View style={styles.text}>
              <Text>primer titulo del tercer Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/6dd9cb')}
            />

        </View>
        <View style={styles.tercer_reciente}>
            <View style={styles.text}>
              <Text>segundo titulo del tercer Album</Text>
            </View>
            <Image
              style={styles.image}
              source={require('https://via.placeholder.com/150/6dd9cb')}
            />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop:height * 0.1,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  album_reciente:{
    backgroundColor:"green",
    height:160,
    width:160,
  },
  segundo_reciente:{
    backgroundColor:"blue",
    height:160,
    width:160,
  },
  tercer_reciente:{
    backgroundColor:"purple",
    height:160,
    width:160,
  },
  image:{
    height:150,
    width:150,
  },
  text:{
    width:150,
    alignSelf:"flex-start",
  },
});
