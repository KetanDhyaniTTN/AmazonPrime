import React from "react";
import { SafeAreaView,StyleSheet } from "react-native";
import Video from "react-native-video";

const Player=({route,navigation})=>{
    const show = route.params.result
        return(
            <SafeAreaView>
                <Video 
                resizeMode="cover"
                style={{height:'100%',width:'100%'}}
                controls={true}
                source={{uri:show.source}}/>

            </SafeAreaView>
        )
}
    
const styles=StyleSheet.create({

})
export default Player;