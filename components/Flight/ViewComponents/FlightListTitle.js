import * as React from 'react';
import * as FlightStyles from '../Styles/FlightStyles';
import { List, } from '@ant-design/react-native';
import { View, Text, Image, TouchableOpacity,Pressable } from 'react-native';


const Item = List.Item

function FlightListTitle({ navigation }) {
    return (
        <Item style={FlightStyles.opportunityListItem}>

            <View style={FlightStyles.ListTitleView}>
               
                <TouchableOpacity 
               onPress={() => navigation.navigate('AddFlight')} 
                >
                    <Image source={require('../../../files/addFligth.png')}
                        style={FlightStyles.ListTitleIcon} />
                </TouchableOpacity>
                
                <Text style={FlightStyles.ListTitleText}>Last Flights</Text>
              
                {/* <Pressable
                        style={FlightStyles.PressableGreen}
                        onPress={() => navigation.navigate('AddPhoneCall')} >
                        <Text style={FlightStyles.PressableText}>
                         +
                        </Text>
                    </Pressable> */}

            </View>
        </Item>
    );
}

export default FlightListTitle;