import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'

const ExperinecList = ({exp}) => {
    console.log("Exp",exp)
  return (
    <View style={styles.container}>
    <Image source={{uri:exp?.companyImage}} style={styles.cmImage} />
    <View>
    <Text style={styles.title}>{exp.title}</Text>
    <Text style={styles.name}>{exp.companyName}</Text>
    </View>
   
    </View>
      
  )
}

export default ExperinecList

const styles = StyleSheet.create({
    container:{
    flexDirection:'row'
    ,padding:5,
    marginBottom:10,
    borderBottomWidth:0.5,
    borderColor:'lightgray',
    padding:5,
    alignItems:'center'
    },
    cmImage:{
    width:50,
    aspectRatio:1,
    marginRight: 5,
    },
    title:{
        fontSize:16,
        fontWeight:'500'
    }
})