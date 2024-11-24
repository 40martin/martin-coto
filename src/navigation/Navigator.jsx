import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { CategoriesScreen, ProductsScreen, ProductScreen } from "../screens"
import Header from '../components/Header'


const Stack = createNativeStackNavigator()

const Navigator = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions = {{
                header: ()=><Header />
            }}>
            
            <Stack.Screen name="Categorías" options={{ title: 'Coto Tu Super'}} component={CategoriesScreen} />
            <Stack.Screen name="Productos" component={ProductsScreen} />
            <Stack.Screen name="Producto" component={ProductScreen} />
        </Stack.Navigator>
    </NavigationContainer>

  )
}

export default Navigator

