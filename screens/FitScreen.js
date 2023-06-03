import { useRoute } from '@react-navigation/native'
import React, { useState} from 'react'
import { SafeAreaView, Text, Image, Pressable} from 'react-native'

const FitScreen = () => {
  const route = useRoute()
  // console.log(route.params)
  const [index, setIndex] = useState(0)
  const excersises = route.params.excersises
  const current = excersises[index]
  // console.log(current,"first exercises")
  return (
    <SafeAreaView>
      <Image style={{width: "100%", height: 370}} source={{url:current.image}}/>
      <Text 
        style={{
          marginLeft:"auto",
          marginTop:30,
          marginRight:"auto",
          fontSize:30,
          fontWeight:'bold'
        }}
      >
        {current.name}
      </Text>

      <Text
         style={{
          marginLeft:"auto",
          marginTop:30,
          marginRight:"auto",
          fontSize:38,
          fontWeight:"bold"
        }}
      >
        x{current.sets}
      </Text>

      <Pressable 
        style={{
          width: 150,
          backgroundColor:"blue",
          marginLeft:"auto",
          marginRight: "auto",
          marginTop:30,
          borderRadius:20,
          padding:10
        }}
      >
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>DONE</Text>
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen