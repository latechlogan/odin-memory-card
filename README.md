# Memory Card Game

A browser-based memory card game built with React, demonstrating core React concepts including hooks, component architecture, and external API integration.

[Live Demo](https://odin-memory-card-lb.netlify.app/) • [Report Bug](https://github.com/latechlogan/odin-memory-card/issues)

## Overview

Click a card — but don't click the same one twice. **Meme-ory Match** challenges players to select each meme card exactly once while the deck reshuffles after every pick. Built as part of [The Odin Project](https://www.theodinproject.com/) React curriculum, this project focuses on state management with hooks and asynchronous data fetching from the Imgflip Memes API.

## Features

- **Randomized Card Order** — Deck reshuffles on every card click, increasing difficulty as the game progresses
- **Score Tracking** — Current score increments with each unique card selected
- **Best Score** — Tracks the highest score achieved across the current session
- **External API Integration** — Card images and data fetched from the [Imgflip Memes API](https://api.imgflip.com/get_memes) on mount, with a randomized starting index for variety across sessions
- **Game Over Detection** — Automatically detects a repeated card selection and resets the game
- **Responsive Design** — Playable across screen sizes

## Technical Highlights

### React Hooks

- **useState** for managing current score, best score, and card data
- **useEffect** for fetching card data from the API on component mount
- Proper dependency management to avoid unnecessary re-renders

### State Management

- Game state (score, best score, clicked cards) managed entirely with React hooks
- Immutable state update patterns throughout
- Best score persists across rounds within the session via state comparison logic

### API Integration

- Asynchronous data fetching with the Fetch API and async/await
- Loading state handling during initial data fetch
- Card data (images, identifiers) mapped from API response into component-friendly structure

### Shuffle Logic

- Implements the **Fisher-Yates shuffle algorithm** for true randomization
- Operates on a copy of the card array to preserve immutability
- Triggered on every render of the Cards component, driven by state changes in App on each click

## Project Structure

```
src/
├── App.jsx         # Root component — state management, API fetch, game logic
├── App.css
├── Cards.jsx       # Card grid, individual Card component, Fisher-Yates shuffle
├── Cards.css
├── Scores.jsx      # Current score and best score display
├── index.css
└── main.jsx        # Entry point
```

## Installation & Usage

```bash
# Clone the repository
git clone git@github.com:latechlogan/odin-memory-card.git

# Navigate to project directory
cd odin-memory-card

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Key Learnings

- Managing interdependent state values across a game loop with React hooks
- Fetching and transforming external API data for use in components
- Thinking through component responsibility and where state should live
- Implementing randomization logic that triggers on user interaction

## Technologies Used

**Core:**

- React
- Vite

**Data:**

- Fetch API
- [Imgflip Memes API](https://api.imgflip.com/get_memes)

**Deployment:**

- Netlify

## Acknowledgments

Built as part of [The Odin Project's](https://www.theodinproject.com/) React curriculum.

## License

This project is open source and available under the MIT License.
