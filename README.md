<h1 align="center">Doctor Search and Filter Application</h1>

## 📋 <a name="table">Table of Contents</a>

1. 💡 [Overview](#overview)
2. 👩‍💻 [Tech Stack](#tech-stack)
3. ✨ [Features](#features)
4. 📦 [Getting Started](#getting-started)
5. 📖 [Documentation](#documentation)
6. 📫 [Contribute](#contribute)
7. 🐛 [Issues](#issues)

## <a name="overview">💡 Overview</a>

The Doctor Search and Filter Application is a web based tool built using Next.js with TypeScript that allows users to search for and filter doctors based on various criteria including name, specialization, city, and area.

## <a name="tech-stack">👩‍💻 Tech Stack</a>

- Next.js
- Axios

## <a name="features">✨ Features</a>

- Allows users to search doctors by name with live suggestions in a dropdown that includes hospital name and address.

- Displays a list of doctor specializations via API and filters the doctor list based on the selected specialization.

- Enables filtering of doctors by city and area, with dynamic area loading based on selected city.

- Uses Axios to fetch data from APIs for doctors, specializations, cities, and areas in real-time.

- Includes modular components like SearchBar, Filters, and DoctorList for clean and reusable code.

- API responses are validated, errors are handled gracefully, and fallback UIs are shown when needed.

- Organized service layer (api.ts) and use of useState and useEffect for managing API data and UI state.

## <a name="getting-started">📦 Getting Started</a>

Follow these steps to set up the project locally on your machine.

**clone the repository**

```bash
git clone https://github.com/Rohitbiradar111/Doctor-Search-and-Filter-QuickOPD.git
```

**Install dependencies**

```bash
  npm install
```

**Start the server**

```bash
  npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="documentation">📖 Documentation</a>

[Next.js](https://nextjs.org/)

[Axios](https://axios-http.com/)

## <a name="contribute">📫 Contribute</a>

Contributions are always welcome. Please follow these steps to contribute:

1. **Fork the repository.**
2. **Create a new branch** (`git checkout -b feature/your-feature-name`).
3. **Make your changes** and commit them (`git commit -m 'Add some feature'`).
4. **Push to the branch** (`git push origin feature/your-feature-name`).
5. **Open a pull request**.

Please make sure to update tests as appropriate.

## <a name="issues">🐛 Issues</a>

If you encounter any issues while using or setting up the project, please check the issues section to see if it has already been reported. If not, feel free to open a new issue detailing the problem.

When reporting an issue, please include:

- A clear and descriptive title.
- A detailed description of the problem.
- Steps to reproduce the issue.
- Any relevant logs or screenshots.
- The environment in which the issue occurs (OS, browser, Node.js version, etc.).
