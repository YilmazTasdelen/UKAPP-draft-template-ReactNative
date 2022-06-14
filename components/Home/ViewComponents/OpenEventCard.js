import * as React from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, } from 'react-native';
import * as HomeStyles from '../Sytles/HomeStyles';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

function OpenEventCard(props) {

    return (

        <TouchableOpacity
            style={HomeStyles.cardTouchable}
            onPress={() => props.navigation.navigate('Opportunity')}>
            <View style={HomeStyles.cardContentopenEvent()}>
                <View style={HomeStyles.cardContentopenEventIcon('#0558b4')}>
                    <Image
                        source={require('../../../files/3Dots.png')}
                        style={HomeStyles.eventBorderIcon()} />
                </View>
                <View style={{ padding: 10, backgroundColor: 'white', width: '75%', }}>
                    <Text style={{
                        color: "#0558b4",
                        fontSize: 17,
                        fontWeight: 'bold',
                        textAlign: 'center',
                        paddingTop: 0
                    }}>
                        Flight Event
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingTop: 1,
                        paddingLeft: 10
                    }}>
                        Location   : <Text style={{ color: 'gray' }}>Ayaş Takeoff</Text>
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingTop: 1,
                        paddingLeft: 10
                    }}>
                        Date           : <Text style={{ color: 'gray' }}>06.04.22 09.30</Text>
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingTop: 1,
                        paddingLeft: 10
                    }}>
                        Level          : <Text style={{ color: 'gray' }}>KP</Text>
                    </Text>
                    <Text style={{
                        color: 'black',
                        fontSize: 13,
                        fontWeight: 'bold',
                        textAlign: 'left',
                        paddingTop: 1,
                        paddingLeft: 10
                    }}>
                        Note           : <Text style={{ color: 'gray' }}>some note here ....</Text>
                    </Text>
                </View>
                <View style={{
                    width: 60, alignItems: 'flex-end'
                }}>
                    <Image
                        source={require('../../../files/OkButton.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginTop: 9,

                        }} />

                    <Image
                        source={require('../../../files/QuestionButton.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginTop: 5,

                        }} />

                    <Image
                        source={require('../../../files/NoButton.png')}
                        style={{
                            height: 35,
                            width: 35,
                            marginTop: 5,

                        }} />
                </View>
            </View>
        </TouchableOpacity>
    );
}

export default OpenEventCard;