import React, { Component } from "react";
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet, StatusBar, FlatList, ScrollView } from "react-native";
import SwiperFlatList from "react-native-swiper-flatlist";
import { DATA } from "./Data";
import { Language } from "./Data";
import { showData } from "../Redux/Actions/Action";
import { connect } from "react-redux";

class HomePage extends Component {

  
  componentDidMount() {
     const { showData } = this.props
    showData()

  }
  render() {
    const { show } = this.props
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: ('rgb(15,23,29)'), }}>
        <StatusBar barStyle={'light-content'}/>
        <Image style={{ height: 25, width: 80, alignSelf: 'center' }}
          source={{ uri: 'https://www.pngkey.com/png/full/267-2679944_amazon-prime-logo-prime-video-android-tv-apk.png'}} />

        <View style={styles.topView} >
          <TouchableOpacity style={styles.buttonsView}>
            <Text style={styles.home}>Home</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsViewTwo}>
            <Text style={styles.buttonTextTwo}>TV Shows</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsViewTwo}>
            <Text  style={styles.buttonTextTwo}>Movies</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonsViewTwo}>
            <Text  style={styles.buttonTextTwo}>Kids</Text>
          </TouchableOpacity>
        </View>

        <ScrollView
        
          showsVerticalScrollIndicator={false}>
          <View>
            <SwiperFlatList
              autoplay
              autoplayLoop
              data={DATA}
              showPagination={false}
              renderItem={({ item }) => {
                return (
                  <TouchableOpacity>
                    <Image style={{ height: 180, width: 400 }}
                      source={{ uri: item.imageurl }} />
                  </TouchableOpacity>
                )
              }} />
          </View>

          <View style={{ marginTop: 20, marginLeft: 15 }}>
            <Text style={styles.contiWatch}>Continue watching</Text>
            <Image style={styles.watching}
              source={{ uri:'https://images.news18.com/ibnlive/uploads/2022/10/untitled-design-3-4-2-2-1-1-2-1-2-1-2-16662517673x2.png?impolicy=website&width=510&height=356'}}/>

            <Image style={styles.play}
              source={require('../../Images/icons8-play-67.png')} />

            <View style={{ flexDirection: 'row', position: 'absolute',bottom:0.5}}>

              <View style={styles.timeline}>
              </View>

              <View style={styles.whiteTimeline}>

              </View>
              </View>
            </View>

            <Text style={styles.recommended}>Recommended movies</Text>

            <FlatList style={{ marginTop: 10 }}
              showsHorizontalScrollIndicator={false}
              data={show.data}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('DetailScreen', { result: item })}>
                      <Image 
                     
                      style={styles.poster}
                        source={{ uri: item.poster }} />

                    </TouchableOpacity>
                  </View>
                )
              }} />


            <Text style={styles.Language}>Watch in Your Language</Text>

            <FlatList style={{ marginTop: 15 }}
              showsHorizontalScrollIndicator={false}
              data={Language}
              horizontal
              renderItem={({ item }) => {
                return (
                  <View>
                    <TouchableOpacity>
                      <Image style={styles.languageImage}
                        source={{ uri: item.imageurl }} />
                    </TouchableOpacity>
                  </View>
                )
              }} />
        </ScrollView>
      </SafeAreaView>
    )
  }
}

const mapStateToProps = state => {
  return {
    show: state.ShowReducer
  }
}


const mapDispatchToProps = {
  showData
}


const styles = StyleSheet.create({

  topView:{
    flexDirection: 'row',
     justifyContent: 'space-around',
      marginTop: 10 
  },
  buttonsView: {
    marginTop: 10,
    paddingVertical: 13,
    paddingHorizontal:18,
    borderColor:'white',
    borderBottomWidth:2.5
  },
  home:{
    color: 'white',
     fontSize: 15,
      fontWeight: '700'
  },
  buttonsViewTwo:{
    marginTop: 10,
    paddingVertical: 13,
    paddingHorizontal:18,
  },
  buttonTextTwo:{
    color: 'rgb(136,150,161)', 
    fontSize: 15, 
    fontWeight: '700'
  },
  poster: {
    height: 100,
    width: 170,
    borderRadius: 10,
    marginLeft: 15,
  },
  timeline: {
    borderColor: ('rgb(72,166,212)'),
    borderBottomWidth: 4,
    width: 90,
    borderRadius: 10,
    marginLeft:2
},
whiteTimeline: {
    borderColor:('rgb(29,36,47)'),
    borderBottomWidth: 4,
    width: 88,
    borderRadius: 10,
},
watching:{
  height: 100, 
  width: 180, 
  marginTop: 10,
   borderRadius: 5,
},
  play: {
    height: 30,
    width: 30,
    position: 'absolute',
    bottom: 10,
    left: 10
  },
  contiWatch: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
  },
  recommended: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 20,
    marginLeft: 15
  },
  Language: {
    color: 'white',
    fontSize: 18,
    fontWeight: '800',
    marginTop: 15,
    marginLeft: 15
  },
  languageImage:{
    height: 140, 
    width: 160,
     borderRadius: 10,
      marginLeft: 15 
  }

})
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
