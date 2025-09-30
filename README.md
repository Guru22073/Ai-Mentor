# 🤖 AI Coding Mentor

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Chrome Extension](https://img.shields.io/badge/Chrome%20Extension-Manifest%20V3-blue.svg)](https://developer.chrome.com/docs/extensions/mv3/)
[![React](https://img.shields.io/badge/React-19.1.1-61DAFB.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.0-646CFF.svg)](https://vitejs.dev/)

Your personal AI assistant for conquering coding challenges. This Chrome extension provides intelligent, on-demand assistance and explains fundamental programming concepts for problems on platforms like LeetCode, HackerRank, and Codeforces.

## Demo:
![Demo of the Extension on LeetCode.com/problems/*](public/demo.mp4)

## 📋 Table of Contents

- [🤖 AI Coding Mentor](#-ai-coding-mentor)
  - [Demo:](#demo)
  - [📋 Table of Contents](#-table-of-contents)
  - [📖 About The Project](#-about-the-project)
    - [🎯 Key Objectives](#-key-objectives)
  - [✨ Features](#-features)
  - [🛠️ Built With](#️-built-with)
  - [💻 Usage](#-usage)
  - [🛠️ Development](#️-development)
    - [Project Structure](#project-structure)
  - [📧 Contact](#-contact)
  - [🙏 Acknowledgments](#-acknowledgments)

![AI Coding Mentor Demo](https://via.placeholder.com/800x450.png?text=AI+Coding+Mentor+Extension+Demo)

> 🚀 **Coming Soon**: Live demo GIF showcasing the extension in action!

---

## 📖 About The Project

AI Coding Mentor is a Chrome extension designed to enhance your competitive programming and coding practice experience. Instead of providing direct solutions, it acts as an intelligent coding companion that:

- **Provides contextual hints** when you're stuck on a problem
- **Explains complex algorithms and data structures** in simple terms  
- **Guides you through problem-solving approaches** without spoiling the solution
- **Adapts to your learning pace** with personalized assistance

The extension seamlessly integrates with popular coding platforms, analyzing the current problem context to provide relevant, educational guidance that promotes learning and skill development.

### 🎯 Key Objectives

- **Learning-focused assistance** rather than direct solution provision
- **Platform-agnostic design** supporting multiple coding websites
- **Accessible and intuitive** user interface

---

## ✨ Features

* **On-Page Assistance:** The mentor's UI is injected directly into problem pages on supported websites.
* **Interactive Chat Interface:** Ask questions, request hints, or ask for explanations of fundamental concepts in a simple and intuitive chat window.
* **Context-Aware Help:** The AI can be prompted with details about the specific problem you are working on.
* **Supports Major Platforms:** Designed to work with:
    * LeetCode
    * HackerRank
    * Codeforces

---

## 🛠️ Built With

* [React.js](https://reactjs.org/) - Frontend library for building user interfaces
* [Vite](https://vitejs.dev/) - Build tool and development server
* [Chrome Extension API (Manifest V3)](https://developer.chrome.com/docs/extensions/mv3/) - Extension platform
* [Lucide React](https://lucide.dev/) - Icon library
* [JavaScript (ES6+)](https://developer.mozilla.org/en-US/docs/Web/JavaScript) - Programming language

---

## 💻 Usage

1. **Install and pin the extension** to your Chrome toolbar for easy access
2. **Navigate to a coding problem** on any supported platform:
   - LeetCode: `https://leetcode.com/problems/{problem-name}/`
   - HackerRank: `https://www.hackerrank.com/challenges/{challenge-name}/`
   - Codeforces: `https://codeforces.com/problemset/problem/{contest}/{problem}/`
3. **Access the AI mentor** through the extension popup or injected interface
4. **Ask questions** such as:
   - "Can you give me a hint for the optimal approach?"
   - "Explain the time complexity of this algorithm"
   - "What data structure should I use here?"
5. **Receive intelligent guidance** that helps you learn without giving away the complete solution

---

## 🛠️ Development

### Project Structure

```
Ai-Mentor/
├── src/
│   ├── components/        # React components
│   ├── styles/           # CSS stylesheets
│   ├── contexts/         # React contexts
│   ├── background.js     # Extension service worker
│   ├── content.js        # Content script for web pages
│   └── main.jsx         # React app entry point
├── public/              # Static assets
├── manifest.json        # Extension manifest
└── vite.config.js      # Vite configuration
```

## 📧 Contact

**Guru22073** - [@Guru22073](https://github.com/Guru22073)

**Project Link:** [https://github.com/Guru22073/Ai-Mentor](https://github.com/Guru22073/Ai-Mentor)

## 🙏 Acknowledgments

* [React.js](https://reactjs.org/) for the excellent frontend framework
* [Chrome Extensions](https://developer.chrome.com/docs/extensions/) for the platform
* [Lucide](https://lucide.dev/) for beautiful icons
* All the coding platforms that inspire continuous learning