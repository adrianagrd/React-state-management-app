import { StatisticsLine } from "./StatisticsLine";

export const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  if (total === 0) {
    return <p>No feedback given</p>;
  }

  return (
    <table>
      <ul>
        <li>
          <StatisticsLine text="good" value={good} />
        </li>
        <li>
          <StatisticsLine text="neutral" value={neutral} />
        </li>
        <li>
          <StatisticsLine text="bad" value={bad} />
        </li>
        <li>
          <StatisticsLine text="all" value={total} />
        </li>
        <li>
          <StatisticsLine text="average" value={average} />
        </li>
        <li>
          <StatisticsLine text="positive" value={positive + " %"} />
        </li>
      </ul>
    </table>
  );
};
