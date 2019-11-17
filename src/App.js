import React from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import friends from "./friends.json";
import "./App.css";

class App extends React.Component {
  state = {
    friends: friends
  };

  removeAThing = id => this.setState({ friends: this.state.friends.filter(item => item.id !== id) });

  render() {
    return (
      <Wrapper>
        <h1 className="title">Friends List</h1>
        {this.state.friends.map(item =>
          <FriendCard
            removeItem={this.removeAThing}
            name={item.name}
            image={item.image}
            occupation={item.occupation}
            location={item.location}
          />)}
      </Wrapper>);
  }
}

export default App;
