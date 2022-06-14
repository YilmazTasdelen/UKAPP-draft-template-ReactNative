
import React from 'react';
import { Text, Image, View, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import { Accordion, List, Card, WhiteSpace, WingBlank, Icon, Steps, Flex, Button, } from '@ant-design/react-native';



const Step = Steps.Step
const Item = List.Item

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const thumbUrl = () => {
    return <Image source={require('../../../files/tick.jpg')} style={{
        height: 22,
        width: 22,
        marginRight: 15
    }} />
};
const phoneUrl = () => {
    return <Image source={require('../../../files/phoneIcon.png')} style={{
        height: 22,
        width: 22,
        marginRight: 15
    }} />
};

function Profile({ navigation }) {

    return (
        <View >
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
                        <Image source={require('../../../files/profileIcon.png')}
                            style={{
                                height: 90,
                                width: 90,
                                marginRight: 15
                            }} />
                        <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 22, paddingTop: 3 }}>Pilot İsmi</Text>
                    </View>

                </View>

            </View>

            <List  style={{height:height}}>


                <Item style={{ marginTop: 17 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity
                         onPress={() => navigation.navigate('Flight')} 
                        >
                            <Image source={require('../../../files/offerListIcon.png')}
                            
                                style={{
                                    height: 40,
                                    width: 40,
                                    marginRight: 15
                                }} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 5, fontSize: 18 }}>Profile</Text>
                    </View>

                </Item>

                <Item thumb={thumbUrl()} style={{ marginTop: 17 }}>
                    <Flex>
                        <Flex.Item >
                            <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Klüp  : </Text>
                        </Flex.Item>
                        <Flex.Item >

                            <Text style={{ color: 'gray', fontSize: 19, }}>Uçuş Klübü</Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()} style={{ marginTop: 17 }}>
                    <Flex>
                        <Flex.Item >
                            <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Uçuş Sayısı : </Text>
                        </Flex.Item>
                        <Flex.Item >

                            <Text style={{ color: 'gray', fontSize: 19, }}>23</Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()} style={{ marginTop: 17 }}>
                    <Flex>
                        <Flex.Item >
                            <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Uçuş Saati : </Text>
                        </Flex.Item>
                        <Flex.Item >

                            <Text style={{ color: 'gray', fontSize: 19, }}>23</Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()} style={{ marginTop: 17 }}>
                    <Flex>
                        <Flex.Item >
                            <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Seviye : </Text>
                        </Flex.Item>
                        <Flex.Item >

                            <Text style={{ color: 'gray', fontSize: 19, }}>P3</Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={thumbUrl()} style={{ marginTop: 17 }}>
                    <Flex>
                        <Flex.Item >
                            <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Kanat : </Text>
                        </Flex.Item>
                        <Flex.Item >

                            <Text style={{ color: 'gray', fontSize: 19, }}>Buz z 6</Text>
                        </Flex.Item>
                    </Flex>
                </Item>

                <Item thumb={phoneUrl()} style={{ marginTop: 17 }}>
                    <Text style={{ fontWeight: 'bold', color: '#11669c', fontSize: 19 }}>Telefon :
                        <Text style={{ color: 'gray' }}>(111) 111-1111</Text> </Text>
                </Item>
                <Item thumb={thumbUrl()} style={{ marginTop: 17,marginBottom:47}}>
                    <Text style={{ fontWeight: 'bold', color: '#11669c' }}>Eğitmen Yorumu :
                        <Text style={{ color: 'gray' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</Text> </Text>
                </Item>

               














              

            
               








            </List>

        </View>
    );
}

export default Profile;