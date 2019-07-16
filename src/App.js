import React, { Component } from "react";
import Toolbar from "./toolbar";
const asd = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
class App extends Component {
  state = {
    val: [
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0]
    ]
  };
  clicked = (id1, id2) => () => {
    this.setState(prevState => {
      const newState = prevState.val;
      newState[id1][id2] = prevState.val[id1][id2] === 1 ? 0 : 1;
      return {
        val: [...newState]
      };
    });
  };
  render() {
    const { val } = this.state;

    return (
      <div className="App">
        <table>
          <tr>
            <th>Company</th>
            <th>Пн</th>
            <th>Вт</th>
            <th>Ср</th>
            <th>Чт</th>
            <th>Пт</th>
            <th>Сб</th>
            <th>Вс</th>
          </tr>
          {val.map((el, index) => (
            <tr>
              <td>{9 + index + "." + "00"}</td>
              {el.map((el2, index2) => (
                <td onClick={this.clicked(index, index2)}>{el2}</td>
              ))}
            </tr>
          ))}
        </table>
      </div>
    );
  }
}

export default App;
