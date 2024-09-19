import { FlatList, StyleSheet, View } from 'react-native';
import PostListItem from '../../components/Screens/PostListItem';
import data from '../../assets/data/posts.json';

export default function HomeScreen() {

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item})=>(
          <PostListItem data={item}/>
        )}
        keyExtractor={(item, index) => index.toString()}  // Ensure each item has a unique key
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
