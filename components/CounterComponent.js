import React, { useMemo } from 'react'
import { View ,Button,Text} from 'react-native'

export const CounterComponent = ({counter,setCounter,setCounter1,counter1}) => {
    const handleCounter =()=>{
        setCounter(counter+1)
    }
    const handleCounter1 =()=>{
        setCounter1(counter1+1)
    }

    const memoVar= useMemo(()=>{
        return counter1+counter
    },[counter])

    return (
        <View>
            <Text>{counter}</Text>
            <Button onPress={handleCounter} title='press 1'/>
            <Text>{counter1}</Text>
            <Button onPress={handleCounter1} title='press 2'/>
            <Text>Total: {memoVar}</Text>
        </View>
    )
}
