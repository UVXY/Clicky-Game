import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";
import Nav from "./components/Nav";


class App extends Component {
  
  state = {
    friends
  };

  removeFriend = id => {
    
    const friends = this.state.friends.filter(friend => friend.id !== id);

    this.setState({ friends });
  };

  render() {
    return (
      
      <Wrapper>
        <Nav/>
        <Title>Click Game</Title>
        {this.state.friends.map(friend => (
          <Card
            removeFriend={this.removeFriend}
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
