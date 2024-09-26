import { StyleSheet, Text, View,FlatList } from 'react-native'
import React, { useLayoutEffect } from 'react'
import users from '../assets/data/users.json'
import UserListItem from '../components/Screens/UserListItem'
import { useNavigation } from 'expo-router'

const search = () => {
      const [search, setsearch] = useState('')
    const navigation=useNavigation()
    useLayoutEffect(() => {
        navigation.setOptions({
            headerSearchBarOptions:{
                placeholder:"Search User",
                onChangeText:setsearch

            }
          })
    }, [])
  return (
    <View style={{backgroundColor:"#fff",flex:1}}>
    <FlatList 
    data={users}
    keyExtractor={(item) => item.name}
    renderItem={({item})=><UserListItem data={item}/>}
 
    />
    </View>
    
  )
}

export default search

const styles = StyleSheet.create({})