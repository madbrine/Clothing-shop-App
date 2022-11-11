import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Ionic from 'react-native-vector-icons/Ionicons'
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import BodyShop from "./src/components/BodyShop";
import BodyFittingRoom from "./src/components/BodyFittingRoom";
import BodyUser from "./src/components/BodyUser";
import {Provider} from "react-redux";

export default function AppBody(props) {

    const Tab = createBottomTabNavigator()

    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({route})=>({
                tabBarShowLabel: false,
                tabBarIcon: ({focused, size, colour}) => {
                    let iconName;
                    if(route.name === "Shop"){
                        iconName = focused ? "md-cart" : "md-cart-outline"
                    }else if(route.name === "Fitting Room"){
                        iconName = focused ? "ios-shirt" : "ios-shirt-outline"
                    }else if(route.name === "User"){
                        iconName = focused ? "ios-person" : "ios-person-outline"
                    }
                    return <Ionic name={iconName} size={size} colour={colour} />
                },
            })}
            >
                <Tab.Screen name="Shop"
                            children={()=><Provider store={props.store}><BodyShop/></Provider>}
                />
                <Tab.Screen name="Fitting Room"
                            children={()=><Provider store={props.store}><BodyFittingRoom/></Provider>}
                />
                <Tab.Screen name="User"
                            children={()=><BodyUser/>}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        flex: 1,
    },
})
