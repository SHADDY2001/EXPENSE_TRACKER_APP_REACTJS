import React, { useState, useEffect } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import Filter from './components/Filter';
import Chart from './components/Chart';
import ThemeToggle from './components/ThemeToggle';
import './App.css';

export default function App() {
  const [expenses, setExpenses] = useState([]);
  const [filter, setFilter] = useState({ month: '', category: '' });
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('expenses'));
    if (data) setExpenses(data);
  }, []);

  useEffect(() => {
    localStorage.setItem('expenses', JSON.stringify(expenses));
  }, [expenses]);

  const handleAdd = (exp) => setExpenses([exp, ...expenses]);
  const handleFilter = (key, val) => setFilter({ ...filter, [key]: val });

  const filteredExpenses = expenses.filter((exp) => {
    const matchesMonth = filter.month ? exp.date.startsWith(filter.month) : true;
    const matchesCategory = filter.category ? exp.category === filter.category : true;
    return matchesMonth && matchesCategory;
  });

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      <h1>💰 Personal Expense Tracker</h1>
      <ThemeToggle darkMode={darkMode} toggle={() => setDarkMode(!darkMode)} />
      <ExpenseForm onAdd={handleAdd} />
      <Filter onFilter={handleFilter} />
      <ExpenseList expenses={filteredExpenses} />
      <Chart expenses={filteredExpenses} />
    </div>
  );
}
