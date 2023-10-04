import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../../styles/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Question1() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    const navigation = useNavigation();
    return(
        <View style={Styles.Phone}>
            <Text style={Styles.title}>
                Qual a quilometragem do seu carro? 
            </Text>
            <View>
                <TouchableOpacity style={Styles.option1}>
                    <Text style={Styles.optionT}>
                        0 - 10 Km rodados
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option4}>
                    <Text style={Styles.optionT}>
                        20 - 100 Km rodados
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option2}>
                    <Text style={Styles.optionT}>
                        100 - 200 Km rodados
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option3}>
                    <Text style={Styles.optionT}>
                        + 400 Km rodados
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.next}>
          <TouchableOpacity>
            <Text style={{
              fontSize: 18,
              fontWeight: 'bold',
              left: '17%',
              top: '60%'
            }} onPress={() => {
              navigation.navigate('Question2')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
        </View>
    );
};