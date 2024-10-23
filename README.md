# Webstack-Portfolio-Project
This is my final webstack portfolio project for ALX software engineering program

###Skincare E-commerce App
This is a Skincare E-commerce Application built using React.js. The app allows users to browse a collection of skincare products, each with a description, price, and image. Firebase is integrated for authentication, and product data is currently loaded from a local JSON file.

Table of Contents
Features
Technologies Used
Installation
Project Structure
Firebase Integration
Usage
Author
Features
User authentication using Firebase (Sign up, Sign in)
Display skincare product listings with images, descriptions, and prices
Firebase Firestore integration for potential future product storage
Fully responsive and styled using CSS
Simple state management using React hooks (useState, useEffect)
Technologies Used
React.js: JavaScript library for building the user interface
Firebase: For authentication and database (Firestore) (optional)
CSS: For styling
Font Awesome: For icons
Local JSON: To populate product data in the app
Installation
Clone the Repository

bash
Copy code
git clone https://github.com/your-username/skincare.git
cd skincare
Install Dependencies

Make sure you have Node.js installed. Then run:

bash
Copy code
npm install
Set Up Firebase (Optional)

Go to Firebase Console.
Create a new project.
Set up Firebase Authentication.
Set up Firestore Database (optional for product storage).
Copy your Firebase configuration details and replace them in src/firebase.js.
Run the App

Start the development server:

bash
Copy code
npm start
The app will be available at http://localhost:3000.

Project Structure
bash
Copy code
src/
 ├── components/
 │   ├── SignIn.js
 │   ├── SignUp.js
 │   └── ProductList.js
 ├── data/
 │   └── products.json   # Local JSON file for product data
 ├── firebase.js         # Firebase configuration and initialization
 ├── App.js              # Main component
 └── index.js            # Entry point
JSON Data (products.json)
The product data is stored in a local JSON file inside the src/data/products.json. Here is an example of the structure:

Firebase Integration
Authentication: Firebase Authentication is used to handle user sign-in and sign-up processes. The auth object is initialized in firebase.js, and Firebase's signInWithEmailAndPassword is used in the SignIn component.

Firestore (Optional): Firestore is initialized in firebase.js and can be extended to store product data or user orders.

Usage
Sign In / Sign Up: Navigate to the SignIn or SignUp page to create or log into an account.
Product Listing: Products are fetched from a local JSON file (products.json) and displayed in the ProductList component.
Firebase Authentication: Handle user sessions for login and signup with Firebase.
Author
Okwori Patience Onyejonchi


