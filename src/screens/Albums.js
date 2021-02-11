import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from 'react-native';
import fetchRecentAlbum from '../api';

const Album = () => {
    const [album, setAlbum] = useState([]);

    const handlerStart = () =>{
        const getAlbum = async () => {
            const newAlbums = await fetchRecentAlbum();
      
            setAlbum(newAlbums);
          };
        getAlbum()
    }
    useEffect(() => {
        handlerStart();
    }, []);
    return(
        <View style={styles.container}>
            <Text>{album}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Album();