# Firebase Auth Starter Template for Mobile Web Applications

by Moses Atia Poston

## Description

This project serves as a foundational template for mobile web applications requiring robust user authentication and data storage solutions. Leveraging Firebase 9, it integrates comprehensive authentication functionalities, including sign-in mechanisms via email and password, alongside Google OAuth. The template extends its capabilities to store user data and images securely in Firebase Firestore, offering a streamlined setup for developers to kickstart their mobile web projects.

## Features

- **Email and Password Authentication**: Secure registration and sign-in processes for users.
- **Google OAuth**: Offers an alternative sign-in option using Google accounts.
- **Password Recovery**: Functionality to assist users in recovering their accounts.
- **Profile Management**: Users can update their personal details.
- **Data and Image Storage**: Utilizes Firebase Firestore for storing user data and images.

## Firebase / Firestore Setup

To integrate Firebase and Firestore into your project, follow the detailed instructions provided by Brad Traversy on his GitHub page:

[Set up Firebase Firestore](https://gist.github.com/bradtraversy/caab8ebd8ff4b6e947632887e0183761)

These instructions will guide you through creating a Firebase project, configuring Firestore, and integrating it with this template.

## Configuration

Included in this repository is an example configuration file (`example.newFirebase.config.js`) containing placeholders for your Firebase project's API keys and other necessary information. Rename this file to `newFirebase.config.js` and replace the placeholders with your actual Firebase project details to connect your application to Firebase services.

## Getting Started

1. **Clone the Repository**: Begin by cloning this template repository to your local machine or use it as a template to create a new GitHub repository.
2. **Install Dependencies**: Navigate to the project directory and run `npm install` to install required dependencies.
3. **Configure Firebase**: Follow the Firebase / Firestore setup guide linked above, and update the `newFirebase.config.js` file with your project's specific configurations.
4. **Launch the Application**: Run `npm start` to launch the application. Navigate to the displayed URL in your browser to view and test the authentication flows.

## Contributing

Your contributions to improve this template are welcome. Whether it's adding new features, fixing bugs, or improving documentation, please feel free to fork this repository, make changes, and submit pull requests.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

## Acknowledgments

- A special thanks to Brad Traversy for providing the Firebase Firestore setup guide that aids in the configuration process of this template.

Happy coding!
