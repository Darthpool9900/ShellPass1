import React, {useState} from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { CreditCard} from "phosphor-react-native"; 
import { UserRectangle} from "phosphor-react-native"; 
import { Article} from "phosphor-react-native";
import { GlobeHemisphereEast } from "phosphor-react-native"; 
import { Share } from "phosphor-react-native"; 
import { Cards} from "phosphor-react-native"; 
import { Coins} from "phosphor-react-native"; 
import { Info} from "phosphor-react-native"; 
import { Wrench} from "phosphor-react-native"; 
import { KeyReturn} from "phosphor-react-native"; 
import { Car} from "phosphor-react-native"; 
import {DeviceMobileCamera} from "phosphor-react-native"; 
import Styles from "../styles/Styles";
import { useNavigation } from "@react-navigation/native";




export default function Menu() {
    const [isClicked, setIsClicked] = useState(false);
    const ClickColor = () => {
        setIsClicked(true);
      };
    
      const buttonColor = isClicked ? '#70126A' : '#FFD700';
    const navigation = useNavigation()
     return(
        <View>
            <TouchableOpacity
            style={[Styles.Menu, {backgroundColor: buttonColor}]}
            onPress={() => {
                navigation.navigate('Home'),
                {ClickColor}
             }}
            >
                < DeviceMobileCamera size={32}/>
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}>Pagamento pelo App</Text>
            </TouchableOpacity>


            <TouchableOpacity
            style={[Styles.MenuButtons]}
            onPress={() => {
                navigation.navigate('MyID')
            }}>
                <UserRectangle size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Meus dados</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('Payments')
            }}>
                <CreditCard size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Formas de Pagamento</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('Historic')
            }}>
                <Article size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Histórico</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() =>{
                navigation.navigate('Mapa ')
            }}
            style={Styles.MenuButtons}>
                <GlobeHemisphereEast size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Mapa de Postos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() =>{
                navigation.navigate('Share')
            }}>
                <Share size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Compartilhe e Ganhe</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() =>{
                navigation.navigate('Discount')
            }}>
                <Cards size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Meus descontos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('MyCoins')
            }}>
                <Coins size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Meus Pontos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('AboutApp')
            }}>
                <Info size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Sobre o App</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('Ajusts')
            }}>
                <Wrench size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Ajustes e Notificações</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('Manutencao')
            }}>
                <Car size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Manutenção Preventiva</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            style={Styles.MenuButtons}
            onPress={() => {
                navigation.navigate('Login')
            }}>
                <KeyReturn size={32} />
                <Text style={{marginLeft: 35,
                marginTop: -25,
                fontSize: 18, 
                textDecorationLine: 'underline',
                }}> Sair do App</Text>
            </TouchableOpacity>
        </View>
     )
};