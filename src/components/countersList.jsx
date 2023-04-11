import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ненужная вещь" },
    { id: 1, value: 2, name: "Ложка" },
    { id: 2, value: 0, name: "Тарелка" },
    { id: 3, value: 0, name: "Вилка" },
    { id: 4, value: 0, name: "Набор минималиста" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    setCounters(counters.filter((count) => count.id !== id));
  };

  const handleReset = () => {
    setCounters(initialState);
  };

  const handleIncrement = (id) => {
    const countIncrement = counters.map((count) =>
      count.id === id ? { ...count, value: (count.value += 1) } : count
    );
    setCounters(countIncrement);
  };

  const handleDecrement = (id) => {
    const countDecrement = counters.map((count) =>
      count.id === id ? { ...count, value: (count.value -= 1) } : count
    );
    setCounters(countDecrement);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Reset
      </button>
    </>
  );
};

export default CountersList;
