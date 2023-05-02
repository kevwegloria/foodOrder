import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
       <View style = { styles.container}>
       <View style = { styles.container1 }>
<View style= { styles.topContainer }>
<View style={styles.menuContainer}>
    <Image style={styles.menu}  resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/menu.png')}/>
</View>
<View style={ styles.shoppingContainer}>
        <Image style={styles.shopping} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/shopping-bag.png')}/>
        <Image style={styles.bell} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/bell.png')}/>
    </View>
</View>
<View style={ styles.deliContainer}>
    <Text style={ styles.deliText}>Delicious food ready to be delivered to you <Image style={styles.noodles} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/noodles.png')}/> </Text>
  
</View>
<View style={styles.inputContainer}>
<View style={styles.input}>
    <Image style={styles.search} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/search.png')}/>
    <Text style={styles.searchText}>Search food you would like to eat</Text>
</View>
</View>
      </View>
      <View style = {styles.container2}>
      <View style = {styles.recContainer}>
      <Text style = {styles.recommend}>Recommended</Text>
<Text style = {styles.sell}>Sell All</Text>
      </View>
      <View style = {styles.foodContainer}>
       <View style = {styles.seafoodContainer}>
     <View style = {styles.seafoodCon}>
     <Image style = {styles.seafood} resizeMode='contain' source={ require ('../foodOrderApp/assets/myAssets/seafood.jpg')} />
     <View style = {styles.rating}>
      <Image style = {styles.star} resizeMode='contain' source={require('../foodOrderApp/assets/myAssets/star.png')}/>
      <Text style = {styles.foodText}>4.7</Text>
     </View>
     </View>
     <View style = {styles.seafoodTextCon}>
        <Text style = {styles.seafoodText}>Seafood Pasta with Cila ...</Text>
        <Text style = {styles.seafoodPrice}>
            $15.50
        </Text>
     </View>
       </View>
       <View style = {styles.spicyContainer}>
   <View style = {styles.spicyCon}>
   <Image style = {styles.spicy} resizeMode='contain' source={ require ('../foodOrderApp/assets/myAssets/spicy.jpg')} />
   </View>
   <View style = {styles.spicyTextCon}>
        <Text style = {styles.spicyText}>Spicy Noodles with Red Chili Sauce</Text>
        <Text style = {styles.spicyPrice}>
            $12.40
        </Text>
     </View>
       </View>
      </View>
      <View style = {styles.nearContainer}>
      <Text style = {styles.near}>Near to you</Text>
      <Text style = {styles.sell}>Sell Al</Text>
      </View>
      <View style= { styles.chickenContainer}>
          <View style = {styles.chickenCon}>
          <Image style={styles.chicken} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/chicken.jpg')}/>
          <View style = {styles.fried}>
            <Text style = {styles.big}>Big Fried Chicken</Text>
            <Text style = {styles.gam}>Gaminbar  .   9.2km</Text>
            <View style = {styles.rating1}>
      <Image style = {styles.star1} resizeMode='contain' source={require('../foodOrderApp/assets/myAssets/star.png')}/>
      <Text style = {styles.chicText}>4.4</Text>
     </View>
          </View>
          </View>
          <View >
            <Text style = {styles.chickenPrice}>$4.2</Text>
          </View>
      </View>
      <View style = {styles.iconContainer}>
      <Image style={styles.icon} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/home.png')}/>
      <Image style={styles.icon} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/chat.png')}/>
      <Image style={styles.search2} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/search2.png')}/>
      <Image style={styles.icon} resizeMode='contain' source={ require('../foodOrderApp/assets/myAssets/person.png')}/>
      </View>
      </View>
       </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2aaeac',
    },

    container1: {
        backgroundColor: '#2aaeac',
        paddingTop:60,
        paddingBottom:27,
        fontFamily: ''
    },
    topContainer: {
    flexDirection:'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    },
    menu: {
        height:20,
        width: 20,
        marginTop: 5,
        alignItems: 'center',
    },
    shoppingContainer: {
        flexDirection: 'row',
    },
    shopping: {
        height: 30,
        width: 30,
        marginRight:20
    },
    bell: {
        height: 25,
        width: 25,
        marginTop: 4
    },
    deliContainer: {
        paddingTop: 35,
        marginLeft:28,
        paddingBottom:25,
    },
    deliText: {
        fontSize: 24,
        color: 'white',
        width:300,
        fontWeight:900

    },
    noodles: {
        height: 20,
        width: 20,
    },
    
    inputContainer: {
       
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
    flexDirection:'row',
    justifyContent: 'space-between',
        borderColor: 'white',
        borderRadius:15,
        padding:20,
        borderWidth:2,
        width:330,  
    },
    search: {
        height:20,
        width:20,
    },
    searchText: {
        color: 'white',
        fontSize: 17,
    },
    container2: {
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        color: 'white',
        paddingTop: 30,
    },
    recContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20,
        
    },
    recommend: {
        color: 'black',
        fontSize:20,
        fontWeight:900
    },
    sell:{
        fontSize:20,
        color:'#2aaeac',
        fontWeight:900
    },
    seafood: {
        height:150,
        width:200,
        borderRadius:10,
    },
    spicy: {
        height:150,
        width:200,
        borderRadius:10,
    },
    foodContainer: {
     flexDirection:'row',
     gap:30,
     paddingLeft:30,
    },
    star: {
        height:10,
        width:10,
    },
    rating: {
        flexDirection:'row',
        gap:5,
        position:'absolute',
        top: 11,
        left:125,
        paddingLeft:12,
        paddingRight:12,
        paddingTop:5,
        paddingBottom:5,
        backgroundColor: 'white',
        borderWidth:2,
        borderColor:'white',
      borderRadius:10
    },
    seafoodCon: {
        position:'relative'
    },
    seafoodTextCon: {
        paddingTop:10,
        paddingLeft:7,
    },
    seafoodText: {
        fontSize:17,
        fontWeight:700
    },
    seafoodPrice: {
        fontSize:15,
        color:'#2aaeac',
        fontWeight:700
    },
    spicyTextCon: {
        paddingTop:10,
        paddingLeft:7,
    },
    spicyText: {
        fontSize:17,
        fontWeight:700
    },
    spicyPrice : {
        fontSize:15,
        color:'#2aaeac',
        fontWeight:700
    },
    near: {
        color: 'black',
        fontSize:20,
        fontWeight:900
    },
    nearContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft:30,
        paddingRight:30,
        paddingBottom:20,
        paddingTop:25
    },
    chickenCon : {

flexDirection:'row',
gap:15,
    },
    chicken: {
        height: 100,
        width: 100,
        borderRadius:20,
    },
    chickenContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    star1:{
        height:12,
        width:12
    },
    rating1 : {
        flexDirection: 'row',
        gap: 5
    },
    gam: {
        color: 'grey',
        paddingBottom:5
    },
    big: {
        fontWeight:700,
        fontSize:15,
        paddingBottom:5
    },
    fried : {
        paddingTop:10
    },
    chickenPrice: {
        fontSize:15,
        color:'#2aaeac',
        fontWeight:700
    },
    iconContainer : {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingTop: 30
    },
    search2: {
        height:25,
        width:25
    }
});