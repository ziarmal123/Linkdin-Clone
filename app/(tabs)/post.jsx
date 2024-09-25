import { Pressable, StyleSheet, Text, TextInput, View,Image } from 'react-native'
import React, { useLayoutEffect,useState } from 'react'
import { useNavigation } from 'expo-router'
import * as ImagePicker from 'expo-image-picker'
import { FontAwesome } from '@expo/vector-icons'
const Post = () => {
  const [post, setPost] = useState('')
  const [image, setImage] = useState(null)
  
  const navigation=useNavigation();
  const pickImage =async() =>{
    let result=await ImagePicker.launchImageLibraryAsync({
    mediaTypes:ImagePicker.MediaTypeOptions.All,
    allowsEditing:true,
    aspect:[4,3],
    quality:1

    })
    console.log(result)
    if(!result.canceled){
      setImage(result.assets[0].uri)
    }

  }
  const onPost = () =>{
  console.log("Working",post)
  setPost("")
  setImage(null)
  }
  useLayoutEffect(()=>{
    navigation.setOptions({
    headerRight:()=><Pressable 
    disabled={post.trim().length === 0}
    style={[styles.onPost, post.trim().length === 0 &&
       styles.disabledButton]}  onPress={onPost}>
        <Text style={styles.postText}>Submit</Text></Pressable>
  })
  },[onPost])
  
  return (
    <View style={styles.container}>
      <TextInput 
      value={post}
      onChangeText={setPost}
      placeholder='Write Something Here!!!!'
      multiline
      style={styles.textStyle}
      />
      {image && <Image source={{uri:image}} style={styles.imageStyle} />}
      <View style={styles.footer}>
        <Pressable onPress={pickImage}>
        <FontAwesome name='image' size={24} color="black" style={styles.IconButton}/>
        </Pressable>
        <View>
        <FontAwesome name='camera' size={24} color="black" style={styles.IconButton}/>
        </View>
        <View>
        <FontAwesome name='glass' size={24} color="black" style={styles.IconButton}/>
        </View>
      
        

      </View>
    </View>
  )
}

export default Post

const styles = StyleSheet.create({
  textStyle:{
    fontSize:18
  },
  container:{
    flex:1,
    padding:15
  },
  onPost:{
    backgroundColor:"royalblue",
    padding:5,
    paddingHorizontal:15,
    borderRadius:50,
    marginRight:10,
  },
  postText:{
    color:'#fff',
    fontWeight:'bold'
  },
  disabledButton:{
    backgroundColor: "gray"
  },
  footer:{
    marginTop:'auto',
    flexDirection:'row',
    justifyContent:'space-evenly'
  },
  IconButton:{
    backgroundColor:'gainsboro',
    borderRadius:100,
    padding:20
  
  },
  imageStyle:{
    width:'100%',
    aspectRatio:1,
    marginTop:"auto"
  }

})