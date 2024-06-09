import { useState } from "react";
import PropTypes from 'prop-types';

const Button = ({ onClick, text }) => {
  return <button onClick={onClick}>{text}</button>;
};

const StatisticLine = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;

  if (all === 0) {
    return (
      <>
        <h2>Statistics</h2>
        <p>No feedback given</p>
      </>
    );
  }

  const average = all / 3;
  const positive = (good / all) * 100;

  return (
    <>
      <h2>Statistics</h2>
      <StatisticLine text="Good:" value={good} />
      <StatisticLine text="Neutral:" value={neutral} />
      <StatisticLine text="Bad:" value={bad} />
      <StatisticLine text="All:" value={all} />
      <StatisticLine text="Average:" value={average.toFixed(2)} />
      <StatisticLine text="Positive:" value={`${positive.toFixed(2)} %`} />
    </>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(good + 1);
  const handleNeutralClick = () => setNeutral(neutral + 1);
  const handleBadClick = () => setBad(bad + 1);

  return (
    <>
      <h2>Give feedback</h2>
      <Button onClick={handleGoodClick} text="Good" />
      <Button onClick={handleNeutralClick} text="Neutral" />
      <Button onClick={handleBadClick} text="Bad" />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
}

StatisticLine.propTypes = {
  text: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]).isRequired,
}

export default App;
