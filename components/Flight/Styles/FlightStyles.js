import { StyleSheet, Dimensions } from 'react-native';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

// closed Opportunity outer content
export const opportunityListItem = StyleSheet.create({
    marginTop: 7
});


// closed Opportunity outer content
export const ListTitleView = StyleSheet.create({
    flexDirection: 'row'
});

export const ListTitleIcon = StyleSheet.create({
    height: 40,
    width: 40,
    marginRight: 15
});

export const ListTitleText = StyleSheet.create({
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    fontSize: 18
});

export const cardItem = StyleSheet.create({
    fontWeight: 'bold',
    color: 'black',
    marginTop: 5,
    fontSize: 18
});

export const cardOuterView = StyleSheet.create({
    flexDirection: 'row',
    width: width - 25,
    height: height / 6,
    borderWidth: 2,
    borderColor: '#1169b4',
    backgroundColor: '#1169b4',
    borderRadius: 13,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5
});

export const cardOuterLeftBorderView = StyleSheet.create({
    backgroundColor: '#fafafa',
    width: width / 5,
    height: height / 6,
    marginTop: -2,
    marginLeft: -2,
    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 13,
    borderWidth: 2,
    borderColor: '#0f80c0'
});

export const cardImage = StyleSheet.create({
    marginTop: '20%',
    marginLeft: 10,
    height: 60,
    width: 60,
});

export const cardTextView = StyleSheet.create({
    padding: 7, color: 'white', width:width/2 +20
});

export const cardText = StyleSheet.create({
    fontSize: 13,
     fontWeight: 'bold',
      color: 'white',
       width: 2 * width / 3,
        paddingTop: 3
});

export const cardTextFlexItem = StyleSheet.create({
    fontSize: 13, fontWeight: 'bold', color: 'white', width: width / 3
});

export const cardStatusText = StyleSheet.create({
    fontSize: 11,
    fontWeight: 'bold',
    color: '#0f80c0',
    paddingLeft: 2,
    paddingTop: '7%',
    textAlign: 'center'
});


export const CardWingBlank = StyleSheet.create({
    width: '97%', paddingTop: '1%'
});

export const CardFlexItem = StyleSheet.create({
    width: '35%'
});

export const weatherText = StyleSheet.create({
    fontSize: 11,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 2,
    paddingTop: '2%',
    textAlign: 'center',
    marginLeft:26
});

export const weatherIcon = StyleSheet.create({
    marginTop: '17%',
    marginLeft: 33,
    height: 30,
    width: 30,
    alignItems: 'center',
});

export const windIcon = StyleSheet.create({
    marginTop: '1%',
    marginLeft: 27,
    height: 40,
    width: 40,
    alignItems: 'center',
});
export const windText = StyleSheet.create({
    fontSize: 10,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 2,
    marginTop: -9,
    textAlign: 'center',
    marginLeft:26
});

// closed Opportunity pie chart sections
export const gaugeSections = [
    {
        percentage: 10,
        color: '#C70039',
    },
    {
        percentage: 50,
        color: '#44CD40',
    },
    {
        percentage: 10,
        color: '#404FCD',
    },
    {
        percentage: 30,
        color: '#EBD22F',
    },
];

export const chartStyles = StyleSheet.create({
    container: { alignItems: 'flex-start', justifyContent: 'center', height: 1050 },
    gauge: {
        position: 'absolute',
        width: 100,
        height: 160,
        alignItems: 'center',
        justifyContent: 'center',
    },
    gaugeText: {
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 24,
    },
});

export const titleAfterPieChart = StyleSheet.create({
    fontSize: 20, color: '#0558b4', textAlign: 'center',padding:10
});

export const PressableGreen = StyleSheet.create({
    width: 75,
    height:75,
    borderRadius: 4,
    position: 'absolute',
    bottom:0,
    right:0,
    paddingTop:20
});

export const PressableText = StyleSheet.create({
    color: 'red',
    marginTop:2,
    fontSize:37,
    bottom:0,
    right:0,
});