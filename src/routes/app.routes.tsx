import { createNativeStackNavigator } from '@react-navigation/native-stack';


const { Navigator, Screen } = createNativeStackNavigator();

import  Home  from '../screens/Home';
import  ProductDetails  from '../screens/ProductDetails';

export function AppRoutes(){
    return(       
        <Navigator>
            <Screen 
                name='home'
                component={Home}
            />
    
            <Screen 
                name='productDetails'
                component={ProductDetails}
            />
        </Navigator>
    
    );
}