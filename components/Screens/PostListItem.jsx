import { StyleSheet, Text, View,Image, Dimensions, ScrollView,TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';

const PostListItem = ({data}) => {
  const [liked, setLiked] = useState(false)
  const router=useRouter()
  // console.log(router)
   console.log("Data",data)
   const screenWidth = Dimensions.get('window').width;
   const screenHeight = Dimensions.get('window').height;

   const handleLike=async()=>{
    setLiked(!liked)
   }
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.postHeader} onPress={()=>router.push(`/user/${data.author.id}`)}>
       
        <Image source={{uri:data?.author?.image}} width={60} height={60} style={styles.imageStyle}/> 
   
       
        <View style={styles.insideHeader}>
                <Text style={{fontWeight:'bold',fontSize:16}}>{data?.author.name}</Text>
                <Text >{data?.author?.position}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.postMiddle}>
            <View> 
           <Text style={{color:"black",fontWeight:'medium',fontSize:17,paddingLeft:15}}>{data?.content}</Text>
          <TouchableOpacity onPress={()=>router.push(`/postDetail/${data.id}`)}>
                <Image source={{uri:data.image}} width={screenWidth} height={screenHeight*0.40}/>
                {/* <View style={{backgroundColor:'#f2f2f2',marginBottom:10,padding:10}}>
                <Text style={{color:"black",fontWeight:'bold',fontSize:12}}>{data.content}</Text>
                <Text style={{color:"gray",fontWeight:'bold',fontSize:12}}>http://youtube.com</Text>
                </View> */}
         </TouchableOpacity>
            </View>       
            <View>

            </View>
      </View>
      <View>
        {/* For Likes and Comments */}
        {data.likes&&
        <View style={styles.bottomborder}>
         <View style={styles.likecontainer}>
          <AntDesign name="like1" size={12} color="white" />
        </View>
        <View>
        <Text style={{fontSize:15,marginLeft:5}}>{data.likes}</Text>
        </View>
        </View>
        }
       
        {/* For Likes and Comments Button */}
        <View style={styles.postBottom}>
        {liked?<TouchableOpacity style={styles.postButton} onPress={handleLike}>
               <AntDesign name="like1" size={20} color="black" />
              <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>:
            <TouchableOpacity style={styles.postButton} onPress={handleLike}>
               <AntDesign name="like2" size={20} color="black" />
              <Text style={styles.buttonText}>Like</Text>
            </TouchableOpacity>
            }
            
            
           
         
            <View style={styles.postBottom}>
            <FontAwesome name="comment-o" size={24} color="black" />
              <Text style={styles.buttonText}>Comments</Text>
            </View>
            <View style={styles.postBottom}>
            <FontAwesome name="share" size={20} color="gray" />
              <Text style={styles.buttonText}>Share</Text>
            </View>
            
            
        </View>
      </View>
    </View>
  )
}

export default PostListItem

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