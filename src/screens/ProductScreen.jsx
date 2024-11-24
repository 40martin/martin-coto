import { StyleSheet, Text, View, Pressable, Image, FlatList } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../global/colors'
import products from '../data/products.json'
import { useEffect, useState } from 'react'

const ProductScreen = ({ route, navigation }) => {
  const [productFound, setProductFound] = useState({})

  const productId = route.params

  useEffect(() => {
    setProductFound(products.find(product => product.id === productId))
  }, [productId])

  return (
    <View style={styles.product.Container}>
      <Pressable onPress={() => navigation.goBack()}><Icon style={styles.goBack} name="arrow-back-ios" size={24} /></Pressable>

      <Text style={styles.textBrand}>{productFound.brand}</Text>
      <Text style={styles.TextTitle}>{productFound.title}</Text>
      <Image
        source={{ uri: productFound.mainImage }}
        alt={productFound.title}
        resizeMode='contain'
      />

      <Text style={styles.longDescription}>{productFound.longDescription}</Text>
      <View style={styles.tags}>
        <Text style={styles.tagText}>Tags : </Text>

        {

          <FlatList
            style={styles.tags}
            data={productFound.tags}
            keyExtractor={() => Math.random()}
            renderItem={({ item }) => (<Text style={styles.tagText}>{item}</Text>)}
          />
        }
      </View>

      {
        productFound.discount > 0 && <View style={styles.discount}><Text style={styles.discountText}>Descuento {productFound.discount} %</Text></View>
      }

      {
        productFound.stock <= 0 && <Text style={styles.noStockText}>Sin Stock</Text>
      }

      <Text style={styles.price}>Precio: $ {productFound.price}</Text>
      <Pressable style={styles.addToCartButton}>
        <Text style={styles.addToCartText}>Agregar al Carrito</Text>
      </Pressable>
    </View>
  )
}

export default ProductScreen

const styles = StyleSheet.create({
  goBack: {
    padding: 10,
    color: colors.primary,
  },

  productContainer: {
    paddingHorizontal: 10,
  },

  textBrand: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  textTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  longDescription: {
    fontSize: 16,
    textAlign: 'justify',
    paddingVertical: 10,
  }
})