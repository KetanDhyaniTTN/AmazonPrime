import React, { useState } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, FlatList, Modal } from "react-native";
import { DATA } from "./Data";
import TabBar from "./TabBar";

const SecondScreen = ({ route, navigation }) => {
   const info = route.params.result
   const [showModal, setshowModal] = useState(false)


   const PlayVideo = () => {
      navigation.navigate('PlayerScreen', { result: info })
   }
   return (
      <SafeAreaView style={styles.safeView}>
         <ScrollView
         >
            <Image style={{ height: 240, width: '100%', }}
               source={{ uri: info.poster }} />
              
            {/* {DATA.map((item,key)=>{
               return(
                  <TouchableOpacity>
                  <Image 
                  key={key}
                  style={{height:100,width:190}}
                  source={{uri:item.imageurl}}/>
                  </TouchableOpacity>
               )
            })} */}
               
            <View style={styles.name}>

               <Text style={styles.Title}>{info.title}</Text>
               <Text style={styles.prime}>prime</Text>
               <Text style={styles.includePrime}>Included with Prime</Text>
            </View>

            <TouchableOpacity style={styles.watch}
               onPress={PlayVideo}>
               <Image style={{ height: 32, width: 28 }}
                  source={require('../../Images/icons8-play-50.png')} />
               <Text style={styles.WatchNow}>Watch Now</Text>
            </TouchableOpacity>

            <View style={styles.buttonActivity}>

               <View>
                  <TouchableOpacity style={styles.buttons}>
                     <Image style={{ height: 28, width: 25 }}
                        source={require('../../Images/icons8-play-48.png')} />
                  </TouchableOpacity>

                  <Text style={styles.buttonName}>Trailer</Text>
            </View>

            <View>
               <TouchableOpacity style={styles.buttons}>
                  <Image style={{ height: 28, width: 25 }}
                     source={require('../../Images/icons8-download-24.png')} />
               </TouchableOpacity>

               <Text style={styles.buttonName}>Download</Text>
            </View>

            <View>
               <TouchableOpacity style={styles.buttons}>
                  <Image style={{ height: 28, width: 25 }}
                     source={require('../../Images/icons8-add-64.png')} />
               </TouchableOpacity>

               <Text style={styles.buttonName}>Watchlist</Text>
            </View>

            <View>
               <TouchableOpacity style={styles.buttons}>
                  <Image style={{ height: 28, width: 25 }}
                     source={require('../../Images/icons8-menu-vertical-30.png')} />
               </TouchableOpacity>

               <Text style={styles.buttonName}>More</Text>
            </View>
         </View>

         {/* <View style={styles.buttonText}>

               <Text style={{ color: 'white' }}>Trailer</Text>
               <Text style={{ color: 'white', }}>Download</Text>
               <Text style={{ color: 'white', }}>Watchlist</Text>
               <Text style={{ color: 'white', }}>More</Text>

            </View> */}

         <Modal
            animationType="slide"
            visible={showModal}
            transparent={true}>

            <SafeAreaView style={{ flex: 1 }}>
               <TouchableOpacity
                  onPress={() => { setshowModal(!showModal) }}
                  style={styles.back}>
               </TouchableOpacity>

               <View style={styles.modalView}>

                  <View style={styles.availableLang}>
                     <Text style={{ color: 'white', fontWeight: '800', fontSize: 15 }}>Available languages</Text>
                     <Text style={{ color: 'rgb(136,150,161)', }}>Language can be changed while the video is playing.</Text>
                  </View>

                  <View style={styles.audioView}>
                     <Text style={styles.audio}>Audio</Text>
                     <Text style={styles.language}>हिंदी (original), తెలుగు, தமிழ்</Text>
                  </View>

                  <View style={styles.subtitle}>
                     <Text style={styles.subText}>Subtitles</Text>
                     <Text style={{ color: 'rgb(136,150,161)', }}>English</Text>
                  </View>
               </View>
            </SafeAreaView>

         </Modal>



         <View style={{ marginHorizontal: 15, marginTop: 20 }}>
            <Text style={{ color: 'white' }}>{info.description}</Text>
         </View>

         <View style={styles.imbdView}>
            <Text style={styles.imbd}>IMDb<Text> {info.imdb}</Text></Text>

            <View style={styles.infoView}>
               <Text style={styles.releaseTime}> {info.releaseyear}</Text>
               <Text style={styles.releaseTime}> {info.duration}</Text>

               <TouchableOpacity style={styles.ua}>
                  <Text style={styles.certificate}>U/A 13+</Text>
               </TouchableOpacity>

               <TouchableOpacity style={styles.UHD}>
                  <Text style={styles.certificate}>4K UHD</Text>
               </TouchableOpacity>

               <Image style={{ height: 18, width: 20 }}
                  source={require('../../Images/icons8-comments-24.png')} />
            </View>

            <TouchableOpacity
               onPress={() => { setshowModal(!showModal) }}>
               <Text style={styles.langSub}>Languages: Audio(1), Subtitles(1)</Text>
            </TouchableOpacity>
         </View>

        
         <View style={styles.Posts}>
            <TouchableOpacity style={styles.postViewTwo}
            >
               <Text style={styles.types}>Related</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.tag}>
               <Text style={styles.types}>More details</Text>
            </TouchableOpacity>
         </View>


         <View style={{ marginTop: 12 }}>
            <Text style={styles.customer}>Customers also watched</Text>

            <FlatList style={{ marginTop: 25 }}
               data={DATA}
               horizontal
               showsHorizontalScrollIndicator={false}
               renderItem={({ item }) => {
                  return (
                     <TouchableOpacity>
                        <Image style={{ height: 100, width: 180, marginLeft: 10, borderRadius: 5 }}
                           source={{ uri: item.imageurl }} />
                     </TouchableOpacity>
                  )
               }} />
         </View>

         {/* <View style={{ marginTop: 20, marginLeft: 10 }}>
               <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Cast & Crew</Text>
               <Text style={{ color: 'grey', fontSize: 13, fontWeight: 'bold' }}>Details from IMDb</Text>

               <FlatList style={{ marginTop: 10, }}
                  data={info.Cast}
                  numColumns={3}
                  renderItem={({ item }) => {
                     return (
                        
                        <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                           <Image style={{ height: 115, width: 105, borderRadius: 5 }}
                              source={{ uri: item.image }} /> 
                        </View>
                        
                        
                     )
                  }} />
            </View> */}
         <TabBar />
      </ScrollView>

      </SafeAreaView >
   )
}
const styles = StyleSheet.create({
   safeView: {
      flex: 1,
      backgroundColor: ('rgb(15,23,29)'),
   },
   name: {
      marginTop: 10,
      marginLeft: 15
   },
   Title: {
      color: 'white',
      fontSize: 26,
      fontWeight: '600'
   },
   prime: {
      color: 'rgb(52,119,170)',
      fontSize: 18,
      fontWeight: '700'
   },
   includePrime: {
      color: 'white',
      fontSize: 13,
      fontWeight: '500',
      marginTop: 5
   },
   buttonActivity: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginTop: 20
   },
   watch: {
      marginTop: 10,
      backgroundColor: 'rgb(52,119,170)',
      padding: 9,
      borderRadius: 3,
      width: 360,
      flexDirection: 'row',
      alignSelf: 'center'
   },
   WatchNow: {
      color: 'white',
      fontSize: 16,
      fontWeight: '600',
      marginLeft: 10,
      marginTop: 5
   },
   buttons: {
      width: 50,
      borderColor: 'rgb(53,64,79)',
      borderWidth: 2,
      borderRadius: 30,
      padding: 10
   },
   buttonName: {
      color: 'white',
      textAlign: 'center',
      marginTop: 4
   },
   buttonText: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      marginTop: 5,
   },
   back: {
      backgroundColor: 'black',
      height: '70%',
      opacity: 0.7
   },
   modalView: {
      backgroundColor: ('rgb(31,39,46)'),
      height: '30%'
   },
   availableLang: {
      marginTop: 10,
      height: 60,
      justifyContent: 'space-around',
      marginHorizontal: 15
   },
   audioView: {
      marginTop: 10,
      height: 60,
      justifyContent: 'space-around',
      marginHorizontal: 15,
      borderColor: 'rgb(136,150,161)',
      borderBottomWidth: 1
   },
   audio: {
      color: 'white',
      fontWeight: '800',
      fontSize: 15
   },
   language: {
      color: 'rgb(136,150,161)',
   },
   subtitle: {
      marginTop: 10,
      height: 60,
      justifyContent: 'space-around',
      marginHorizontal: 15
   },
   subText: {
      color: 'white',
      fontWeight: '800',
      fontSize: 15
   },
   imbdView: {
      justifyContent: 'space-between',
      height: 65,
      marginTop: 20,
      marginLeft: 5
   },
   imbd: {
      color: 'rgb(136,150,161)',
      fontWeight: '600',
      marginLeft: 12,
      fontSize: 14
   },
   infoView: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      width: 270
   },
   releaseTime: {
      color: 'rgb(136,150,161)',
      fontWeight: '600'
   },
   ua: {
      borderColor: 'rgb(136,150,161)',
      borderWidth: 1,
      width: 50,
      borderRadius: 2
   },
   certificate: {
      color: 'rgb(136,150,161)',
      fontSize: 12,
      textAlign: 'center'
   },
   UHD: {
      borderColor: 'rgb(136,150,161)',
      borderWidth: 1,
      width: 55,
      borderRadius: 2
   },
   langSub: {
      color: 'rgb(136,150,161)',
      fontWeight: '600',
      marginLeft: 12,
      fontSize: 14
   },
   related: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderColor: 'white',
      borderBottomWidth: 0.5,

   },
   relatedButton: {
      borderColor: 'white',
      borderBottomWidth: 2,
      paddingVertical: 15
   },

   Posts: {
      marginTop: 20,
      flexDirection: 'row'
   },
   postView: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      width: '50%',

   },
   postViewTwo: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      width: '50%',
      borderColor: 'white',
      borderBottomWidth: 2
   },
   types: {
      color: 'white',
      fontSize: 18,
      fontWeight: '800'
   },
   tag: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: 10,
      width: '50%',
      borderColor: 'rgb(136,150,161)',
      borderBottomWidth: 1
   },
   customer: {
      color: 'white',
      fontSize: 18,
      fontWeight: '800',
      marginLeft: 10
   },

})
export default SecondScreen;