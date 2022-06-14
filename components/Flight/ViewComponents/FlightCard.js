import * as React from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { List, WhiteSpace, Flex, WingBlank } from '@ant-design/react-native';
import * as FlightStyles from '../Styles/FlightStyles';
import { Rating,AirbnbRating } from 'react-native-ratings';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height
const Item = List.Item

function FlightCard(props) {
  const ratingCompleted = (rating) => {
        console.log("Rating is: " + rating)
      }
    return (
        <Item style={FlightStyles.cardItem} key={props.key}>
            <View style={FlightStyles.cardOuterView}>
                <View style={FlightStyles.cardOuterLeftBorderView}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('OpportunityDetail')}
                    >
                        <Image
                            source={require('../../../files/wingIcon.png')}
                            style={FlightStyles.cardImage} />

                    </TouchableOpacity >
                    <Text style={FlightStyles.cardStatusText}>
                        15 min
                    </Text>
                    <AirbnbRating  
                    showRating={false}
                    imageSize={10}
                    size={10}
                    
                    />
                </View>
                <View style={FlightStyles.cardTextView}>

                    <Text style={FlightStyles.cardText}>
                    Takeoff                     : Ayaş TakeOff
                    </Text>
                    <Text style={FlightStyles.cardText}>
                        Wing                          : Buzz Z 6
                    </Text>
                    <Text style={FlightStyles.cardText}>
                        TakeOff Type          : Reverse
                    </Text>
                    <Text style={FlightStyles.cardText}>
                        Fligth Type              : Thermal
                    </Text>
                    <Text style={FlightStyles.cardText}>
                    Instructor Review : 7/10
                    </Text>
                   
                </View>
                <View style={{
                    alignItems: 'center',
                }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('OpportunityDetail')}
                    >
                        <Image
                            source={require('../../../files/sunIcon.png')}
                            style={FlightStyles.weatherIcon} />
                        <Text style={FlightStyles.weatherText}>
                            15 &#8451;
                        </Text>
                    </TouchableOpacity >
                    <TouchableOpacity
                        onPress={() => props.navigation.navigate('OpportunityDetail')}
                    >
                        <Image
                            source={require('../../../files/windIcon4.png')}
                            style={FlightStyles.windIcon} />
                        <Text style={FlightStyles.windText}>
                            15 km
                        </Text>
                    </TouchableOpacity >

                </View>
            </View>
        </Item>
    );
}

export default FlightCard;