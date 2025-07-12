# 🎙️ SpeakIT — Text to Speech Converter using AWS Polly

**SpeakIT** is a sleek and lightweight web application that converts text into natural-sounding speech using the powerful [AWS Polly](https://aws.amazon.com/polly/) service. With a clean interface and intuitive controls, it's perfect for developers, educators, and content creators who need dynamic voice synthesis.

---

## 🚀 Features

- ✅ Real-time **Text to Speech** conversion  
- ✅ Play audio directly in the browser  
- ✅ **Download** speech as an MP3 file  
- ✅ Interactive **progress bar** to track audio playback  
- ✅ Built with scalability and simplicity in mind  

---

## 🛠️ Tech Stack

- ⚛️ **React.js** – Frontend framework  
- ☁️ **AWS Polly** – Text to speech engine  
- 🔐 **.env Configuration** – Secure access to AWS  

---

## ✅ Prerequisites

To run this application, you’ll need:

- An **AWS Account**
- An **IAM user** with:
  - Access Key ID & Secret Access Key
  - Attached policy: `AmazonPollyFullAccess`

> 💡 **Note:** AWS Free Tier offers **5 million characters/month** of Polly usage for the first **12 months**.

---

## 📦 Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/kumarswamy2025/Real-Time-Text-Prediction-System.git
cd Real-Time-Text-Prediction-System
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
REACT_APP_CLIENTID=your_aws_access_key_id
REACT_APP_SECRETKEY=your_aws_secret_access_key
REACT_APP_REGION=your_aws_region
```

### 4. Start the Application

```bash
npm start
```

### 5. Open in Browser

Visit: [http://localhost:3000](http://localhost:3000)

---

## 👨‍💻 About the Developer

Made with ❤️ by **Kumar Swamy** — a passionate Full Stack Developer focused on crafting modern, scalable web applications.

- 🌐 [Portfolio](https://portfolio-frontend-g4v2.onrender.com/)
- 💼 [LinkedIn](https://www.linkedin.com/in/kumar-swamy-239623247/)
- 💻 [GitHub](https://github.com/kumarswamy2025)

---

## 📄 License

This project is licensed under the **MIT License**.

> Feel free to **use**, **modify**, and **share** this project — contributions are always welcome!

---

⭐️ _If you like this project, give it a star on [GitHub](https://github.com/kumarswamy2025/SpeakIT)!_
