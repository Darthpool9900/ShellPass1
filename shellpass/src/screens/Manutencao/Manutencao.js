import Perola from '../../components/Perola';
import Styles from '../../styles/Styles';
import Carro from '../../components/Carro';
import Ferramenta from '../../components/Ferramenta';
import { View, SafeAreaView, ScrollView, Text } from 'react-native';
import ButtonBB from '../../components/ButtonBB';

export default function Manutencao() {
  return (
    <View style={Styles.FundoBranco}>
      <SafeAreaView style={Styles.FundoAmarelo}>
        <Title />
        <ButtonBB />
      </SafeAreaView>

      <ScrollView style = {{flexDirection:'column'}}>
        <Perola />
        <Carro />
        <Ferramenta/>
      </ScrollView>

    </View>

  );
};

const Title = () => {
    return(
        <View>
            <Text style ={Styles.styleText}>Manutenção Preventiva</Text>
        </View>
    );
};