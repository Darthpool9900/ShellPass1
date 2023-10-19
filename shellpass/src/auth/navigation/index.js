import React, {useState} from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignInScreen from "../authPages/SignInScreen";
import SignUpScreen from "../authPages/SignUpScreen";
import Home from "../../screens/Home";
import Menu from "../../screens/Menu";
import AboutApp from "../../components/MenuComponents/AboutApp";
import Ajusts from "../../components/MenuComponents/Ajusts";
import Discount from "../../components/MenuComponents/Discount";
import Historic from "../../components/MenuComponents/Historic";
import MyCoins from "../../components/MenuComponents/MyCoins";
import MyID from "../../components/MenuComponents/MyID";
import Payments from "../../components/MenuComponents/Payment";
import Share from "../../components/MenuComponents/Share";
import Question from "../../screens/Question";
import Bell from "../../screens/Bell";
import Qrcode from "../../screens/QrCode";
import Payment from "../../screens/Payment";
import Camera from "../../screens/Camera";
import Ponto from "../../screens/Ponto";
import Desconto from "../../screens/Desconto";
import Map from "../../screens/Mapa/Map";
import SobreOBD from "../../screens/SobreOBD";
import Manutencao from "../../screens/Manutencao/Manutencao";
import OptionManu from "../../screens/OptionManu";
import Manualmente from "../../screens/Manualmente";
import Question1 from "../../components/Perguntas/Question1";
import Question2 from "../../components/Perguntas/Question2";
import Question3 from "../../components/Perguntas/Question3";
import Question4 from "../../components/Perguntas/Question4";
import Question5 from '../../components/Perguntas/Question5';
import Question6 from '../../components/Perguntas/Question6';
import Question7 from '../../components/Perguntas/Question7';
import Question8 from '../../components/Perguntas/Question8';
import Question9 from '../../components/Perguntas/Question9';
import Question10 from '../../components/Perguntas/Question10';
import Question11 from '../../components/Perguntas/Question11';
import Question12 from '../../components/Perguntas/Question12';
import Question13 from '../../components/Perguntas/Question13';
import Question14 from '../../components/Perguntas/Question14';
import Question15 from '../../components/Perguntas/Question15';
import Question16 from '../../components/Perguntas/Question16';
import Config from "../../screens/Config";



const Stack = createNativeStackNavigator();
const Navigation = ({setUser}) => {

    return(
       <NavigationContainer>
            <Stack.Navigator initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="Login" component={SignInScreen} />
                <Stack.Screen name="Cadastro" component={SignUpScreen} />
                <Stack.Screen name='Home' component={Home}/>
                <Stack.Screen name='Menu' component={Menu}/>
                <Stack.Screen name='AboutApp' component={AboutApp} />
                <Stack.Screen name='Ajusts' component={Ajusts} />
                <Stack.Screen name='Discount' component={Discount} />
                <Stack.Screen name='Historic' component={Historic} />
                <Stack.Screen name='MyCoins' component={MyCoins} />
                <Stack.Screen name='MyID' component={MyID} />
                <Stack.Screen name='Payments' component={Payments} />
                <Stack.Screen name='Share' component={Share} />
                <Stack.Screen name='Question' component={Question} />
                <Stack.Screen name='Bell' component={Bell} />
                <Stack.Screen name='QrCode' component={Qrcode} />
                <Stack.Screen name='Payment' component={Payment} />
                <Stack.Screen name='Camera' component={Camera} />
                <Stack.Screen name='Ponto' component={Ponto} />
                <Stack.Screen name='Desconto' component={Desconto} />
                <Stack.Screen name='Mapa' component={Map} />
                <Stack.Screen name='SobreOBD' component={SobreOBD} />
                <Stack.Screen name='Manutencao' component={Manutencao} />
                <Stack.Screen name='OptionManu' component={OptionManu} />
                <Stack.Screen name='Manualmente' component={Manualmente} />
                <Stack.Screen name='Question1' component={Question1} />
                <Stack.Screen name='Question2' component={Question2} />
                <Stack.Screen name='Question3' component={Question3} />
                <Stack.Screen name='Question4' component={Question4} />
                <Stack.Screen name='Question5' component={Question5} />
                <Stack.Screen name='Question6' component={Question6} />
                <Stack.Screen name='Question7' component={Question7} />
                <Stack.Screen name='Question8' component={Question8} />
                <Stack.Screen name='Question9' component={Question9} />
                <Stack.Screen name='Question10' component={Question10} />
                <Stack.Screen name='Question11' component={Question11} />
                <Stack.Screen name='Question12' component={Question12} />
                <Stack.Screen name='Question13' component={Question13} />
                <Stack.Screen name='Question14' component={Question14} />
                <Stack.Screen name='Question15' component={Question15} />
                <Stack.Screen name='Question16' component={Question16} />
                <Stack.Screen name='Config' component={Config} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation