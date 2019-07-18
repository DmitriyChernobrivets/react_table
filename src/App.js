import React, { Component } from "react";
import Toolbar from "./toolbar";
const day = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];
const time = ["9.00", "10.00", "11.00"];
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
    const func = () =>
      val.reduce(el => {
        const values = el.filter(el2 => el2 === 1);
        acc[day[idx]];
      }, {});
    return (
      <div className="App">
        <div>xa</div>
        <table>
          <tr>
            <th>Company</th>
            {day.map(day => (
              <th>{day}</th>
            ))}
          </tr>
          {val.map((el, index) => (
            <tr>
              <td>{time[index]}</td>
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
