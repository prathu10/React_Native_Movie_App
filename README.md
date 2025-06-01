#  React Native Movie App

A cross-platform mobile app built with **React Native** and **Expo** that lets users browse trending movies, view detailed information, and explore cast, ratings, and release dates — all using data from the [TMDB API](https://www.themoviedb.org/).

---

##  Features

-  Browse trending and popular movies
-  View detailed movie info (poster, rating, release date, overview)
-  Explore cast and crew details
-  Responsive design for iOS and Android
-  Built with React Native + Expo
-  Navigation using `expo-router`

---

##  Tech Stack

- **React Native** (via [Expo](https://expo.dev/))
- **expo-router** for navigation
- **TMDB API** for movie data
- **Tailwind CSS (via Nativewind)** for styling
- **AsyncStorage** (optional) for favorites/watchlist
- **React Hooks** for state and effects

---


##  Installation

bash:
# Clone the repo
git clone https://github.com/your-username/react-native-movie-app.git
cd react-native-movie-app

# Install dependencies
npm install

# Start Expo
npx expo start


##  API Setup
Create a free account at TMDB

Go to your account > Settings > API and get an API key

Create a .env file in your project root:
TMDB_API_KEY=your_tmdb_api_key_here

Use a config manager like expo-constants or react-native-dotenv to access the key
