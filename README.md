# Login App using React, Bootstrap 5 and Firebase Auth

This is a simple login app using React, Bootstrap 5 and Firebase Auth. The app has a login page and a profile page. The login page has a form with email and password fields. The profile page has a welcome message and a logout button. The app uses Firebase Auth to authenticate users.

This project helps me practice my skills in React and Firebase.

## Features

- User authentication with Firebase Auth
- Login with email and password
- Login with Google
- Profile page with a welcome message and logout button

## Technologies Used

- React
- Bootstrap 5
- Firebase Auth
- React Toastify

## Prerequisites

- Node.js and npm installed on your machine
- Firebase project with Auth enabled

## Getting Started

### Clone the Repository

```bash
git clone https://github.com/coder-ralph/firebase-practice.git
cd firebase-practice
```

### Install Dependencies

```bash
npm install
```

### Set Up Firebase

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Create a new project (or use an existing one).
3. Enable Email/Password and Google sign-in methods in the Firebase Auth section.
4. Copy your Firebase configuration from firebase.js and ensure it is correctly set up.

```
REACT_APP_API_KEY=your-api-key
REACT_APP_AUTH_DOMAIN=your-auth-domain
REACT_APP_PROJECT_ID=your-project-id
REACT_APP_STORAGE_BUCKET=your-storage-bucket
REACT_APP_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_APP_ID=your-app-id
```

### Run the App

```bash
npm start
```

### Build the App

```bash
npm run build
```

## Project Structure

```
/src
  /components
    login.js
    register.js
    signInWIthGoogle.js
    profile.js
  firebase.js
  App.js
  index.js
```

### Commands Summary

- **Install Dependencies**: `npm install`
- **Run the App**: `npm start`
- **Build the App**: `npm run build`

## Usage

1. Open your browser and go to `http://localhost:3000`.
2. Enter your email and password to log in.
3. Use the Google sign-in button to log in with your Google account.
4. After logging in, you will be redirected to the profile page with a welcome message.
5. Click the logout button to sign out.
