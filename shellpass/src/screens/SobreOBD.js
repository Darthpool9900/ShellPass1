import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { ArrowCircleLeft, SkipForwardCircle } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";

export default function SobreOBD() { 
    const navigation = useNavigation()
    return(
        <View style={{flex: 1}}> 
            <View style={Bloco1.estilo}>
                <BotaoVolta1 />
            </View>
              <Text style={{fontSize: 38, 
                color: 'black', 
                fontFamily: 'Times New Roman', 
                marginTop: 29,
                marginLeft: 100}}> Sobre o OBD2</Text>
              <ScrollView 
              contentContainerStyle={Bloco1.content}
              onScroll={(event) => console.log(event.nativeEvent)}
              >
             <View>
                <Text style={Bloco1.text}>  O que é o OBD2?    De forma resumida, o sensor OBD2 
                serve para fazer uma varredura no sistema do carro ele é capaz de  diagnosticar problemas e saber 
                informações do automóvel. Através dele, é possível diagnosticar com precisão avarias, 
                inspecionar o veículo rapidamente e reparar
                qualquer dano antes que se torne um grande problema.
                </Text>
                <Text style={Bloco1.text}> OBD é a sigla em inglês para "on-board diagnostics", ou "diagnóstico a bordo". Um OBD fornece aos técnicos acesso a informações do subsistema com o objetivo de monitorar o desempenho e analisar as necessidades de reparo. 
                Ele é o protocolo padrão utilizado na maioria dos veículos comerciais para recuperar informações de diagnóstico de veículos. Essa informação é gerada pelas unidades de controle do motor (ECUs ou módulos de controle do motor) dentro de um veículo. Ele é como o cérebro ou computador do veículo.
                </Text>
                <Text style={Bloco1.text}> Quais as vantagens?   É uma parte importante da telemática e da gestão de frotas. Tornando possível avaliar e gerenciar a integridade e a condução dos veículos.
                Com ele é possível: monitorar as tendências de desgaste e ver quais peças do veículo estão se desgastando mais rapidamente do que outras.
                Diagnosticar instantaneamente os problemas dos veículos antes que eles ocorram, proporcionando uma gestão proativa em vez de reativa.
                E avaliar o comportamento ao volante, velocidade, tempo ocioso e muito mais.

                </Text>
                <Text style={Bloco1.text}> Onde fica  a porta OBD2?   Em um veículo de passageiros comum,
                 você pode encontrar a entrada OBD2 na parte inferior
                  do painel no lado do motorista. Dependendo do tipo de veículo, 
                  a porta pode ter uma configuração de 16, 6 ou 9 pinos.
                </Text>
                <Text style={Bloco1.text}> História do OBD2:        A história do diagnóstico a bordo remonta aos anos 60. Várias organizações estabeleceram as bases para o padrão, incluindo a California Air Resources Board (CARB), a Society of Automotive Engineers (SAE), a International Organization for Standardization (ISO) e a Environmental Protection Agency (EPA).
                </Text>
                <Text style={Bloco1.text}>   * 1968 – O primeiro sistema de computador OBD com capacidade de digitalização foi lançado pela Volkswagen.
                </Text>
                <Text style={Bloco1.text}>   * 1978 – A Datsun lançou um sistema OBD simples com capacidades limitadas não padronizadas.
                </Text>
                <Text style={Bloco1.text}>   * 1994 – O estado da Califórnia determinou que todos os veículos vendidos no estado a partir de 1996 tivessem OBD, como recomendado pela SAE, agora chamado de OBD2. Essas mudanças advém do desejo de realizar testes de emissões transversais. O OBD2 incluiu uma série de códigos de problemas de diagnóstico padronizados 
                </Text>
                <Text style={Bloco1.text}>   * 2001 – O EOBD (a versão europeia do OBD) torna-se obrigatório para todos os veículos a gasolina na União Europeia (UE).
                </Text>
                <Text style={Bloco1.text}>   * 2003 – O EOBD torna-se obrigatório para todos os veículos a diesel na UE.
                </Text>
                <Text style={Bloco1.text}>   * 2008 - A partir de 2008, todos os veículos nos EUA são obrigados a implementar o OBDII por meio de uma Controller Area Network, conforme especificado pela norma ISO 15765-4.
                </Text>
                <Text style={Bloco1.text}>  Você pode acessar as seguintes informações sobre o veículo com o OBD2: 
                </Text>
                <Text style={Bloco1.text}>  - Número de Identificação da Calibração;
                </Text>
                <Text style={Bloco1.text}>  - Número de identificação do veículo;
                </Text>
                <Text style={Bloco1.text}>  - Contador de ignição;
                </Text>
                <Text style={Bloco1.text}>  - Contadores do Sistema de Controle de Emissões;
                </Text>
                <Text style={Bloco1.text}>  - Combustível: Informações sobre o consumo de combustível, incluindo a taxa de consumo de combustível em tempo real e a eficiência do veículo, podem ser obtidas;
                </Text>
                <Text style={Bloco1.text}>  - Parâmetros do Motor: Informações relacionadas ao motor, como a temperatura do líquido de arrefecimento, a velocidade do motor, a pressão do combustível e a taxa de fluxo de ar podem ser acessadas;
                </Text>
                <Text style={Bloco1.text}>  - Códigos de Falha (DTCs): O OBD2 pode ler e fornecer códigos de falha que indicam problemas no veículo. Esses códigos podem ajudar os mecânicos a identificar e solucionar problemas específicos;
                </Text>
                <Text style={Bloco1.text}>  - Além das informações mencionadas acima, o OBD2 pode fornecer uma ampla variedade de dados de sensores específicos do veículo, dependendo do fabricante e do modelo.
                </Text>
                <Text style={Bloco1.text}>  Agora que você já sabe mais sobre o OBD2, continue na próxima tela para saber como configurar o seu. 
                </Text>
                </View>
                <View style={{
                    marginTop: '10%',
                    marginLeft: '70%',
                }}>
                    <TouchableOpacity style={{
                        width: '43%',
                        height: '13%',
                        backgroundColor: '#70126A',
                        borderRadius: 6  
                    }}
                    onPress={() => {
                        navigation.navigate('Config')
                    }}>
                        <SkipForwardCircle size={42} color="white" />
                    </TouchableOpacity>
                </View>
                <View style={{marginTop: '20%'}}></View>
             </ScrollView>
        </View>
    );
};

const Bloco1 = StyleSheet.create({
    container: {
        flex: 1
    },
    estilo: {
        height: '9%',
        backgroundColor: '#FFD700',
        marginTop:1,
    },
    text: {
        fontSize: 22, 
        color: 'black', 
        fontFamily: 'Times New Roman', 
        marginTop: 29,
    },
    content: {
        paddingTop: 20,
        paddingHorizontal: 32
    },
    prox: {
        
    }
});

const BotaoVolta1  = () => {
    const navigation = useNavigation()
    return(
    <View>
        <TouchableOpacity style={{
            marginLeft: 20,
            marginTop: 40,
        }}
        onPress={() => {
            navigation.navigate('Home');
          }}>
            <ArrowCircleLeft size={32} />
        </TouchableOpacity>
    </View>
    );
};