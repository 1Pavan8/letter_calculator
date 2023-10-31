// Write your code here.

import './index.css'
import {Component} from 'react'

class LettersCalculator extends Component {
  state = {count: 0}

  lc = event => {
    const val = event.target.value
    const alphabetChars = val.match(/[a-zA-Z]/g)

    this.setState({count: alphabetChars ? alphabetChars.length : 0})
  }

  render() {
    const {count} = this.state
    return (
      <div className="main">
        <div className="subc">
          <h1>Calculate The Letters You Enter</h1>
          <label htmlFor="inputtext">Enter the phrase</label>
          <input
            id="inputtext"
            className="inp"
            type="text"
            onChange={this.lc}
            placeholder="Enter the phrase"
          />
          <div className="btn">
            <p>No.of letters: {count}</p>
          </div>
        </div>
        <img
          className="img"
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letters calculator"
        />
      </div>
    )
  }
}

export default LettersCalculator
