const Header = ({ course }) => {
  return <h1>{course}</h1>;
};

const Part = ({ part, exercises }) => {
  return <p>{part} {exercises}</p>;
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((elem) => (
        <Part key={elem.id} part={elem.name} exercises={elem.exercises} />
      ))}
    </>
  );
};

const Total = ({ parts }) => {
  const totalExercises = parts.reduce((acc, part) => acc + part.exercises, 0);
  return <p>Number of exercises {totalExercises}</p>;
};

const App = () => {
  const course = "Half Stack application development";
  const parts = [
    {
      id: 1,
      name: "Fundamentals of React",
      exercises: 10,
    },
    {
      id: 2,
      name: "Using props to pass data",
      exercises: 7,
    },
    {
      id: 3,
      name: "State of a component",
      exercises: 14,
    },
  ];

  return (
    <>
      <Header course={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  );
};

export default App;
