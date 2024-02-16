import { useState } from "react";

export const Anecdotes = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState(new Array(anecdotes.length).fill(0));

  const handleVoteClick = () => {
    const newVotes = [...votes];
    newVotes[selected]++;
    setVotes(newVotes);
  };

  const handleNextClickAnecdote = () => {
    const random = Math.floor(Math.random() * anecdotes.length);
    setSelected(random);
  };

  const moreVotedAnecdote = votes.indexOf(Math.max(...votes));

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes[selected]}
      <p>Have {votes[selected]} total votes</p>
      <button onClick={handleVoteClick}>Vote</button>
      <br />
      <button onClick={handleNextClickAnecdote}>Next anecdote</button>
      <br />
      <h3>Anecdote with more votes: </h3>
      {anecdotes[moreVotedAnecdote]}
      <p>Has {votes[moreVotedAnecdote]} votes</p>
    </div>
  );
};
