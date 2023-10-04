import { FlatList, View } from "react-native";
import SFList from "../styles/Flist/SFlist";
import SFList2 from "../styles/Flist/SFlist2";
import SFList3 from "../styles/Flist/SFlist3";
import SFList4 from "../styles/Flist/SFlist4";
import SFList5 from "../styles/Flist/SFlist5";

const data = [
    { key: '1', component: <SFList />},
    { key: '2', component: <SFList2 />},
    { key: '3', component: <SFList3 />},
    { key: '4', component: <SFList4 />},
    { key: '5', component: <SFList5 />},
];

export default function Flist() {
    return(
        <FlatList
            data={data}
            style={{ width: '80%', height: '20%', marginTop: '-50%', marginLeft: '8%' }}
            horizontal={true}
            renderItem={({ item }) => item.component}
            keyExtractor={item => item.key}
            ItemSeparatorComponent={() => <View style={{ width: 5 }}></View>}
        />
    );
};