# Next.js User Directory & API Fetching 🚀

A professional React/Next.js application that demonstrates how to fetch data from an external API, implement live search filtering, and handle dynamic routing with TypeScript.

🌐 **Live Demo:** [View Project Live](https://nextjs-lecture-5-api-fetching-i2i2enx16.vercel.app)

---

## 📌 Project Overview
This project focuses on the core concepts of **Data Fetching** and **Dynamic Navigation** in the Next.js App Router. It fetches a list of users from a mock API and allows users to search and view detailed profiles for each individual on a unique dynamic route.

## 🚀 Key Learning Outcomes
* **API Integration:** Fetching data using the `fetch()` API with `async/await` patterns.
* **Dynamic Routing:** Utilizing `[id]` folder structures to create unique profile pages for every user.
* **State Management:** Using `useState` and `useEffect` hooks for managing search terms, loading states, and error handling.
* **Advanced UI Logic:** Implementing a real-time search filter and a responsive 2-column grid layout.
* **TypeScript Mastery:** Defining custom interfaces and types for API responses to ensure type safety.

## 🛠 Tech Stack
* **Framework:** Next.js (App Router)
* **Library:** React.js
* **Language:** TypeScript
* **Styling:** Tailwind CSS (Responsive Design)
* **Backend:** JSONPlaceholder (REST API)
* **Deployment:** Vercel

## 📂 Project Structure
```text
lecture-5/
  ├── app/
  │   ├── user/
  │   │   └── [id]/
  │   │       └── page.tsx    # Dynamic Route: Detailed User Profile
  │   ├── layout.tsx          # Root Layout
  │   └── page.tsx            # Home Page: User List with Search Bar
  ├── components/             # Reusable UI Components
  └── public/                 # Static Assets (Icons/Images)

✨ Features
🔍 Live Search Filter: Instantly find users by name as you type.
📱 Responsive Grid: A clean 2-column layout that adapts to all screen sizes.
🔗 Dynamic User Profiles: Seamless navigation to detailed user pages without page reloads.
⌛ Loading & Error States: Professional UI feedback during data fetching.
🎨 Interactive UI: Modern cards with hover effects and initial avatars.
▶️ How to Run Locally
1. Clone the repository:
git clone [https://github.com/Iram-Shahzadii/nextjs-lecture-5-api-fetching.git](https://github.com/Iram-Shahzadii/nextjs-lecture-5-api-fetching.git)
2. Navigate to the project directory:
cd nextjs-lecture-5-api-fetching
3. Install dependencies:
npm install
4. Start the development server:
5. View in your browser:
Open http://localhost:3000
🎯 Why this Project Matters
This project serves as a foundation for building real-world, data-driven applications. It showcases the ability to handle asynchronous operations, manage complex UI states, and provide a smooth user experience through client-side navigation.
📌 Author
Iram Shahzadi BSCS Student | Next.js & React Developer 🚀 Learning in Public | Passionate about Full-Stack Development and UI/UX.
