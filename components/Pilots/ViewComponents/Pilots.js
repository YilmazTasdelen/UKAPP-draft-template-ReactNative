
import React from 'react';
import { Text, Image, View, Dimensions, TextInput, TouchableOpacity,ScrollView } from 'react-native';
import { Accordion, List, Card, WhiteSpace, WingBlank, Icon, Steps, Flex, Button, } from '@ant-design/react-native';
import UserAvatar from 'react-native-user-avatar';



const Step = Steps.Step
const Item = List.Item

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const thumbUrl = () => {
    return <Image source={require('../../../files/tick.jpg')} style={{
        height: 20,
        width: 20,
        marginRight: 15
    }} />
};
const avatarThumb = (name) => {
    return <UserAvatar size={40} name={name}  bgColors={['#ccc', '#fafafa', '#ccaabb',]}/>
};



function Pilots({ navigation }) {

    return (
        <ScrollView >
            <View style={{
                width: 350,
                backgroundColor: '#11669c',
                width: width, height: height / 5
            }}>
                <View style={{
                    width: width,
                    backgroundColor: '#11669c',
                }}>
                    <View style={{ alignItems: 'center', paddingTop: 22 }}>
                        <Image source={require('../../../files/clubIcon.png')}
                            style={{
                                height: 90,
                                width: 120,
                                marginLeft:7
                            }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 20, paddingTop: 3 }}>Ucus Klubu</Text>
                    </View>

                </View>

            </View>

            <List >


                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                         onPress={() => navigation.navigate('Flight')} 
                        >
                            <Image source={require('../../../files/offerListIcon.png')}
                            
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 15
                                }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 0, fontSize: 15 }}>Instructors</Text>
                    </View>

                </Item>

                <Item thumb={avatarThumb("Serdar Tur")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Serdar TUR</Text>
                </Item>
                <Item thumb={avatarThumb("Yasin Demir Yürek")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Yasin DEMİRYÜREK</Text>
                </Item>
                <Item thumb={avatarThumb("Serdar Tur")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Yiğit YILDIRIM</Text>
                </Item>
                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                         onPress={() => navigation.navigate('Flight')} 
                        >
                            <Image source={require('../../../files/offerListIcon.png')}
                            
                                style={{
                                    height: 24,
                                    width: 24,
                                    marginRight: 15
                                }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 0, fontSize: 15 }}>Pilots</Text>
                    </View>

                </Item>

                <Item thumb={avatarThumb("Yılmaz Taşdelen")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Yılmaz TAŞDELEN</Text>
                </Item>
                <Item thumb={avatarThumb("Burak Mandıra")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Burak MANDIRA</Text>
                </Item>
                <Item thumb={avatarThumb("Anıl Osman TUR")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Anıl Osman TUR</Text>
                </Item>
                <Item thumb={avatarThumb("Erhan Saydam")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Erhan SAYDAM</Text>
                </Item>
                <Item thumb={avatarThumb("Berkan ÖZTÜRK")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Berkan ÖZTÜRK</Text>
                </Item>
                <Item thumb={avatarThumb("Semih ORTAŞENGÜN")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Semih ORTAŞENGÜN</Text>
                </Item>
                <Item thumb={avatarThumb("Mehmet YILDIRIM")} style={{ marginTop: 7 }}>
                <Text style={{ color: 'gray', fontSize: 19, marginLeft:'10%' }}>Mehmet YILDIRIM</Text>
                </Item>
                
            </List>

        </ScrollView>
    );
}

export default Pilots;