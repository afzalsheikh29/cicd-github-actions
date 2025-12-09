# 🚀 Node.js CI/CD Demo App

This is a UI-based Node.js web application built to learn and demonstrate a full CI/CD workflow using GitHub Actions and Docker Hub.

Every time new changes are pushed to the `main` branch, the pipeline automatically:
1️⃣ Installs dependencies  
2️⃣ Runs tests  
3️⃣ Builds a Docker image  
4️⃣ Pushes the new image to Docker Hub 🎯

---

## ✨ Features

✔ Interactive Frontend UI (HTML, CSS, JS)  
✔ Express.js backend with API + healthcheck  
✔ Docker containerization  
✔ Automated GitHub Actions CI/CD pipeline  
✔ Docker image auto pushed to Docker Hub

---

## 🗂️ Project Structure

cicd-github-actions/
├─ public/
│ ├─ index.html
│ ├─ style.css
│ └─ app.js
├─ server.js
├─ Dockerfile
├─ package.json
└─ .github/workflows/main.yml

yaml
Copy code

---

## 🛠️ Tech Stack

| Layer           | Tech Used              |
| --------------- | ---------------------- |
| UI              | HTML, CSS, JavaScript  |
| Backend         | Node.js + Express      |
| CI/CD           | GitHub Actions         |
| Container       | Docker                 |
| Registry        | Docker Hub             |
| Branch Strategy | Main branch deployment |

---

## ▶️ Run the App Locally

```bash
npm install
npm start
App runs on 👉 http://localhost:3000
```
