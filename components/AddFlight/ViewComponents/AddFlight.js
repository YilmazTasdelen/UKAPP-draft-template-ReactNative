import * as React from 'react';
import { useState } from "react";
import { View, Text, Image, ScrollView, Dimensions, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { List, Steps, Flex } from '@ant-design/react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import * as AddFlightStyles from '../Styles/AddFlightStyles';
import useAddFligth from '../HookComponents/useAddFlight';

const Step = Steps.Step
const Item = List.Item
const Brief = Item.Brief


function AddPhoneCall({ navigation }) {

    const {
        createDate,
        setcreateDate,
        isDatePickerVisible,
        setDatePickerVisibility,
        direction,
        setDirection,
        CreateDateOnChange,
        showDatePicker,
        hideDatePicker,
        handleConfirm,
        onDatePicker,
        thumbUrl,
        phoneUrl } = useAddFligth();

    return (
        <ScrollView style={AddFlightStyles.ScrollViewContainer}>
            <List >
                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>
                        <TouchableOpacity >
                            <Image source={require('../../../files/offerListIcon.png')}
                                style={AddFlightStyles.HeaderIcon} />
                        </TouchableOpacity>
                        <Text style={AddFlightStyles.HeaderText}>General Info</Text>
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}> Date:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value="" />
                        <TouchableOpacity onPress={onDatePicker}>
                            <Image
                                source={require('../../../files/calendarIcon.jpeg')}
                                style={AddFlightStyles.calendarIcon} />
                        </TouchableOpacity>
                    </View>
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="datetime"
                        onConfirm={handleConfirm}
                        onCancel={hideDatePicker}
                    />
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Takeoff:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={direction}
                        />
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>

                    <Flex>
                        <Flex.Item >
                            <Text style={AddFlightStyles.ListLabel}>Temperature:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={AddFlightStyles.ListInputHalf}
                                    //onChangeText={onChangeText}
                                    value={'--'}
                                />
                            </View>
                        </Flex.Item>
                        <Flex.Item >
                            <Text style={AddFlightStyles.ListLabel}>Wind:</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <TextInput
                                    style={AddFlightStyles.ListInputHalf}
                                    //onChangeText={onChangeText}
                                    value={'--'}
                                />
                            </View>
                        </Flex.Item>
                    </Flex>


                </Item>


                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Description:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            multiline
                            numberOfLines={2}
                            style={AddFlightStyles.TextArea}
                            //onChangeText={onChangeText}
                            value={''}
                        />
                    </View>
                </Item>

                <Item style={{ marginTop: 7 }}>
                    <View style={{ flexDirection: 'row' }}>

                        <TouchableOpacity >
                            <Image source={require('../../../files/offerListIcon.png')}
                                style={AddFlightStyles.HeaderIcon} />
                        </TouchableOpacity>
                        <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 13 }}>Flight Info</Text>
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Duration:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>

                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Type:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>


                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Takeoff type:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>
                <Item thumb={thumbUrl()}>
                    <Text style={AddFlightStyles.ListLabel}>Wing:</Text>
                    <View style={{ flexDirection: 'row' }}>
                        <TextInput
                            style={AddFlightStyles.ListInput}
                            //onChangeText={onChangeText}
                            value={'--'}
                        />
                    </View>
                </Item>
            </List>
            <Pressable
                style={AddFlightStyles.SubmitButton}
            // onPress={onPress}
            >
                <Text style={AddFlightStyles.SubmitButtonText}>  Add Flight </Text>
            </Pressable>

        </ScrollView>
    );
}

export default AddPhoneCall;