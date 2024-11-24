import { StyleSheet, TextInput } from 'react-native'
import { colors } from '../global/colors'

const Search = ({setSearch}) => {
  return (
    <TextInput
      placeholder="Buscar un producto"
      onChangeText={(text)=>setSearch(text)}
      style={styles.searchInput}
    />
 )
}

export default Search

const styles = StyleSheet.create({
    searchInput: {
        margin: 10,
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 10,
        paddingLeft: 20,
    }
})