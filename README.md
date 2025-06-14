# Mini Floor and Apartment Selector App

This is a simple, interactive real estate prototype built with **React**. It allows users to explore multiple towers, select floors, and view apartment layouts dynamically.

## ✨ Features

- **Tower Overview Page**: Displays three clickable towers — Tower A, B, and C.
- **Dynamic Floor Navigation**: Each tower links to a unique floor list:
  - Tower A: 12 floors
  - Tower B: 10 floors
  - Tower C: 15 floors
- **Apartment Listing**: Floors link to a grid of apartment cards showing:
  - Image thumbnail
  - Unit type
  - Area (sqm)
  - Room count
- **Apartment Details Modal**: Clicking on an apartment opens a modal with full apartment information.
- **Hover Effects**: Subtle image scaling and background darkening for interactive feedback.
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop.

## 🛠 Tools & Libraries Used

- [React](https://reactjs.org/) – Component-based frontend framework
- [React Router DOM](https://reactrouter.com/) – For dynamic routing
- [React Icons](https://react-icons.github.io/react-icons/) – Icon set used across the UI
- [Tailwind CSS](https://tailwindcss.com/) – Utility-first CSS framework for styling

## 📁 Project Structure

src/
├── components/ # Reusable UI components
├── pages/ # Tower, Floor, and Apartment views
├── data/ # Mock data for towers, floors, and apartments
├── App.jsx # Main app logic with routing
└── index.css # Tailwind CSS configuration

## ⚠️ Known Limitations & Tradeoffs

- **No Backend/API**: The app currently uses mock data. In a real-world scenario, each floor’s apartments would be fetched dynamically via API using IDs from the URL.
- **No Persistent State**: There's no global state management; the app relies on URL parameters for navigation and dynamic rendering.
- **Modal Overlap on Small Screens**: Although responsive, modal scaling may need refinement to avoid overwhelming smaller screens.
- **Limited Apartment Details**: Each apartment has a simplified set of details and does not include user interactions like booking or saving.

## 📹 Walkthrough

> You can view a quick video walkthrough [here](#) (Add Loom or Drive link).

---

Thanks for checking it out!

Built with 💻 by David Dappa
