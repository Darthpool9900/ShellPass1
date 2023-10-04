import { View, Text, TouchableOpacity } from "react-native";
import Styles from "../../styles/Styles";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";

export default function Question5() {
    const [selectedOption, setSelectedOption] = useState(null);
    const handleOptionSelect = (option) => {
        setSelectedOption(option);
      };
    const navigation = useNavigation();
    return(
        <View style={Styles.Phone}>
            <Text style={Styles.title}>
                Qual a última vez que trocou o filtro de ar? 
            </Text>
            <View>
                <TouchableOpacity style={Styles.option1}>
                    <Text style={Styles.optionT}>
                        1 - 3 semanas atrás
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option4}>
                    <Text style={Styles.optionT}>
                        4 - 5 semanas atrás
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option2}>
                    <Text style={Styles.optionT}>
                        2 - 5 meses atrás
                    </Text>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity style={Styles.option3}>
                    <Text style={Styles.optionT}>
                        + 6 meses atrás
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
              navigation.navigate('Question6')
            }}>
              Avançar
            </Text>
          </TouchableOpacity>
      </View>
        </View>
    );
};