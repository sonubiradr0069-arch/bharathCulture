 🌿 Roots Reconnect — Bridging Generations Through Culture

Roots Reconnect is a **full-stack web platform** designed to reconnect younger generations with traditional art, folklore, and cultural values.  
Inspired by **Google Arts & Culture**, the platform blends storytelling, interactive exploration, and gamified learning to preserve heritage through technology.

---

## 🧩 Problem Statement

Younger generations are increasingly disconnected from traditional art, folklore, and cultural values.  
The lack of engaging and digital-first platforms has widened the generational gap in cultural understanding.

**🎯 Objective:**  
To build a digital ecosystem that educates, engages, and inspires users to explore their cultural roots through modern technology.

---

## 💡 Solution Overview

Roots Reconnect serves as an interactive cultural archive that enables users to:

- 🗺️ Explore Indian heritage through a state-wise interactive map.  
- 📖 Access AI-generated stories, folklore, and regional traditions.  
- 🧠 Participate in quizzes to test cultural knowledge.  
- ✍️ Submit local or family stories to preserve regional heritage.  

The platform emphasizes a **responsive, user-friendly interface** with smooth animations and meaningful design.

---

## ⚙️ Technology Stack

| Layer | Technologies | Description |
|--------|---------------|-------------|
| 🎨 **Frontend** | React.js, Tailwind CSS, React Router | Modern, responsive user interface with modular design. |
| ⚙️ **Backend** | Node.js, Express.js | RESTful API for data handling and routing. |
| 💾 **Database** | MongoDB Atlas | Stores cultural data, stories, and quiz content. |
| 🧰 **Tools & Platforms** | GitHub, Vercel, Render, Replit | Used for version control, development, and deployment. |
| 🧪 **Testing** | Postman, Console Logs | API testing and backend verification. |

---

## 🌟 Core Features

- 🏠 **Home Page:** Introduces the project’s mission and vision.  
- 🔍 **Explore Page:** Displays Indian art, stories, and festivals using responsive cards.  
- 🗺️ **Interactive Map:** State-wise clickable map to explore traditions and art forms.  
- 📚 **Story Page:** Showcases AI-generated folklore and cultural tales.  
- 🧩 **Quiz Section:** Interactive quiz to test cultural awareness.  
- 📬 **Contact Page:** Users can submit their own stories or experiences.  
- 📱 **Responsive Design:** Works smoothly on desktop and mobile devices.

---

## 🗂️ Project Structure

roots-reconnect/
├── client/ # Frontend (React + Tailwind)
│ ├── src/
│ │ ├── components/
│ │ │ ├── IndiaMap.tsx
│ │ │ ├── ExploreCard.tsx
│ │ └── pages/
│ ├── public/
│ └── package.json
├── server/ # Backend (Express + Node)
│ ├── routes/
│ ├── models/
│ ├── db.ts
│ └── index.ts
├── README.md
└── package.json

yaml
Copy code

---

## 🔗 API Endpoints

| Endpoint | Method | Description |
|-----------|---------|-------------|
| `/api/ai-story?region=` | GET | Fetches AI-generated folklore for the specified region. |
| `/api/auth/register` | POST | Registers a new user. |
| `/api/auth/login` | POST | Authenticates an existing user. |
| `/api/explore` | GET | Retrieves a list of cultural artworks, stories, and festivals. |
| `/api/quiz` | GET | Fetches quiz questions and answers. |
| `/api/contact` | POST | Handles user-submitted stories. |

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/sonubiradr0069-arch/bharathCulture.git
cd bharathCulture
2️⃣ Setup Frontend
bash
Copy code
cd client
npm install
npm run dev
3️⃣ Setup Backend
bash
Copy code
cd server
npm install
npm run dev
Frontend: http://localhost:5173
Backend: http://localhost:5000

🚀 Deployment
Frontend (Vercel)

Deploy the client/ folder

Add environment variable:
VITE_API_URL=https://your-backend-url.onrender.com

Backend (Render)

Deploy the server/ folder

Add environment variables:

MONGO_URI=<your-mongodb-connection-string>

PORT=5000

🔮 Future Enhancements
🤖 Integrate AI-based storytelling (OpenAI / Gemini API).

🌍 Expand to a multi-country cultural database.

🔐 Add user login and personalized dashboards.

🧭 Develop an admin panel for content management.

📱 Create a mobile app version (React Native).

🕶️ Add AR/VR cultural museum experiences.

👥 Team
Member	Role	Responsibilities
Rushil	Team Lead	Integration, coordination, and presentation.
Member 2	Frontend Developer	UI/UX, animations, and layout.
Member 3	Backend Developer	API creation and database integration.
Member 4	Data Curator	Content research, cultural data, and quizzes.

💫 Inspiration
Inspired by Google Arts & Culture, this project modernizes cultural education through storytelling and interactivity — ensuring traditional wisdom is preserved in the digital era.

📜 License
This project is open-source and available for educational and non-commercial use.

🙏 Acknowledgments
Google Arts & Culture for design inspiration.

MongoDB Atlas and Vercel for hosting support.

Indian cultural archives and open datasets.

OpenAI for potential AI storytelling integration.

🏁 Conclusion
Roots Reconnect bridges the gap between tradition and technology.
It provides an innovative, scalable, and immersive approach to preserving cultural heritage for future generations.
