import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

import Home from '../screens/Home';
import ProductDetails from '../screens/ProductDetails';
import Register from '../screens/Register'

export function AppRoutes(){
    return(       
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen 
                name='home'
                component={Home}
            />
    
            <Screen 
                name='productDetails'
                component={ProductDetails}
            />
            
            <Screen 
                name='register'
                component={Register}
            />
        </Navigator>
    
    );
}