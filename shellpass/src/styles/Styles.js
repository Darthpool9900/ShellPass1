import { StyleSheet, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default StyleSheet.create({
    Corpo: {
        height: '30%',
        backgroundColor: '#FFD700'
    },
    Body: {
        width: '100%',
        height: '100%',
        display: 'flex'
    },
    container: {
        height: 8,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },
    left: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-start',
        padding: '9%'
    },
    right: {
        width: '50%',
        display: 'flex',
        alignItems: 'flex-end',
        padding: '9%'
    },
    Card: {
        width: '70%',
        height: '88%',
        backgroundColor: '#70126A',
        position: 'absolute',
        bottom: '-50%',
        left: '15%',
        borderRadius: '8%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    inputCard: {
        backgroundColor: 'white',
        width: '80%',
        height: '16%',
        marginTop: '7%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        textAlign: 'center'
    },
    Points: {
        left:'-1%',
        marginTop: '-6%',
        backgroundColor: 'white',
        borderColor: 'black',
        borderRadius: '5%',
        width: '80%',
        height: '50%',
        ...Platform.select({
            android: {
            elevation: 5, 
            },
            ios: {
            shadowColor: 'rgba(0, 0, 0, 2)',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.7,
            shadowRadius: 3,
            },
        })
    },
    Menu: {
        flexDirection: "column",
        marginLeft: 30,
        marginTop: 67,
        color: '#414141',
        height: 32,
    },
    MenuButtons: {
        flexDirection: "column",
        marginLeft: 30,
        marginTop: 27,
        color: '#414141',
        height: 32,
    },
    yellowBackground: {
        height: '22%',
        backgroundColor: '#FFD700',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
      },
    yellowText: {
        fontSize: 24,
        textAlign: 'center',
    },
    content: {
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center',
      },
      optionFrame: {
        borderWidth: 16,
        borderColor: 'purple',
        borderRadius: 20,
        marginHorizontal: 20,
        marginVertical: 20,
      },
      optionContainer: {
        marginVertical: 12,
      },
      option: {
        marginBottom: 12,
        paddingHorizontal: 30,
        paddingVertical: 20,
        backgroundColor: '#FAEB9E',
        borderRadius: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 20,
      },
      selectedOption: {
        backgroundColor: 'FFD700',
      },
      selectedOptionText: {
        color: 'black',
      },
      optionText: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      transitionContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'white',
        zIndex: 1,
      },
      transitionTab: {
        position: 'absolute',
        bottom: 400,
        left: 0,
        width: windowWidth,
        backgroundColor: 'white',
        padding: 10,
        borderTopRightRadius: 1,
        borderTopLeftRadius: 1,
        elevation: 10,
        justifyContent: 'center', 
      },
      transitionTabInner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center', 
        paddingHorizontal:  40,
      },
      transitionText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
      },
      backButton: {
        position: 'absolute',
        bottom: 1,
        left: 10,
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 8,
        flexDirection: 'row',
        alignItems: 'center',
      },
      containerQ: {
        flex: 1,
        backgroundColor: '#f0f0f0',
      },
      ButtonBack: {
        marginTop: '10%',
        marginLeft: '-83%'
      },
    topYellow: {
        height: '15%',
        width: '100%',
        backgroundColor: '#FFD700',
        marginTop: '-4%'
    },
    ButtonBB: {
        marginTop: '-10%',
        marginLeft: '10%'
      },
    QrcodeText: {
        left: '30%',
        marginTop: '15%',
        fontWeight: 'bold',
        fontSize: 28,
        color: '#484D50',
    },
    CardCode: {
        width: '90%',
        height: '105%',
        backgroundColor: '#70126A',
        position: 'absolute',
        bottom: '-50%',
        left: '5%',
        borderRadius: '5%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    CCtext: {
        color: 'white',
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: '5%'
    },
    InText: {
        backgroundColor: 'white',
        marginTop: '7%',
        height: '12%',
        width: '40%',
        borderColor: 'grey',
    },
    CointeinerQR: {
        top: '2500%'
    },
    containerDD: {
        padding: 16,
    },
    dropdown: {
        height: 50,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 8,
        paddingHorizontal: 8,
      },
      icon: {
        marginRight: 5,
      },
      label: {
        position: 'absolute',
        backgroundColor: '#D3D3D3',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },
    containerF5: {
      backgroundColor: '#484D50',
      width: '100%',
      height: '100%',
      display: 'flex'
    },
    BlocoDesconto : {
      width: '70%',
      height: 110,
      backgroundColor: 'white',
      position: 'absolute',
      bottom: '45%',
      left: '15%',
      borderRadius: '8%',
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
  },
  TextDiscount: {
    color: '#70126A',
    fontSize: 23,
    fontWeight: 'bold',
    marginTop: '6%'
  },
  InputDisconut: {
    backgroundColor: '#EBEBEB',
    width: '80%',
    height: 35,
    marginTop: '7%',
    display: 'flex',
    left: '-8%',
    borderColor: 'black',
    borderWidth: 1
  },
  containerLogin : {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputLogin: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    top: '350%',
    paddingLeft: 10,
    borderRadius: 5
  },
  Logininput: {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    top: '370%',
    paddingLeft: 10,
    borderRadius: 5
  },
  inputsenha : {
    width: 200,
    height: 40,
    borderColor: 'black',
    borderWidth: 2,
    top: '390%',
    paddingLeft: 10,
    borderRadius: 5
  },
  cadastro: {
    top: '400%',
    left: '20%',
    width: '30%',
    height: '30%',
    backgroundColor: '#70126A',
    borderRadius: 10
  },
  TextMenu: {
    fontFamily: 'System',
    fontWeight: 'bold',
    fontSize: 30,
    top: '260%',
    left: '30%',
  },
  FundoBranco: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  FundoAmarelo: {
    backgroundColor: '#FFD700',
    width: '100%',
    height: '25%',
  },
  styleText: {
    fontSize: 25,
    color: '#808080',
    alignItems: 'center',
    marginTop: 50,
    marginLeft: 80,
    fontWeight: 'bold'
  },
  BordaLogoCarro:{
    backgroundColor:'#FFF', 
    marginLeft:'4%', 
    marginTop:'10%',
    borderColor:'#70126A', 
    borderWidth:5, 
    borderRadius:500, 
    width:125, 
    height:125,
  },
  BordaLogoFerramenta:{
    backgroundColor:'#FFF', 
    marginLeft:'4%', 
    marginTop:'15%',
    borderColor:'#70126A', 
    borderWidth:5, 
    borderRadius:500, 
    width:125, 
    height:125,
  },
  containerMap: {
    flex: 1
},
estilo: {
    height: '9%',
    backgroundColor: '#FFD700',
    marginTop:1,
},
map: {
    width: '100%',
    height: '100%',
  },
