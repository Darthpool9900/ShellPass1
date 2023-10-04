import { View, Text } from "react-native";
import Styles from "../styles/Styles";
import { useState } from "react";
import { Dropdown } from "react-native-element-dropdown";
import { Cardholder } from "phosphor-react-native";


const data = [
    {label: 'Selecionar...', value: '1'},
    {label: 'Pix', value: '2'},
    {label: 'Cartão', value: '3'},
    {label: 'Dinheiro', value: '4'},
];
export default function Payment() {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
      if (value || isFocus) {
        return (
          <Text style={[Styles.label, isFocus && { color: '#70126A' }]}>
            Forma de pagamento
          </Text>
        );
      }
      return null;
    };
    return(
        <View style={{marginTop: '90%'}}>
            <View style={Styles.containerDD}>
            {renderLabel()}
        <Dropdown
          style={[Styles.dropdown, isFocus && { borderColor: '#70126A' }]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={Styles.inputSearchStyle}
          iconStyle={Styles.iconStyle}
          data={data}
          maxHeight={300}
          labelField="label"
          valueField="value"
          placeholder={!isFocus ? 'Escolha o pagamento' : '...'}
          value={value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={item => {
            setValue(item.value);
            setIsFocus(false);
          }}
          renderLeftIcon={() => (
            < Cardholder
              style={Styles.icon}
              color={isFocus ? '#70126A' : 'black'}
              name="Safety"
              size={20}
            />
          )}
        />
            </View>
        </View>
    );
};
