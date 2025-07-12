
# 💸 Expense Tracker App



---



## 📌 Features

- ✅ Add new expenses with title, amount, category, and date
- ✅ View list of all expenses
- ✅ Filter expenses by category or date
- ✅ Visualize spending using a dynamic Pie Chart
- ✅ Responsive design for desktop and mobile
- ✅ Clean, modular React component structure

---

## 🛠 Tech Stack

| Technology        | Description                       |
|------------------|-----------------------------------|
| **React.js**      | Frontend library                  |
| **Vite**          | Fast build tool for React         |
| **Chart.js**      | Chart rendering engine            |
| **react-chartjs-2** | React wrapper for Chart.js       |
| **CSS / Tailwind** | UI styling (optional/customizable) |

---

## 📁 Folder Structure

```

vite-project/
├── public/
├── src/
│   ├── components/
│   │   ├── Chart.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseList.jsx
│   │   └── Filter.jsx
│   ├── App.jsx
│   ├── main.jsx
├── package.json
└── vite.config.js

````

---

## 🖼️ Screenshots

> _(Add actual screenshots if available)_

| Dashboard View       | Pie Chart View       |
|----------------------|----------------------|
| ![screenshot1](path/to/screenshot1.png) | ![screenshot2](path/to/screenshot2.png) |

---

## ⚙️ Installation

### Prerequisites:
- Node.js and npm installed

### Steps:

```bash
# 1. Clone the repository
git clone https://github.com/your-username/expense-tracker-app.git

# 2. Navigate to the project folder
cd expense-tracker-app

# 3. Install dependencies
npm install

# 4. Start development server
npm run dev
````

Open browser at (http://localhost:5173)

---

## 📊 Sample Chart Setup (Pie Chart)

```js
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Food", "Travel", "Bills"],
  datasets: [{
    data: [300, 200, 100],
    backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
  }],
};

<Pie data={data} />;
```

---

## 🧠 Learnings

* React component structuring & state management
* Data visualization using Chart.js
* Form handling and controlled inputs
* Conditional rendering and filtering logic
* Integration with Vite for fast development

---

## ✅ To-Do (Future Enhancements)

* 🔒 Add user authentication (Login/Signup)
* 📦 Integrate with backend (Firebase or Node.js + MongoDB)
* ☁️ Deploy to Netlify or Vercel
* 📱 Add mobile-first responsive design
* 🔄 Add data persistence (localStorage or database)

---

## 🧑‍💻 Author
 ## MUHAMMAD SHADAB AHMED

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## ⭐ Show Your Support

If you like this project:

🌟 Star it
🍴 Fork it
🗣️ Share it

```
