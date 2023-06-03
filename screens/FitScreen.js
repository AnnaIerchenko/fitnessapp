import { useNavigation, useRoute } from '@react-navigation/native'
import React, { useState} from 'react'
import { SafeAreaView, Text, Image, Pressable} from 'react-native'

const FitScreen = () => {
  const route = useRoute()
  // console.log(route.params)
  const navigation = useNavigation()
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
          marginTop:10,
          marginRight:"auto",
          fontSize:30,
          fontWeight:"bold"
        }}
      >
        x{current.sets}
      </Text>
        {index + 1 >= excersises.length ? (        
      <Pressable
      onPress={() => {
        navigation.navigate("Home")
      }}
        style={{
          width: 150,
          backgroundColor:"blue",
          marginLeft:"auto",
          marginRight: "auto",
          marginTop:10,
          borderRadius:20,
          padding:10
        }}
      >
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>
          DONE
        </Text>
      </Pressable>
      ) : ( 
      <Pressable
      disabled={index === 0}
      onPress={() => {
        navigation.navigate("Rest")
 
        setTimeout(() => {
          setIndex(index + 1)
        }, 2000)
      }}
        style={{
          width: 150,
          backgroundColor:"blue",
          marginLeft:"auto",
          marginRight: "auto",
          marginTop:10,
          borderRadius:20,
          padding:10
        }}
      >
        <Text style={{textAlign:"center",fontWeight:"bold",fontSize:20}}>
          DONE
        </Text>
      </Pressable>
  )}
      <Pressable 
        style={{
          flexDirection:"row",
          alignItems:"center",
          marginLeft:"auto", 
          marginRight:"auto", 
          marginTop:50 
          }}
        >
        <Pressable
          disabled={index === 0}
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index - 1);
            }, 2000);
          }} 
          style={{
            backgroundColor:"green",
            padding:10,
            borderRadius:20,
            marginHorizontal:20,
            width:100
            }}
          >
          <Text style={{
            color:"white",
            fontWeight:"bold", 
            textAlign:"center"
          }}
          >
            PREV
          </Text>
        </Pressable>
        {index + 1 >= excersises.length ? (
        <Pressable 
        onPress={() => {
          navigation.navigate("Home");
        }}
          style={{
            backgroundColor:"green",
            padding:10,
            borderRadius:20,
            marginHorizontal:20,
            width:100
            }}
          >
          <Text style={{color:"white",fontWeight:"bold", textAlign:"center"}}>SKIP</Text>
        </Pressable>
        ) : (
          <Pressable
          onPress={() => {
            navigation.navigate("Rest");

            setTimeout(() => {
              setIndex(index + 1);
            }, 2000);
          }}
          style={{
            backgroundColor: "green",
            padding: 10,
            borderRadius: 20,
            marginHorizontal: 20,
            width: 100,
          }}
        >
          <Text
            style={{
              color: "white",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            SKIP
          </Text>
        </Pressable>
        )}
      </Pressable>
    </SafeAreaView>
  )
}

export default FitScreen