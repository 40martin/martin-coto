import { StyleSheet, Text, FlatList, Image, Pressable } from "react-native";
import categories from "../data/categories.json"
import FlatCard from "../components/FlatCard";


const CategoriesScreen = ({navigation}) => {

    
    
    const renderCategoryItem = ({item,index}) => {
        return (
            <Pressable onPress={()=>navigation.navigate('Productos', item.title)}>
            <FlatCard style={
                index % 2 == 0
                ?
                {...styles.categoryItemContainer, ... styles.row}
                :
                {...styles.categoryItemContainer, ... styles.rowReverse}
            }>
                <Image
                    source={{uri: item.image}}
                    style={styles.image}
                    resizeMode='contain'
                />
                <Text style={styles.categoryTitle}>{item.title}</Text>
            </FlatCard>
            </Pressable>
        )
    }
    
    
    return (
        
        
            <FlatList
                data={categories}
                keyExtractor={item=>item.id}
                renderItem={renderCategoryItem}
            />
        
    )
}

export default CategoriesScreen

const styles = StyleSheet.create({
    categoryItemContainer: {
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 5,
        padding: 20,
        margin: 10,
        backgroundColor: 'yellow',
     },

    categoryTitle: {
        fontSize: 20,
        fontWeight: 'bold',
    },

    image: {
        width: 100,
        height: 100,
    },
})