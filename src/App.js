import React from "react";
import { Provider } from "react-redux";
import Store from "./Redux/Store";
import HomeScreen from "./Screens/amazonNavigation";

const App=()=>{
    return(
        <Provider store={Store}>
           <HomeScreen/>
        </Provider>
    )
};
export default App;