# Frontend App

This project is a front-end web application that includes a login screen, a post listing screen, a post detail modal, and search functionality. It consumes the JSONPlaceholder and DummyJSON APIs to provide a seamless user experience.

## Project Structure

```
frontend-app
├── public
│   ├── index.html        # Main entry point of the application
│   └── favicon.ico       # Favicon for the application
├── src
│   ├── css
│   │   └── styles.css    # Main styles for the application
│   ├── js
│   │   ├── login.js      # Handles login functionality
│   │   ├── posts.js      # Manages post listing functionality
│   │   ├── modal.js      # Logic for displaying post detail modal
│   │   └── search.js     # Implements search functionality
│   └── assets            # Directory for additional assets
├── package.json          # Configuration file for npm
└── README.md             # Documentation for the project
```

## Features

- **Login Screen**: Users can log in using their credentials, which are authenticated via the DummyJSON API.
- **Post Listing Screen**: Displays a list of posts fetched from the JSONPlaceholder API in a card format.
- **Post Detail Modal**: Users can view detailed information about a post in a modal window.
- **Search Functionality**: Users can filter posts in real-time based on their search input.

## Setup Instructions

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd frontend-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the application:
   ```
   npm start
   ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Technologies Used

- HTML
- CSS
- JavaScript
- JSONPlaceholder API
- DummyJSON API

## Contributing

Feel free to submit issues or pull requests for any improvements or bug fixes.