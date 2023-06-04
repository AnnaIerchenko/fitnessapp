import React, {useContext} from 'react'
import { Text, View, Image, ScrollView, ScrollViewComponent, ScrollViewBase } from 'react-native'
import FitnessCards from '../components/FitnessCards'
import { FitnessItems } from '../Context'

const HomeScreens = () => {
  // const {completed, setCompleted, workout, setWorkout, calories, setCalories,minutes, setMinutes} = useContext(FitnessItems)
  const {  
    minutes,
    calories,
    workout,
  } = useContext(FitnessItems);
  return (
  <>
    <View 
        style={{
        backgroundColor:"blue", 
        marginTop:40,
        padding:10, 
        height:200, 
        width:"100%",
        height:"100%"
      }}>
        <Text style={{color:"white",fontWeight:"bold",fontSize:18 }} >
          HOME WORKOUT
        </Text>
        <View 
          style={{
            flexDirection:"row", 
            alignItems: "center", 
            justifyContent:"space-between", 
            marginTop: 20
            }}>
          <View>
            <Text style={{textAlign:"center",fontWeight: "bold", color: "white", fontSize: 18}}>
              {workout}
            </Text>
            <Text style={{color:"#d0d0d4",fontSize:17,marginTop:6}}>
              WORKOUTS
            </Text>
          </View> 
          <View>
            <Text style={{textAlign:"center",fontWeight: "bold", color: "white", fontSize: 18}}>
              {calories}
            </Text>
            <Text style={{color:"#d0d0d4",fontSize:17,marginTop:6}}>
              KCAL
            </Text>
          </View> 
          
          <View>
            <Text style={{textAlign:"center",fontWeight: "bold", color: "white", fontSize: 18}}>
              {minutes}
            </Text>
            <Text style={{color:"#d0d0d4",fontSize:17,marginTop:6}}>
              MINS
            </Text>
          </View> 
        </View>  
        <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{justifyContent: "center", alignItems: "center"}}>
          <Image 
          style={{width:"90%",height:120,marginTop: 20, borderRadius: 7}} 
          source={{uri: "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_842,ar_1.2,q_auto:eco,dpr_2,f_auto,fl_progressive/image/test/sku-card-widget/gold2.png"}}/>
        </View>
        <FitnessCards />
    </ScrollView>
      </View>
    </>
  )
}

export default HomeScreens