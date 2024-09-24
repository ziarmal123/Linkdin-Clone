import { StyleSheet, Text, View,Image,Dimensions, TouchableOpacity, FlatList,ScrollView } from 'react-native'
import React,{useState,useEffect} from 'react'
import { useRouter,useLocalSearchParams,useNavigation } from 'expo-router';
import data from '../../assets/data/posts.json'
import user from '../../assets/data/user.json'
import ExperinecList from '../../components/Screens/ExperinecList';

const UserProfile = () => {
  const [userData, setuserData] = useState(user)
  const navigation=useNavigation()
  const {id}=useLocalSearchParams()
  const screenWidth = Dimensions.get('window').width;
  console.log("user",userData)
  const userProfile= data?.find(item=>item?.author?.id === id)
  console.log("ID",userProfile)
  useEffect(() => {
    navigation.setOptions({
      title:user?.name,
      headerTitleAlign: 'center',
    })
  }, [])
  
  // console.log("Find Data",userProfile)
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.TopContainer}>
        <View style={styles.HeaderContainer}>
          <Image source={{uri:userData?.backImage}} style={styles.backgroundImage} />
          <Image source={{uri:userData?.image}} style={styles.userImage} />
        </View>
        <View style={styles.MiddleContainer}>
            <Text style={{fontSize:26,fontWeight:'600'}}>{userData.name}</Text>
            <Text style={{fontSize:16,fontWeight:'400'}}>{userData.position}</Text>
            <TouchableOpacity style={{padding:10,alignItems:'center',backgroundColor:"royalblue",borderRadius:50,marginTop:10,marginBottom:10}}>
              <Text style={{fontWeight:'bold',color:'#fff',fontSize:20}}>Connect</Text>
            </TouchableOpacity>
        </View>
        
        </View>
        <View style={styles.LowerContainer}>
          <Text style={{fontSize:18,fontWeight:'600',marginVertical:5}}>About</Text>
          <Text style={{lineHeight:20,fontSize:14,letterSpacing:0.2}}>{userData?.about}</Text>
        </View>
        <View style={styles.LowerContainer}>
        <Text style={{fontSize:18,fontWeight:'600',marginVertical:5}}>Experience</Text>
         {userData.experience&& userData.experience.map((exp,Index)=><ExperinecList exp={exp} key={Index}/>)}
        </View>
        
    </ScrollView>
  )
}

export default UserProfile

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  TopContainer:{
    backgroundColor:"#fff",
    
  },
  backgroundImage:{
     height:250,
     width:415,

  },
  userImage:{
    height:150,width:150,borderRadius:1,
    position:'absolute',
    marginTop:170,
    marginHorizontal:15

  },
  MiddleContainer:{
    marginTop:70,
    marginHorizontal:15
  },
  LowerContainer:{
    marginTop:10,
    backgroundColor:'#fff',
    padding:10
  }
})