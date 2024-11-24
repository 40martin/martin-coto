import { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View, Image, Pressable } from 'react-native'
import products from '../data/products.json'
import FlatCard from '../components/FlatCard'
import { colors } from '../global/colors'
import  Icon  from 'react-native-vector-icons/MaterialIcons'
import Search from '../components/Search'

const ProductsScreen = ({ navigation, route }) => {
    const [productsFiltered, setProductsFiltered] = useState([])
    const [search, setSearch] = useState('')

    const category = route.params
    
    useEffect(() => {
        const productsTempFiltered = products.filter(product=>product.category.toLowerCase() === category.toLowerCase())
        setProductsFiltered(productsTempFiltered)
        if(search){
            const productsTempSearched = productsTempFiltered.filter(product=>product.title.toLowerCase().includes(search.toLowerCase()))
            setProductsFiltered(productsTempSearched)
        }
    },[category, search])
        
    const renderProductItem = ({item}) => {
        
        return(

            <Pressable onPress={()=>navigation.navigate("Producto", item.id)}>
            <FlatCard style={styles.productContainer}>
                <View>
                    <Image
                        source={{uri: item.mainImage}}
                        style={styles.productImage}
                        resizeMode='contain'
                    />
                </View>

                <View style={styles.productDescription}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.shortDescription}>{item.shortDescription}</Text>
                <View style={styles.tags}>
                    <Text style={styles.tagText}>Tags : </Text>
                    
                    {

                        <FlatList
                        style={styles.tags}
                        data={item.tags}
                        keyExtractor={()=>Math.random()}
                        renderItem={({item}) =>(<Text style={styles.tagText}>{item}</Text>)}
                        />
                    }
                </View>

                {
                    item.discount>0 && <View style={styles.discount}><Text style={styles.discountText}>Descuento {item.discount} %</Text></View>
                }

                {
                    item.stock<=0 && <Text style={styles.noStockText}>Sin Stock</Text>
                }

                <Text style={styles.price}>Precio: $ {item.price}</Text>
            </View>
            </FlatCard>
            </Pressable>
        )
    }
  
    return (
        <>
        <Pressable onPress={()=>navigation.goBack()}><Icon style={styles.goBack} name='arrow-back-ios' size={50} /></Pressable>
        <Search setSearch={setSearch} />
        
        <FlatList
            data={productsFiltered}
            keyExtractor={item=>item.id}
            renderItem={renderProductItem}
        />
    </>
  )
}

export default ProductsScreen

const styles = StyleSheet.create({
    productContainer: {
        flexDirection: 'row',
        padding: 20,
        justifyContent: 'flex-start',
        gap: 10,
    },

    productImage: {
        width: 100,
        height: 100,
    },

    productDescription: {
        width: '60%',
        padding: 20,
        gap: 10,
    },

    productTitle: {
        //fontFamily: 'Montserrat',
        fontWeight: '300',
        fontSize: 16,
    },

    tags: {
        flexDirection: 'row',
        gap: 5,
    },

    tagText: {
        //fontFamily: 'Montserrat',
        fontWeight: 100,
        fontSize: 14,
        color: colors.primary,   
    },

    price: {
        fontWeight: '200',
        fontSize: 10,
    },

    discount: {
        backgroundColor: colors.primary,
        padding: 5,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },

    discountText: {
        color: 'white',
    },

    noStockText: {
        color: 'red',
    },

    goBack: {
        padding: 10,
        color: 'black',
    }
})