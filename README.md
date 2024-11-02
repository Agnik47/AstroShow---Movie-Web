
# 🌌 **AstroShow**


## 🚀 Description
Hey there! I’m **Agnik**, the creator of **AstroShow** 🎥—a sleek, interactive movie web app built to enhance my frontend development skills. AstroShow provides an engaging experience for movie lovers, featuring trending movies, TV shows, trailers, and personalized recommendations!

**Status**: 🛠️ *We’re working on improving responsiveness and fixing some bugs to make AstroShow even better!*

---

## 🛠️ Tech Stack

| 🛠️ Technology         | 📝 Purpose                               |
|-----------------------|------------------------------------------|
| ⚛️ **React**          | Frontend library for building UI         |
| 🗄️ **Redux**          | State management for React               |
| 🚏 **React Router**    | Handles routing between pages           |
| 🌐 **Axios**          | API requests to fetch movie data         |
| 🧰 **@reduxjs/toolkit** | Simplifies Redux configuration        |
| 🎨 **TailwindCSS**    | Better styling                          |
| 🏗️ **HTML5/CSS3**     | Structuring and styling                  |
| ✨ **JavaScript (ES6+)** | Core programming language             |

---

## 📦 React Dependencies
- **react-router-dom**: For seamless page navigation.
- **redux**: Manages application state consistently across components.
- **axios**: Handles API requests for fetching movie and TV show data.
- **@reduxjs/toolkit**: Simplifies Redux setup and configuration.
- **react-typrwritter**: For the TypeWritter Effect
- **react-infinite-scroll-component**: For Infinite Scroll
- **react-player**: For play the Trailer 

---

## 🗂️ Project Structure

```plaintext
AstroShow/
├── public/                   # 📂 Static assets (accessible publicly)
│   ├── BackVideo.mp4         # 🎬 Background video for the UI
│   ├── ComingSoon.gif        # ⏳ GIF indicating upcoming features
│   └── no-image.jpg          # 🖼️ Default image placeholder
│
├── src/                      # 🌐 Main source folder for React components and logic
│   ├── assets/               # 📁 Reusable media assets (images, videos)
│   ├── components/           # 🌟 Main UI components for pages and features
│   │   ├── About.jsx         # ℹ️ "About" page component
│   │   ├── Home.jsx          # 🏠 Homepage component
│   │   ├── Movies.jsx        # 🎞️ Movies page component
│   │   ├── Trending.jsx      # 📈 Trending page component
│   │   ├── PersonDetails.jsx # 👤 Person detail view component
│   │   └── MovieDetails.jsx  # 📜 Movie detail view component
│   │
│   ├── partials/             # 🧩 Smaller reusable components and layouts
│   │   ├── Cards.jsx         # 🗂️ Component for displaying card views
│   │   ├── Horizontalcards.jsx # ➖ Horizontal card view for lists
│   │   ├── TopNav.jsx        # 📍 Top navigation bar
│   │   ├── SideNav.jsx       # 📋 Sidebar navigation
│   │   ├── Header.jsx        # 🏷️ Page headers
│   │   └── Dropdown.jsx      # ⬇️ Dropdown component for filters/settings
│   │
│   ├── store/                # 🗄️ Redux store configuration and logic
│   │   ├── actions/          # 🔄 Redux actions for dispatching events
│   │   │   └── movieAction.jsx # 🎬 Actions for movie-related state
│   │   └── reducers/         # 🔍 Redux slices for various states
│   │       ├── MovieSlice.jsx # 🎥 Slice for movie state management
│   │       ├── PersonSlice.jsx # 🧑 Slice for person-related state
│   │       └── TvSlice.jsx    # 📺 Slice for TV show state management
│   │
│   ├── utils/                # 🛠️ Utility functions and helpers
│   │   ├── axios.js          # 🌐 Axios instance for API requests
│   │   ├── Loader.jsx        # ⏳ Loading spinner component
│   │   ├── MovieLoader.jsx   # 🍿 Skeleton loader for movie cards
│   │   └── P_DetailsLoader.jsx # 👥 Skeleton loader for person details
│   │
│   ├── App.js                # 🏁 Main application entry point (handles routes)
│   ├── App.css               # 🎨 App-specific global styles
│   └── index.css             # 💅 Global CSS for styling resets and structure
│
└── README.md                 # 📄 Project documentation (this file)
```

---

## 🚧 Future Improvements
- **Responsive Design**: Enhanced performance on all screen sizes 📱💻.
- **Bug Fixes**: Ongoing improvements for smoother user experience 🐞.

--- 

> Made by **Agnik aka Astro** 
