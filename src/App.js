import React from "react";
import Card from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import friends from "./friends.json";
import "./App.css";


class App extends React.Component {
  state = {
    friends,
    score: 0,
    highscore: 0
  };

  endGame = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score });
    }
    this.state.friends.forEach(card => {
      card.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  }

  clickCount = id => {
    this.state.friends.find((i, j) => {
      if (i.id === id) {
        if (friends[j].count === 0) {
          friends[j].count = friends[j].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.state.friends.sort(() => Math.random() - 0.5)
          return true;
        } else {
          this.endGame();
        }
      }
    });
  }

  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} highscore={this.state.highscore}>Clicky Game</Header>
        {this.state.friends.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image} />
        ))}
      </Wrapper>
    );
  }
}

export default App;
