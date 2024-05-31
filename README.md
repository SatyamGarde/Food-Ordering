# Restaurant App

This is a web application for browsing restaurants, viewing their menus, and managing a shopping cart. The app is built using React, Redux, and React Router, and it is powered by Vite for fast and efficient development.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Acknowledgements](#acknowledgements)

## Features

- Browse a list of restaurants with details
- View restaurant menus
- Add items to the cart
- View and manage the cart
- Navigate between different pages (Home, About, Contact, etc.)

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher) or yarn (v1.22 or higher)

### Installation

1. Clone the repository:

```sh
git clone https://github.com/SatyamGarde/restaurant-app.git
cd restaurant-app
```

2. Install dependencies:

```sh
npm install
```

or

```sh
yarn install
```

3. Start the development server:

```sh
npm run dev
```

or

```sh
yarn dev
```

The application will be available at `http://localhost:3000`.

### Additional Dependencies

This project relies on several libraries for functionality. Ensure these are listed in your `package.json` and installed via the steps above.

- React: `npm install react react-dom`
- Redux: `npm install @reduxjs/toolkit react-redux`
- React Router: `npm install react-router-dom`
- AOS (Animate on Scroll): `npm install aos`

## Usage

- Navigate to different pages using the header links.
- View restaurant details and their menus.
- Add items to the cart and view the cart.

## Project Structure

```
restaurant-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── Components/
│   │   ├── About.js
│   │   ├── Body.js
│   │   ├── CartStore.js
│   │   ├── Contact.js
│   │   ├── Error.js
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── RestaurantMenu.js
│   │   ├── RestaurantCard.js
│   │   ├── Recommanded.js
│   │   ├── Shimmer.js
│   │   └── User.js
│   ├── Utils/
│   │   ├── constants.js
│   │   └── mockData.js
│   ├── App.css
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .gitignore
├── package.json
├── vite.config.js
├── README.md
└── ...
```

### Key Files

- `src/App.jsx`: Main application component
- `src/main.jsx`: Entry point of the application
- `src/Components/`: Directory containing all the React components
- `src/Utils/`: Utility files and constants
- `vite.config.js`: Vite configuration file

## Screenshots

Here are some screenshots of the application:

### Home Page

![Home Page](screenshots/home.png)

### Restaurant List

![Restaurant List](screenshots/restaurant-list.png)

### Restaurant Menu

![Restaurant Menu](screenshots/restaurant-menu.png)

### Shopping Cart

![Shopping Cart](screenshots/cart.png)

## Acknowledgements

- [React](https://reactjs.org/)
- [Redux](https://redux.js.org/)
- [React Router](https://reactrouter.com/)
- [AOS](https://michalsnik.github.io/aos/)
- [Vite](https://vitejs.dev/)
