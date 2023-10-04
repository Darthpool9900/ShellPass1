import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../../styles/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Question16() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    const navigation = useNavigation();
    return(
        <View style={Styles.Phone}>
            <Text style={Styles.title}>
                Qual a última troca dos cabos de ignição e velas? 
            </Text>
            <View>
                <TouchableOpacity style={Styles.option1}>
                    <Text style={Styles.optionT}>
                        Menos de 6 meses
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option4}>
                    <Text style={Styles.optionT}>
                        2 - 4 anos
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option2}>
                    <Text style={Styles.optionT}>
                        5 - 7 anos
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option3}>
                    <Text style={Styles.optionT}>
                        + 8 anos
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
              navigation.navigate('Home')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
        </View>
    );
};