import { StyleSheet, Text, View,Image,Dimensions, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import { useRouter,useLocalSearchParams,useNavigation } from 'expo-router';
import data from '../../assets/data/posts.json'
import user from '../../assets/data/user.json'

const UserProfile = () => {
  const [userData, setuserData] = useState(user)
  const {id}=useLocalSearchParams()
  const screenWidth = Dimensions.get('window').width;
  console.log("user",userData)
  const userProfile= data?.find(item=>item?.author?.id === id)
  console.log("ID",userProfile)
  // console.log("Find Data",userProfile)
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.HeaderContainer}>
          <Image source={{uri:userData?.backImage}} style={styles.backgroundImage} />
          <Image source={{uri:userData?.image}} style={styles.userImage} />
        </View>
        <View style={styles.MiddleContainer}>
            <Text style={{fontSize:26,fontWeight:'600'}}>{userData.name}</Text>
            <Text style={{fontSize:16,fontWeight:'400'}}>{userData.position}</Text>
            <TouchableOpacity style={{padding:10,alignItems:'center',backgroundColor:"#57B9FF",borderRadius:50,marginTop:10}}>
              <Text style={{fontWeight:'bold',color:'#fff',fontSize:20}}>Connect</Text>
            </TouchableOpacity>
        </View>
        </View>
    </View>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    flex:1
  },
  backgroundImage:{
     height:250,
     width:415

  },
  userImage:{
    height:150,width:150,borderRadius:1,
    position:'absolute',
    marginTop:170,
    marginHorizontal:15

  },
  MiddleContainer:{
    marginTop:90,
    marginHorizontal:15
  }
})