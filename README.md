# 🤖 AI Coding Mentor

Your personal AI assistant for conquering coding challenges. This Chrome extension provides on-demand help and explains fundamental concepts for problems on platforms like LeetCode, HackerRank, and Codeforces.

![Project Demo Placeholder](https://via.placeholder.com/720x400.png?text=Add+a+GIF+or+Screenshot+of+your+extension+here!)
*(Feel free to replace the image above with a screenshot or GIF of your extension in action!)*

---

## About The Project

Ever been stuck on a coding problem, wishing you had a mentor to ask for a small hint or a conceptual explanation? This extension aims to be that mentor. It seamlessly integrates into your favorite coding platforms, providing an interactive chat interface to connect you with a powerful AI model that can guide you through tough problems without giving away the solution.

The primary goal of this project is to facilitate learning by providing assistance that focuses on understanding the core concepts behind each problem.

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

* [React.js](https.reactjs.org/)
* [JavaScript (ES6+)](https.ecma-international.org/publications-and-standards/standards/ecma-262/)
* [HTML5 & CSS3](https.en.wikipedia.org/wiki/HTML5)
* [Chrome Extension API (Manifest V3)](https.developer.chrome.com/docs/extensions/mv3/)

---

## 🚀 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

* **Node.js and npm**
    You must have Node.js and npm installed on your machine. You can download them from [nodejs.org](https.nodejs.org/).

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone [https://github.com/your_username/ai-mentor.git](https://github.com/your_username/ai-mentor.git)
    cd ai-mentor
    ```

2.  **Install NPM packages:**
    ```sh
    npm install
    ```

3.  **Add your API Key:**
    * Open the `public/background.js` file.
    * Find the line that says `YOUR_API_KEY` and replace it with your actual secret API key from your AI provider (e.g., OpenAI).
    * **Important:** Be careful not to commit this key to a public repository. For personal use, this is fine, but for a public project, consider using a backend to protect it.

4.  **Build the project:**
    ```sh
    npm run build
    ```
    This will create a `build` folder with the optimized production code.

5.  **Load the Extension in Chrome:**
    * Open Google Chrome and navigate to `chrome://extensions`.
    * Enable **"Developer mode"** using the toggle in the top-right corner.
    * Click the **"Load unpacked"** button.
    * Select the `build` folder from your project directory.
    * The "AI Coding Mentor" extension should now appear in your list of extensions!

---

## Usage

1.  Pin the extension to your Chrome toolbar for easy access.
2.  Navigate to a problem page on a supported platform (e.g., `https://leetcode.com/problems/two-sum/`).
3.  The extension's UI will appear on the page.
4.  Type your question into the input box (e.g., "Can you give me a hint for the brute force approach?" or "Explain what a hash map is.").
5.  Receive a helpful response from your AI mentor!

---

## 🗺️ Roadmap

This is the initial version of the project. Here are some features planned for the future:

* [ ] **User Accounts:** Implement a full login/signup system.
* [ ] **Freemium Model:** Allow guest users a limited number of free queries per day.
* [ ] **Conversation History:** Allow logged-in users to save and view their chat history across devices.
* [ ] **Secure Backend:** Create a dedicated backend with Express.js and Mongoose to:
    * Securely manage all API calls to the AI provider.
    * Handle user authentication and database storage.

See the [open issues](https://github.com/your_username/ai-mentor/issues) for a full list of proposed features (and known issues).

---

## 📄 License

Distributed under the MIT License. See `LICENSE.txt` for more information.

---

## 📧 Contact

Your Name - [@YourTwitterHandle](https://twitter.com/YourTwitterHandle) - your.email@example.com

Project Link: [https://github.com/your_username/ai-mentor](https://github.com/your_username/ai-mentor)