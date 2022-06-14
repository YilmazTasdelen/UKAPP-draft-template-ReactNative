import * as React from 'react';
import DrawerComponent from './components/Drawer/DrawerComponent';
import 'react-native-reanimated';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './components/Login//ViewComponents/Login';
import Home from './components/Home/ViewComponents/Home';
import Opportunity from './components/Opportunity/WiewComponents/Opportunity';
import Offer from './components/Offer/ViewComponents/Offer';
import { createDrawerNavigator, } from '@react-navigation/drawer';
import * as constants from './components/Static/constants';
import OpportunityDetail from './components/OppoortunityDetail/ViewComponents/OpportunityDetail';
import AddPhoneCall from './components/PhoneCall/ViewComponents/AddPhoneCall';
import AddVisit from './components/Visit/ViewComponents/AddVisit';
import Profile from './components/Profile/ViewComponent/Profile';
import Flight from './components/Flight/ViewComponents/Flight';
import AddFlight from './components/AddFlight/ViewComponents/AddFlight';
import Pilots from './components/Pilots/ViewComponents/Pilots';
import Payment from './components/Payment/ViewComponents/Payment';


const App = () => {
  return (
    // <NavigationContainer>
    //   <DrawerComponent />
    // </NavigationContainer>

    <NavigationContainer>
    <DrawerNavigator />
    </NavigationContainer>
  );
};


const Stack = createStackNavigator();

const StackNavigator = () => {
 return (
<Stack.Navigator>
{/* <Stack.Screen name="drawer"            component={TabsNavigator}   options={{ headerShown: false,}}/> */}
 <Stack.Screen name="Login"             component={Login}            options={{ headerShown: false,}}/> 
<Stack.Screen name="AddFlight"              component={AddFlight}    options={{ headerShown: false,}}         />
<Stack.Screen name="Flight"            component={Flight}            options={{ headerShown: false,}}/>
<Stack.Screen name="Home"             component={Home}             options={{ headerShown: false,}}/>
<Stack.Screen name="OpportunityDetail" component={OpportunityDetail} options={{ headerShown: false,}}/>
<Stack.Screen name="AddPhoneCall"      component={AddPhoneCall}      options={{ headerShown: false,}}/>
<Stack.Screen name="Pilots"          component={Pilots}          options={{ headerShown: false,}}/>
<Stack.Screen name="Payment"          component={Payment}          options={{ headerShown: false,}}/>


</Stack.Navigator>
 );
};


const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
 return (
<Drawer.Navigator>
        <Drawer.Screen name="Logout"            component={StackNavigator}    options={{ headerShown: false,}} />
        <Drawer.Screen name="Login"             component={Login}             options={{ headerShown: false,tabBarStyle: { display: 'none' } }} />
        <Drawer.Screen name="Profile"           component={Profile}           options={constants.showInDrawer} />
        <Drawer.Screen name="Flight"            component={Flight}            options={constants.showInDrawer} />
        <Drawer.Screen name="AddFlight"         component={AddFlight}         options={constants.showInDrawer} />
        <Drawer.Screen name="Home"              component={Home}              options={constants.showInDrawer} />
        <Drawer.Screen name="Pilots"              component={Pilots}              options={constants.showInDrawer} />
        <Drawer.Screen name="Payment"              component={Payment}              options={constants.showInDrawer} />

       
</Drawer.Navigator>
 );
};
export default App;
