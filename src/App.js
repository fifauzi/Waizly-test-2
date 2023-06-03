import React from 'react';

class RatioCalculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      n: 0,
      arr: [],
      ratios: {
        positiveRatio: 0,
        negativeRatio: 0,
        zeroRatio: 0
      }
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  calculateRatios = () => {
    const { n, arr } = this.state;

    const arrIntegers = arr.split(' ').map(Number); // Split the string input and convert to an array of integers

    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Count the number of positive, negative, and zero elements
    arrIntegers.forEach((num) => {
      if (num > 0) {
        positiveCount += 1;
      } else if (num < 0) {
        negativeCount += 1;
      } else {
        zeroCount += 1;
      }
    });

    // Calculate the ratios
    const positiveRatio = positiveCount / n;
    const negativeRatio = negativeCount / n;
    const zeroRatio = zeroCount / n;

    const ratios = {
      positiveRatio,
      negativeRatio,
      zeroRatio
    };

    this.setState({ ratios });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.calculateRatios();
  };

  render() {
    const { n, arr, ratios } = this.state;

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Size of the array (n):
            <input
              type="number"
              name="n"
              value={n}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <label>
            Array elements:
            <input
              type="text"
              name="arr"
              value={arr}
              onChange={this.handleInputChange}
            />
          </label>
          <br />
          <button type="submit">Calculate Ratios</button>
        </form>
        <br />
        <p>{ratios.positiveRatio.toFixed(6)}</p>
        <p>{ratios.negativeRatio.toFixed(6)}</p>
        <p>{ratios.zeroRatio.toFixed(6)}</p>
      </div>
    );
  }
}

export default RatioCalculator;
