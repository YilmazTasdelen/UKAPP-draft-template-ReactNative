
import React from 'react';
import { Text, Image, View, Dimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { Accordion, List, Card, WhiteSpace, WingBlank, Icon, Steps, Flex, Button, } from '@ant-design/react-native';
import UserAvatar from 'react-native-user-avatar';
import DropDownPicker from 'react-native-dropdown-picker';
import usePayment from '../HookComponents/usePayment';


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

const questionMarkButtonStatus = (name) => {
    return  <Image
    source={require('./../../../files/payIcon.png')}
    style={{ width: 29, height: 29 }}
  />
};

function PaymentItem(props) {
    const { open, setOpen, value, setValue, items, setItems, } = usePayment();
    return (
                <Item thumb={thumbUrl()} style={{ marginTop: 7 }} extra={
                    questionMarkButtonStatus()
                }>
                    <Flex>
                        <Flex.Item >
                        <Text style={{ color: 'gray', fontSize: 19, marginLeft: '10%' }}>{props.pilotName}</Text>
                        </Flex.Item>
                        <Flex.Item >

                            <TextInput
                                style={{
                                    height: 30,
                                    width: (width / 4) + 10,
                                    borderWidth: 1,
                                    borderColor: 'gray',
                                    borderRadius: 5,
                                    paddingTop: 5,
                                    textAlign: 'left',
                                    padding: 2,
                                    color:'black'
                                }}
                                //onChangeText={onChangeText}
                                value={'$' + props.amount}
                                placeholder={'$$'}
                            />

                        </Flex.Item>

                    </Flex>
                </Item>
               
    );
}

export default PaymentItem;