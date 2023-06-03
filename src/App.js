// Problem Solving Basic - Test 2
import React from 'react';

class RatioCalculator extends React.Component {
  calculateRatios = (arr) => {
    const n = arr.length;
    let positiveCount = 0;
    let negativeCount = 0;
    let zeroCount = 0;

    // Count the number of positive, negative, and zero elements
    arr.forEach((num) => {
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

    return {
      positiveRatio,
      negativeRatio,
      zeroRatio
    };
  };

  render() {
    const arr = [2, 2, -1, -2, 0];
    const ratios = this.calculateRatios(arr);

    return (
      <div>
        <p>{ratios.positiveRatio.toFixed(6)}</p>
        <p>{ratios.negativeRatio.toFixed(6)}</p>
        <p>{ratios.zeroRatio.toFixed(6)}</p>
      </div>
    );
  }
}

export default RatioCalculator;
