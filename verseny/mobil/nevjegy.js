/*
* File: nevjegy.js
* Author: Szekeres miklos
* Copyright: 2024, Szekeres Miklós
* Group: Szoft II/2
* Date: 2024.04.17
* Github: https://github.com/hiimmikescott
* Licenc: GNU GPL
*/


import { StatusBar } from 'expo-status-bar';
import { useState, useEffect } from 'react';
import { Pressable, StyleSheet, Text, TextInput, View, ImageBackground } from 'react-native';

export default function versenyzok() {

    const [date, setDate] = useState("");

    function getdate(){
        let datevar = new Date().toLocaleString()
        console.log(datevar)
        setDate(datevar);
    }

    useEffect(() => {
        getdate()
        }, [])

        return (
      <View>
        <ImageBackground 
          source={require('./assets/wallhaven-2y6wwg.jpg')} 
          style={{height: '100%',width: '100%' }}    
        />
          <View style={styles.container}>
          <Text style={styles.h1}>
           Szekeres Miklós{"\n"}
            SZOFT II/2{"\n"}
            Projek készités ideje: 2024.04.17{"\n"}
           Jelenlegi dátum: 
          <TextInput style={styles.ido}
              value={date}
            />
        </Text>

        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 20,
    
  },
  h1:{
    borderColor: 'rgba(0, 0, 0, .5)',
    backgroundColor: 'darkgray',
    width: '30%',
    alignSelf: 'center',
    borderWidth: 1,
    margin: 10,
    padding: 5,
    borderRadius: 10,
    fontSize: 40,
    fontFamily: 'sans-serif-medium',
    fontWeight: 'normal',
    color:'white',
  },    
  ido:{
    color: 'gray',
    paddingLeft: 5,
    fontSize: 20
  }
});