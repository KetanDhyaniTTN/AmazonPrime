import React, { Component } from "react";
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from "react-native";


class Find extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: ('rgb(15,23,29)'), }}>

                <View style={styles.input}>
                    <Image style={{ height: 25, width: 25 }}
                        source={require('../../Images/icons8-search-30.png')} />

                    <TextInput style={{ fontSize: 18 }}
                        placeholderTextColor={'white'}
                        placeholder="Search by actor, title.."/>

                    <Image style={{ height: 25, width: 25 }}
                        source={require('../../Images/icons8-microphone-24.png')} />
                </View>

                <View style={styles.browse}>
                    <Text style={{ color: 'white', fontSize: 20, fontWeight: '800' }}>Browse by</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:15}}>

                        <TouchableOpacity style={styles.browseBtn}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800',textAlign:'center',marginTop:16}}>Movies</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.browseBtn}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800',textAlign:'center',marginTop:5 }}>Amazon</Text>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' ,textAlign:'center',marginTop:4}}>Originals</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around',marginTop:15}}>

                        <TouchableOpacity style={styles.browseBtn}>
                            <Text style={{ color: 'white', fontSize: 16, fontWeight: '800',textAlign:'center',marginTop:16 }}>TV</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.browseBtn}>
                            <Text style={{ color: 'white', fontSize: 15, fontWeight: '800' ,textAlign:'center',marginTop:16}}>Kids</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    input: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginHorizontal: 20,
        backgroundColor: '(rgb(21,40,59))',
        paddingVertical: 10,
        borderRadius: 5,
        marginTop:15
    },
    browse:{
       marginTop:20,
       marginHorizontal:20
    },
    browseBtn:{
        height:55,
        width:160,
        backgroundColor:'(rgb(35,45,60))',
        borderRadius:4
    }
})

export default Find;