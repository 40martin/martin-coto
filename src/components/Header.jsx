import { StyleSheet, Text, View } from 'react-native'



const Header = ({subtitle}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.title}>COMPRAS-COTO-MARTIN</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerContainer: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
    },

    title: {
        fontSize: 20,
        //fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        fontFamily: 'PressStart2P',
    },
})