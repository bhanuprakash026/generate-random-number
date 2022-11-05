// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  getRandomNumber = () => Math.ceil(Math.random() * 100)

  getRandom = () => {
    const randomNum = this.getRandomNumber()
    console.log(randomNum)
    console.log('Clicked')
    this.setState(prevState => ({randomNumber: randomNum}))
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="bg-container">
        <div className="random-container">
          <h1 className="heading">Random Number</h1>
          <p className="para">
            Generate a random number in the range of 0 to 100
          </p>
          <button type="button" className="btn" onClick={this.getRandom}>
            Generate
          </button>
          <p className="result">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator
