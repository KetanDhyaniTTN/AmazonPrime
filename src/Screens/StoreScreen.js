import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Image, FlatList, ScrollView, } from "react-native";
import { DATA , Release, Adventure,IMBd,Tamil} from "./Data";
import SwiperFlatList from "react-native-swiper-flatlist";
class Store extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: ('rgb(15,23,29)'), }}>
               <ScrollView>
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
                <View style={styles.releaseMovies}>
                    <Text style={styles.rent}>Rent</Text>
                    <TouchableOpacity style={styles.releaseBtn}>
                        <Text style={styles.newRelease}>New release movies</Text>

                        <Image style={styles.arrowDown}
                            source={require('../../Images/icons8-more-than-30.png')} />
                    </TouchableOpacity>
                    <FlatList
                        data={Release}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Image style={{ height: 80, width: 170, borderRadius: 5, marginHorizontal: 5, marginVertical: 8 }}
                                        source={{ uri: item.imageurl }} />
                                </TouchableOpacity>
                            )

                        }} />
                </View>

                <View style={styles.releaseMovies}>
                    <Text style={styles.rent}>Rent</Text>
                    <TouchableOpacity style={styles.releaseBtn}>
                        <Text style={styles.newRelease}>Action and adventure movies</Text>

                        <Image style={styles.arrowDown}
                            source={require('../../Images/icons8-more-than-30.png')} />
                    </TouchableOpacity>
                    <FlatList
                        data={Adventure}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Image style={{ height: 80, width: 170, borderRadius: 5, marginHorizontal: 5, marginVertical: 8 }}
                                        source={{ uri: item.imageurl }} />
                                </TouchableOpacity>
                            )

                        }} />
                </View>

                <View style={styles.releaseMovies}>
                    <Text style={styles.rent}>Rent</Text>
                    <TouchableOpacity style={styles.releaseBtn}>
                        <Text style={styles.newRelease}>Top-rated IMDb movies</Text>

                        <Image style={styles.arrowDown}
                            source={require('../../Images/icons8-more-than-30.png')} />
                    </TouchableOpacity>
                    <FlatList
                        data={IMBd}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Image style={{ height: 80, width: 170, borderRadius: 5, marginHorizontal: 5, marginVertical: 8 }}
                                        source={{ uri: item.imageurl }} />
                                </TouchableOpacity>
                            )

                        }} />
                </View>

                <View style={styles.releaseMovies}>
                    <Text style={styles.rent}>Rent</Text>
                    <TouchableOpacity style={styles.releaseBtn}>
                        <Text style={styles.newRelease}>Movies in Tamil</Text>

                        <Image style={styles.arrowDown}
                            source={require('../../Images/icons8-more-than-30.png')} />
                    </TouchableOpacity>
                    <FlatList
                        data={Tamil}
                        horizontal
                        renderItem={({ item }) => {
                            return (
                                <TouchableOpacity>
                                    <Image style={{ height: 80, width: 170, borderRadius: 5, marginHorizontal: 5, marginVertical: 8 }}
                                        source={{ uri: item.imageurl }} />
                                </TouchableOpacity>
                            )

                        }} />

                        
                </View>
                </ScrollView>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    releaseMovies: {
        paddingLeft: 15,
        marginTop:15
    },
    rent: {
        color: 'rgb(136,150,161)',
        fontWeight: '600',
        marginLeft: 5
    },
    newRelease: {
        color: 'white',
        fontSize: 18,
        fontWeight: '800',
        marginLeft: 5
    },
    arrowDown: {
        height: 18,
        width: 18,
        marginTop: 4,
        marginLeft: 3
    },
    releaseBtn: {
        flexDirection: 'row'
    }
})
export default Store;