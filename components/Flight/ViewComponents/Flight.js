import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, Dimensions, TouchableOpacity, ScrollView,Button } from 'react-native';
import { List, WhiteSpace, } from '@ant-design/react-native';
import * as FlightStyles from '../Styles/FlightStyles';
import FlightCard from './FlightCard';
import FlightListTitle from './FlightListTitle';
import useFlight from '../HookComponents/useFlight';
import Pie from 'react-native-pie';



const Item = List.Item
const Brief = Item.Brief
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height


function Flight({ navigation }) {
    const { activeSections, setActiveSections, onChange, getCustomers, customers, customerStaticList } = useFlight();

    getCustomers();
    const costomerItems = customerStaticList.map((customer) =>
        <FlightCard
            key={customer.id}
            navigation={navigation}
            text={customer.text}
            customer={customer.customer}
            deviceCount={customer.deviceCount}
            city={customer.city}
        />
    );

    return (
        <ScrollView >


            <View style={[{ flexDirection: 'row', alignItems: 'center' }]}>
                <View style={[{ width: width / 4, }]}>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, }]}>
                        <View style={{ backgroundColor: '#C70039', width: 15, height: 15, }}></View>
                        <Text style={{ color: '#C70039', paddingRight: 15, paddingLeft: 10 }}>ground</Text>
                    </View>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, }]}>
                        <View style={{ backgroundColor: '#44CD40', width: 15, height: 15, }}></View>
                        <Text style={{ color: '#44CD40', paddingRight: 15, paddingLeft: 10 }}>high</Text>
                    </View>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, }]}>
                        <View style={{ backgroundColor: '#404FCD', width: 15, height: 15, }}></View>
                        <Text style={{ color: '#404FCD', paddingRight: 15, paddingLeft: 10 }}>middle</Text>
                    </View>
                    <View style={[{ flexDirection: 'row', alignItems: 'center', paddingLeft: 15, }]}>
                        <View style={{ backgroundColor: '#EBD22F', width: 15, height: 15, }}></View>
                        <Text style={{ color: '#EBD22F', paddingRight: 15, paddingLeft: 10 }}>low</Text>
                    </View>
                </View>

                <View style={{ width: 2 * width / 4, alignItems: 'flex-start', paddingTop: 15, paddingLeft: 20, }}>
                    <Pie style={{ alignItems: 'flex-end' }}
                        radius={80}
                        sections={FlightStyles.gaugeSections}
                        dividerSize={6}
                        strokeCap={'butt'}
                    />
                    <View style={FlightStyles.chartStyles.gauge}>
                    </View>
                </View>
            </View>

            <Text style={FlightStyles.titleAfterPieChart}>
                Fligth Altitudes
            </Text>

            <List>
                {/* List Header Title */}
                <FlightListTitle navigation={navigation}/>

                {costomerItems}
            </List>
        </ScrollView>
    );
}

export default Flight;