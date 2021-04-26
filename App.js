import React from "react";
import {StyleSheet,Text,View}from "react-native"

export default class App extends React.Component{
  state = {
    scoreValue:1,
    userChoice:'',
    botChoice:'',
    Winner:'',
    botScore: 0,
    userScore: 0,
  };

  botDecisionFunction = () =>{
    var botNum = Math.floor(Math.random()*30+1);

    if (botNum >=0 && botNum <= 10){
      this.setState({botChoice:"Rock"});
    }else if (botNum >= 11&& botNum <=20){
      this.setState({botChoice:"Paper"});
    }else {this.setState({botChoice:"Scissors"})}
  }

  render() {
    return(
    <View style={styles.container}> 
      <Text style={styles.Winner}>
        Winner: 
      </Text>
      <View style={styles.gameContainer}>
        <View style={styles.playerContainer}>
          <Text style={styles.player}>
            Player
          </Text>
          <Text style={styles.userscore}>
            Score :
          </Text>

          <View style={styles.gameView}>
            <View style={styles.winBackground}>
              <Text style={styles.userChoice}>
                Choice:
              </Text>
            </View>
            
          </View>

        </View>
      </View>
    </View>
    )
  }

}
const styles = StyleSheet.create({
  container:{
    flex : 1,
    backgroundColor:'#000',
    alignItems:"center",
    justifyContent:"center",
    flexDirection:"row"
  },
  gameContainer:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  playerContainer:{
    margin:10,
    borderWidth:10,
    borderColor:"#fff",
    padding: 20,
    alignItems:"center",
    justifyContent:"center"
  },
  bot:{
    margin:10,
    borderColor:"#fff",
    borderWidth:10,
    padding:20,
    alignItems :"center",
    justifyContent:"center"
  },
  gameView:{
    padding:20
  },
  winBackground:{
    padding:20,
    justifyContent:"center",
    alignContent:"center",
    alignItems:"center",
    backgroundColor:"#fff"
  },
  choiceContainer:{
    paddingVertical:20,
    flexDirection:'row',
    justifyContent:"space-evenly",
    alignItems:"center",
    margin:10
  },
  modalView:{
    margin:20,
    backgroundColor:"#fff",
    borderRadius:20,
    padding:35,
    alignItems:"center",
    shadowColor:"#fff",
    shadowOffset:{width:0,height:2},
    shadowOpacity:0.25,
    shadowRadius:3.84,
    elevation:5
  },
  openButton:{
    backgroundColor:"#F194FF",
    borderRadius:20,
    padding:10,
    elevation:2
},
textStyle:{
  color:"#fff",
  fontWeight:"bold",
  textAlign:"center"
},
modalText:{
  marginBottom:15,
  textAlign:"center",
  color:"#fff"
},
centeredView:{
  justifyContent:"center",
  alignItems:"center",
  marginTop:22,
  backgroundColor:"#fff"
},
Winner :{
  color: "#fff",
  fontWeight: "900",
  fontSize: 30 
},
player:{
  color:"#fff",
  fontWeight:"900",
  fontSize:25
},
userscore:{
  color:"#fff",
  fontWeight:"900",
  fontSize:25
},
userChoice:{
  color: "#000",
  fontWeight: "900",
  fontSize: 20
}
});