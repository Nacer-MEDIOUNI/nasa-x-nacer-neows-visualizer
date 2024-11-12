# NASA x MIS pay x Nacer: NeoWs Visualizer App

Welcome to NASA x MIS pay x Nacer Visualizer Application: NeoWs Visualizer! This app visualizes data on near-Earth objects, fetched from NASA's Near Earth Object Web Service (NeoWs). It offers clear, interactive visualizations to make data about objects near Earth accessible and informative.

#Table of Contents
Overview
Tech Stack
Setup and Installation
Folder Structure
Key Features
Contributing
License
Overview
The goal of this app is to create near-Earth object visualizations that are intuitive and nearly shippable. The data displayed is fetched directly from NASA's NeoWs API, making it a valuable tool for exploring insights into objects close to Earth.

#Tech Stack
The project leverages the following technologies and libraries:

- React + Vite: For a fast and modular development environment.
- TypeScript: Adds static typing for improved code reliability.
- Prettier: Ensures code consistency and readability across the project.
- ESLint: Enforces code quality standards to catch issues early.
- Husky: Automates quality checks with Git hooks.
- Tailwind CSS: For streamlined, responsive styling.
- Recharts: For interactive data visualization.
- React Table Library: For handling and displaying tabular data.
- json-as-xlsx: To export JSON data to Excel format, adding flexibility for data sharing.

#Setup and Installation
To get started with NASA x MIS pay x Nacer: NeoWs Visualizer, follow these steps:

- Clone the repository:

git clone https://github.com/Nacer-MEDIOUNI/nasa-x-nacer-neows-visualizer.git
cd nasa-x-nacer-neows-visualizer

- Install dependencies:

npm install
Run the application:

npm run dev
Linting and Formatting:

Linting: Run npm run lint to check for code issues.
Formatting: Use npm run format to format code using Prettier.
Testing and Pre-Commit Hooks: Husky is configured to run checks on each commit, ensuring code quality through automated linting and formatting.

#Folder Structure
The app's folder structure is as follows:

my-app/
├── node_modules/
├── src/
├── assets/
├── utils/
├── hooks/
├── components/
├── .eslintrc.cjs
├── index.html
├── README.md
├── package.json
└── vite.config.js

#Key Features
Near-Earth Object Data: Retrieves and displays data from NASA’s NeoWs API.
Data Visualization: Uses Recharts for interactive, clear visualizations.
Data Table: With React Table Library, data tables are easy to read and manipulate.
Excel Export: Convert JSON data to Excel format with json-as-xlsx.
Responsive Design: Tailwind CSS ensures the app looks great on any device.
Automated Code Quality: Prettier, ESLint, and Husky maintain consistent, high-quality code.

#Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch (git checkout -b feat/YourFeature).
Commit your changes (git commit -m 'Add new feature').
Push to the branch (git push origin feat/YourFeature).
Open a Pull Request.

#License
This project is licensed under the MIT License.
