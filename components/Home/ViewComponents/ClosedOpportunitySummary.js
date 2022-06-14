import * as React from 'react';
import { View, Text, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet, } from 'react-native';
import { List, } from '@ant-design/react-native';
import Pie from 'react-native-pie';
import * as HomeStyles from './../Sytles/HomeStyles';
import ClosedOpportunityCard from './ClosedOpportunityCard';
import OpenEventCard from './OpenEventCard';
import UserAvatar from 'react-native-user-avatar';

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

const noButtonStatus = (name) => {
    return  <Image
    source={require('./../../../files/NoButton.png')}
    style={{ width: 29, height: 29 }}
  />
};
const okButtonStatus = () => {
    return  <Image
    source={require('./../../../files/OkButton.png')}
    style={{ width: 29, height: 29 }}
  />
};
const questionMarkButtonStatus = (name) => {
    return  <Image
    source={require('./../../../files/QuestionButton.png')}
    style={{ width: 29, height: 29 }}
  />
};


function ClosedOpportunitySummary({ navigation }) {

    return (
        <View style={HomeStyles.OuterContent}>



            <ScrollView >
                {/* order card  */}
                <OpenEventCard navigation={navigation} color={'#4ecf9d'} title={'Converted to Order'} text={21} />
                {/* offer card  */}
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

                    <Item thumb={avatarThumb("Serdar Tur")} style={{ marginTop: 7 }}
                     extra={
                        okButtonStatus()
                      }
                      >
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Serdar TUR</Text>
                    </Item>
                    <Item thumb={avatarThumb("Yasin Demir Yürek")} style={{ marginTop: 7 }} extra={
                          okButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Yasin DEMİRYÜREK</Text>
                    </Item>
                    <Item thumb={avatarThumb("iğit YILDIRIM")} style={{ marginTop: 7 }} extra={
                         noButtonStatus()
                      }>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }} >Yiğit YILDIRIM</Text>
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

                    <Item thumb={avatarThumb("Yılmaz Taşdelen")} style={{ marginTop: 7 }} extra={questionMarkButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Yılmaz TAŞDELEN</Text>
                    </Item>
                    <Item thumb={avatarThumb("Burak Mandıra")} style={{ marginTop: 7 }}  extra={questionMarkButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Burak MANDIRA</Text>
                    </Item>
                    <Item thumb={avatarThumb("Anıl Osman TUR")} style={{ marginTop: 7 }} extra={noButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Anıl Osman TUR</Text>
                    </Item>
                    <Item thumb={avatarThumb("Erhan Saydam")} style={{ marginTop: 7 }} extra={okButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Erhan SAYDAM</Text>
                    </Item>
                    <Item thumb={avatarThumb("Berkan ÖZTÜRK")} style={{ marginTop: 7 }} extra={okButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Berkan ÖZTÜRK</Text>
                    </Item>
                    <Item thumb={avatarThumb("Semih ORTAŞENGÜN")} style={{ marginTop: 7 }} extra={okButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Semih ORTAŞENGÜN</Text>
                    </Item>
                    <Item thumb={avatarThumb("Mehmet YILDIRIM")} style={{ marginTop: 7 }} extra={okButtonStatus()}>
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>Mehmet YILDIRIM</Text>
                    </Item>

                </List>
            </ScrollView>
        </View>
    );
}

export default ClosedOpportunitySummary;