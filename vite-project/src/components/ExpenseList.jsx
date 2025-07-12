import React from 'react';

export default function ExpenseList({ expenses }) {
  return (
    <ul className="expense-list">
      {expenses.map((exp) => (
        <li key={exp.id}>
          💸 {exp.title} — ${exp.amount} [{exp.category}] on {exp.date}
        </li>
      ))}
    </ul>
  );
}