import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CounterComponent } from './components/CounterComponent';

export default function App() {
  const [counter,setCounter]=useState(0)
  const [counter1,setCounter1]=useState(0)

  const styles=styleFunction(counter1==counter)

  return (
    <View style={styles.container}>
      <CounterComponent counter={counter} counter1={counter1 } setCounter1={setCounter1 }setCounter={setCounter}/>
    </View>
  );
}

const styleFunction = (condition)=>{
  return StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: condition ? 'red':'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
})};
