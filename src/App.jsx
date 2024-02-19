import { useState } from "react";
import { Anecdotes } from "./components/Anecdotes";
import { Button, StatisticsLine, SectionHeader } from "./components";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodIncrease = () => {
    setGood((prevGood) => prevGood + 1);
  };
  const handleNeutralIncresase = () =>
    setNeutral((prevNeutral) => prevNeutral + 1);

  const handleBadIncrease = () => setBad((prevBad) => prevBad + 1);

  const calculateTotal = () => good + neutral + bad;

  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
    "The only way to go fast, is to go well.",
  ];

  return (
    <>
      <div>
        <section>
          <SectionHeader title="Given Feedback" />
          <div>
            <Button label="good" handler={handleGoodIncrease} />
            <Button label="neutral" handler={handleNeutralIncresase} />
            <Button label="bad" handler={handleBadIncrease} />
          </div>

          <h3>Statistics</h3>
          <ul>
            <StatisticsLine text="good" value={good} />
            <StatisticsLine text="neutral" value={neutral} />
            <StatisticsLine text="bad" value={bad} />
            <StatisticsLine text="all" value={bad} />
            <StatisticsLine text="bad" value={calculateTotal()} />
          </ul>
        </section>
        <hr />
        <section>
          <SectionHeader title="Anecdotes" />
          <div>
            <Anecdotes anecdotes={anecdotes} />
          </div>
        </section>
      </div>
    </>
  );
};

export default App;