searchContainer: {
    position: 'absolute',
    width: '90%',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 4,
    elevation: 4,
    padding: 8,
    borderRadius: 8,
    top: 100,
    right: 2
},
input:{
    borderColor: '#888',
    borderWidth: 1,
},
Manual: {
  ...Platform.select({
      android: {
      elevation: 5, 
      },
      ios: {
      shadowColor: 'rgba(0, 0, 0, 2)',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.7,
      shadowRadius: 3,
      },
  }),
  marginTop: '10%',
  width: '80%',
  height: '10%',
  left: '10%',
  backgroundColor: 'white',
  borderColor: 'black',
  borderRadius: 5,
  },
  Sensor: {
    ...Platform.select({
        android: {
        elevation: 5, 
        },
        ios: {
        shadowColor: 'rgba(0, 0, 0, 2)',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.7,
        shadowRadius: 3,
        },
    }),
    marginTop: '15%',
    width: '80%',
    height: '10%',
    left: '10%',
    backgroundColor: 'white',
    borderColor: 'black',
    borderRadius: 5,
  },
  phoneFrame: {
    top: '15%',
    left: '12%',
    backgroundColor: '#fff', 
    borderWidth: 10,
    borderColor: '#70126A', 
    borderRadius: 20,
    padding: 20,
    width: 300,
    height: 500,
  },
  title: {
    color: '#70126A', 
    fontSize: 30, 
    fontWeight: 'bold', 
    top: '10%',
  },
  menuOption: {
    backgroundColor: '#FFD400',
    fontSize: 20, 
    leftt: '50%',
    height: '20%',
    width: '50%',
    top: '60%',
    left: '25%%',
    borderRadius: 8,

  },
  menuOption2: {
    backgroundColor: '#FFD400',
    fontSize: 20, 
    leftt: '50%',
    height: '20%',
    width: '50%',
    top: '90%',
    left: '25%',
    borderRadius: 8,

  },
  selectedOption: {
    backgroundColor: '#70126A', 
    color: '#d3d3d3', 
    height: '20%',
    width: '50%'
  },
  botaoAvancar: {
    backgroundColor: '#FFD400',
    fontSize: 20, 
    leftt: '50%',
    height: '10%',
    width: '40%',
    top: '55%',
    left: '30%',
    borderRadius: 8,
  },
  Phone: {
    top: '15%',
    left: '12%',
    backgroundColor: '#fff', 
    borderWidth: 10,
    borderColor: '#70126A', 
    borderRadius: 20,
    padding: 20,
    width: 300,
    height: 600,
  },
  option4: {
    backgroundColor: '#FFD400',
    leftt: '50%',
    height: '35%',
    width: '50%',
    marginTop: '-20%',
    left: '30%',
    borderRadius: 8,
  },
  option2: {
    backgroundColor: '#FFD400',
    leftt: '50%',
    height: '40%',
    width: '50%',
    marginTop: '-46%',
    left: '30%',
    borderRadius: 8,
  },
  option3: {
    backgroundColor: '#FFD400',
    leftt: '50%',
    height: '40%',
    width: '50%',
    marginTop: '-46%',
    left: '30%',
    borderRadius: 8,
  },
  option1: {
    backgroundColor: '#FFD400',
    leftt: '50%',
    height: '23%',
    width: '50%',
    marginTop: '30%',
    left: '30%',
    borderRadius: 8,
  },
  optionT: {
    fontSize: 16,
    fontWeight: 'bold',
    top: '15%'
  },
  next: {
    backgroundColor: '#FFD400',
    fontSize: 20, 
    leftt: '50%',
    height: '10%',
    width: '40%',
    top: '-10%',
    left: '30%',
    borderRadius: 8,
  },
  next2: {
    backgroundColor: '#70126A', 
    color: '#d3d3d3', 
    height: '40%',
    width: '52%',
  },
  containerPB: {
    width: 200,
    height: 56,
    backgroundColor: '#ffe188',
    position: 'absolute',
    bottom: 32,
    alignSelf: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
    flexDirection: 'row'
  },
  value: {
    fontWeight: 'bold',
  },
  tracker: {
    flex: 1,
    height: 3,
    borderRadius: 3,
    backgroundColor: 'white'
  },
  progress: {
    height: 3,
    backgroundColor: '#70126A'
  }
}); 