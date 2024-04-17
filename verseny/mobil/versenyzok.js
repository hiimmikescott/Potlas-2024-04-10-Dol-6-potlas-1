/*
* File: versenyzok.js
* Author: Szekeres miklos
* Copyright: 2024, Szekeres Miklós
* Group: Szoft II/2
* Date: 2024.04.17
* Github: https://github.com/hiimmikescott
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, SafeAreaView } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, Image, FlatList} from 'react-native';

export default function versenyzok() {

        const url1 = 'http://localhost:8000/versenyzok';
       
        const [versenyzok, setVersenyzok] = useState([]);
       
        function handleFetchButton() {
          fetch(url1)
          .then(resp => resp.json())
          .then(data => {
            console.log(data)      
            setVersenyzok(data);      
          })
          .catch( error => {
            alert('Hiba: ' + error);
          })
        }

        useEffect(() => {
            handleFetchButton();
            }, [])
       
        return (
          
          <View style={styles.container}>
          <Text style={styles.h1}>Versenyzök</Text>
            
        <FlatList 
            data = {versenyzok}
            renderItem={ ({item}) => (
                <Text style={styles.listitem}>
                    Nev: {item.nev}{"\n"}
                    Születési idö: {item.szuletes}{"\n"}
                    Nem: {item.nem}{"\n"}
                    Súly: {item.suly}{"\n"}
                    Csapat id: {item.klubId}
                </Text>

            )}
        />

            <StatusBar style="auto" />
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20
  },
  listitem: {
    backgroundColor: 'gray',
    borderColor: 'rgba(0, 0, 0, .5)',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    color: 'white'
  },
  h1: {
    fontSize: 50,
    padding: 10,
    fontWeight: 'bold', 
    textAlign: 'center',
  },
});