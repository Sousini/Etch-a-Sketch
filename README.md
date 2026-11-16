<div align="center">

# 🎨 Etch-a-Sketch

A browser sketch pad made with **HTML, CSS and vanilla JavaScript**: move your mouse over the grid and draw a pixelated trail.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)
![Status](https://img.shields.io/badge/status-completed-brightgreen?style=for-the-badge)

<!-- Add a screenshot or GIF of your sketch pad here:
<img src="./screenshot.png" alt="Etch-a-Sketch preview" width="420" />
-->

<!-- If you enable GitHub Pages (Settings > Pages), add the live demo link:
[🔗 **Live demo**](https://sousini.github.io/Etch-a-Sketch/)
-->

</div>

---

## ✨ Features

- 🧱 A **16x16 grid** of square divs, created entirely with JavaScript
- 🖱️ **Hover effect**: squares change colour when the mouse passes over them, leaving a pixelated trail like a pen
- 🔘 **New grid button**: asks for the number of squares per side (maximum **100**) and generates a fresh grid
- 📐 The grid always **keeps the same total size** (e.g. 960px), no matter how many squares it has
- 📦 Layout built with **Flexbox**

### ⭐ Extra features

<!-- Tick the ones you implemented: [x] done, [ ] not done -->

- [ ] Random RGB colour for each square on every interaction
- [ ] Progressive darkening: each interaction darkens the square by 10% until it is fully black

---

## 📁 Project structure

```
Etch-a-Sketch/
├── .vscode/
├── index.html    # Page layout: button and grid container
├── styles.css    # Styling and Flexbox grid
├── script.js     # Grid creation, hover effect and new grid logic
└── README.md
```

---

## 🚀 How to run

No installation or build step needed.

```bash
# Clone the repository
git clone https://github.com/Sousini/Etch-a-Sketch.git
cd Etch-a-Sketch

# Open index.html in your browser
```

Or just double-click `index.html`.

---

## 🎮 How to use

1. Move the mouse over the grid to draw.
2. Click the **button** at the top and enter a number from 1 to 100.
3. A new grid with that many squares per side appears, in the same total space.

---

## 🛠️ Built with

- **HTML5**: structure
- **CSS3 (Flexbox)**: grid layout and styling
- **JavaScript (ES6)**: DOM manipulation, events and prompts

---

## 🎯 What I learned

- Creating and removing DOM elements with JavaScript
- Handling mouse events (`mouseenter` / `mouseover`)
- Building layouts with Flexbox
- Keeping a fixed container size while changing the number of children

---

## 👤 Author

**João Sousa**

[![GitHub](https://img.shields.io/badge/GitHub-Sousini-181717?style=for-the-badge&logo=github)](https://github.com/Sousini)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/jo%C3%A3o-sousa-63ab4537a/)
