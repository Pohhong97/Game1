import React from "react";
import { SafeAreaViewComponent, StyleSheet,Text,View}from "react-native"

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

  render(){
    return(
    <View >
      <Text>hello</Text>
    </View>
    )
  }

}