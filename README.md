# Vue Tailwind Project

## Overview

This Vue application is built with Vite and leverages Tailwind CSS for styling, Vue Router for navigation, Vuex for state management, Axios for API requests, and VueUse for dark mode capabilities. The app renders a dashboard displaying all posts from [JSONPlaceholder](https://jsonplaceholder.typicode.com/) and includes a modal to show detailed information about each post along with its comments.

## Features

- **Dynamic Routing**: Navigate through different views with Vue Router.
- **State Management**: Use Vuex for centralized state management.
- **API Requests**: Fetch posts and comments using Axios.
- **Responsive Design**: Styled with Tailwind CSS for a modern look.
- **Dark Mode**: Toggle between light and dark themes using VueUse.
- **Modal Functionality**: Clickable posts that open a modal with detailed information and comments.

## Getting Started

### Prerequisites

- Node.js (version >= 14)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bradrody24/vue-tailwind.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vue-tailwind
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

To start the development server, run:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:port#`.

## Project Structure

- `src/`: Main application source
- `src/router/`: Vue Router configuration
- `src/store/`: Vuex store management
- `src/modules/`: Vue modules (Dashboard, Auth, Common, etc.)
- `src/assets/`: Tailwind CSS configurations and custom styles

## Usage

- On the dashboard, you will see a list of posts fetched from JSONPlaceholder.
- Click on any post title to open a modal that displays detailed information about the post and its comments.
- Use the dark mode toggle in the header to switch between themes.

## Dependencies

- **Vue**: JavaScript framework
- **Vite**: Build tool for fast development
- **Vue Router**: Routing library for Vue.js
- **Vuex**: State management pattern + library
- **Axios**: Promise-based HTTP client
- **Tailwind CSS**: Utility-first CSS framework
- **VueUse**: Collection of useful Vue Composition API utilities
