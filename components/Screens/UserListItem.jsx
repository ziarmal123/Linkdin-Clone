import { StyleSheet, Text, View,Image, Dimensions, ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useRouter } from 'expo-router';

const UserListItem = ({data}) => {
    const router=useRouter()
    console.log("DAta",data)
  return (
    <TouchableOpacity style={styles.postHeader} onPress={()=>router.push(`/user/${data.id}`)}>
       
    <Image source={{uri:data?.image}} width={60} height={60} style={styles.imageStyle}/> 

   
    <View style={styles.insideHeader}>
            <Text style={{fontWeight:'bold',fontSize:16}}>{data?.name}</Text>
            <Text >{data?.position}</Text>
    </View>
  </TouchableOpacity>
  )
}

export default UserListItem

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'column',
        backgroundColor:'#fff',
        marginBottom:15
    },
    postHeader:{
        display:'flex',
        flexDirection:'row',
        padding:15
    },
    imageStyle:{
        borderWidth:0.1,
        borderColor:'black',
    },
    insideHeader:{
      marginLeft:15
    },
    postMiddle:{
        display:'flex',
    },
    postBottom:{
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-around',
      padding:5
    },
    postButton:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center'
    },
    buttonText: {
      marginLeft: 5, // Adds some space between the icon and the text
      fontSize: 14,
      color: 'gray',
    },
    likecontainer:{
      display:'flex',
      flexDirection:'row',
      // justifyContent:'space-around',
      padding:7,
      marginTop:10,
      marginLeft:30,
      backgroundColor:'skyblue',
      width:25,
      borderRadius:15,
      borderBottomColor:'gray',
      marginBottom:10

    }
    ,bottomborder:{
      borderBottomWidth: 1,       // Set the border width
      borderBottomColor: '#ccc',  // Set the border color
      display:'flex',
      flexDirection:'row',
     alignItems:'center'
    }
})