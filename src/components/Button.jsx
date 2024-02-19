export const Button = ({ label, handler }) => {
  return <button onClick={handler}>{label}</button>;
};
