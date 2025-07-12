import React from 'react';

export default function Filter({ onFilter }) {
  return (
    <div className="filter">
      <select onChange={(e) => onFilter('month', e.target.value)}>
        <option value="">All Months</option>
        <option value="2025-07">July 2025</option>
        <option value="2025-08">August 2025</option>
      </select>
      <select onChange={(e) => onFilter('category', e.target.value)}>
        <option value="">All Categories</option>
        <option value="Food">Food</option>
        <option value="Transport">Transport</option>
        <option value="Shopping">Shopping</option>
      </select>
    </div>
  );
}