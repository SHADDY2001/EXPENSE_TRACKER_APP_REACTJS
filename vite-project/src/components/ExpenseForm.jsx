import React, { useState } from "react";

export default function ExpenseForm({ onAdd }) {
  const [formData, setFormData] = useState({
    title: "",
    amount: "",
    category: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.amount || !formData.date || !formData.category) {
      alert("Please fill all fields.");
      return;
    }

    const newExpense = {
      ...formData,
      id: Date.now(), // helps React track lists
    };

    onAdd(newExpense);
    setFormData({ title: "", amount: "", category: "", date: "" });
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: "1rem" }}>
      <input
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Title"
        required
      />
      <input
        name="amount"
        value={formData.amount}
        onChange={handleChange}
        placeholder="Amount"
        type="number"
        required
      />
      <input
        name="date"
        value={formData.date}
        onChange={handleChange}
        type="date"
        required
      />
      <input
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}
