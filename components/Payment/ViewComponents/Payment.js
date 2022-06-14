
import React from 'react';
import { Text, Image, View, Dimensions, TextInput, TouchableOpacity, ScrollView,Pressable } from 'react-native';
import { Accordion, List, Card, WhiteSpace, WingBlank, Icon, Steps, Flex, Button, } from '@ant-design/react-native';
import UserAvatar from 'react-native-user-avatar';
import DropDownPicker from 'react-native-dropdown-picker';
import usePayment from '../HookComponents/usePayment';
import PaymentItem from './PaymentItem';



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
    return <UserAvatar size={40} name={name} bgColors={['#ccc', '#fafafa', '#ccaabb',]} />
};


const questionMarkButtonStatus = (name) => {
    return <Image
        source={require('./../../../files/payIcon.png')}
        style={{ width: 29, height: 29 }}
    />
};




function Payment({ navigation }) {
    const { open, setOpen, value, setValue, items, setItems, pilotPaymentList, pilotPaymentList2 } = usePayment();


    var list = value == 0 ? pilotPaymentList : pilotPaymentList2;
    var tittle = value == 0 ? 'Tutorial Payments' : 'KP Payments';
    const payments = list.map((payment) =>
        <PaymentItem
            key={payment.id}
            pilotName={payment.pilotName}
            amount={payment.amount}
            status={payment.status}
        />
    );

    return (
        <ScrollView >
            <DropDownPicker
                dropDownContainerStyle={{ width: width - 10, margin: 5 }}
                open={open}
                value={value}
                items={items}
                setOpen={setOpen}
                setValue={setValue}
                setItems={setItems}
                placeholder="Type"
                style={{ width: width - 10, margin: 5 }} />
            <Pressable
                style={{
                    width: width - 20,
                    marginLeft: 10,
                    marginRight: 10,
                    marginTop: 4,
                    marginBottom:9,
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingVertical: 12,
                    paddingHorizontal: 32,
                    borderRadius: 4,
                    elevation: 3,
                    backgroundColor: '#5dc070',
                }}
            // onPress={onPress}
            >
                <Text style={{
                    fontSize: 16,
                    lineHeight: 21,
                    fontWeight: 'bold',
                    letterSpacing: 0.25,
                    color: 'white',
                }}>  Add New Payment Table </Text>
            </Pressable>
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
                        <Text style={{ fontWeight: 'bold', color: 'black', marginTop: 0, fontSize: 15 }}>{tittle}</Text>
                    </View>

                </Item>
                {payments}
            </List>
        </ScrollView>
    );
}

export default Payment;