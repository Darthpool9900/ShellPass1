import { View } from "react-native";
import Banner from "../components/Banner";
import Styles from "../styles/Styles";
import Points from "../components/Points";
import Flist from "../components/Fllist";

export default function Home() {
    return(
        <View style={Styles.Body}>
            <Banner />
            <Points />
            <Flist />
        </View>
    )
}
