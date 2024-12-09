# **e-PROMIN**

This is a **study project** focused on developing an **Electronic Process Management System** using **Next.js**. The main goal is to improve knowledge of **modern frontend development** and **best development practices**.

---

## **Project Objectives**
- Study and apply concepts of **Next.js**.
- Develop an Electronic Process Management System.
- Improve code structure and organization.
- Explore the use of **componentization**, **hooks**, and **API Routes** in Next.js.

---

## **Technologies Used**
- **Next.js** — React-based framework for server-side and client-side rendering.
- **React** — Library for building dynamic user interfaces.
- **CSS Modules / SASS** — For component styling.
- **Axios / Fetch** — For API consumption.
- **Git and GitHub** — Version control and remote repository.

---

##  **Project Structure (so far)**
📁 project-root/
├── 📁 app/ # Using App Router in this project
│ ├── 📁 components/ # Reusable components
│ ├── 📁 \*route\*/ # /\*route\*, in App Router every sub-folder with a page.tsx is a route
│ │ ├── 📄 page.tsx # Default route of the app
├── 📄 page.tsx # Default route of the app
├── 📁 public/ # Images and static files
├── 📄 next.config.ts # Next.js config file
├── 📄 package.json # Project dependencies and scripts
├── 📄 README.md # Project description
└── 📄 tsconfig.json # Typescript config file

## **How to Run the Project**
> Make sure you have **Node.js** and **Git** installed on your machine.

1. **Clone the repository**:
   ```bash 
   git clone https://github.com/Raqui333/promin.git
   ```
   
2. **Go to the project folder**:
   ```bash 
   cd promin
   ```

3. **Install dependencies**:
   ```bash 
   npm install
   ```

4. **Run the development server**:
   ```bash 
   npm run dev
   ```

5. **Access the project in your browser**:
   ```
   http://localhost:3000
   ```