# Web101 Practical 1

## Practical Report

### Instructions

1. Open the terminal and navigate to the project directory.
2. Create a new Next.js project using the command:
   npx create-next-app@latest

3. Configure the project with the following options:
   - TypeScript → No
   - ESLint → Yes
   - Tailwind CSS → Yes
   - Use src directory → Yes
   - Use App Router → Yes
   - Customize import alias → No

4. Navigate to the src/app directory and clean the default files.

5. Replace the content of page.js with a basic component.

6. Update globals.css to only include the Tailwind CSS directive.

7. Create the required folder structure inside the src directory:
   - src/components/layout
   - src/components/ui
   - src/lib
   - src/app/profile
   - src/app/upload

8. Create a layout component named MainLayout.jsx inside
   src/components/layout to handle the main layout and navigation.

9. Update src/app/layout.js to include the MainLayout component.

10. Create navigation pages:
    - Profile page
    - Upload page
    - Following page
    - Explore page
    - Live page

11. Install additional dependencies:
    npm install react-icons

12. Create UI components:
    - VideoCard.jsx
    - VideoFeed.jsx

13. Update the home page (src/app/page.js) to display the video feed.

14. Install form handling library:
    npm install react-hook-form

15. Create login and signup pages:
    - src/app/login/page.jsx
    - src/app/signup/page.jsx

16. Implement form validation using React Hook Form.

17. Update MainLayout.jsx to include links for Login and Signup.

18. Run the development server:
    npm run dev

19. Open the application in the browser:
    http://localhost:3000

---

### Solution / Output

After completing the steps, the application successfully runs a TikTok-style web interface with:

- A sidebar navigation layout
- Multiple pages such as Home, Explore, Following, Profile, and Upload
- A video feed interface using VideoCard and VideoFeed components
- Login and Signup forms with validation
- Navigation links integrated into the layout

---

### Screenshots

(Add screenshots here)

1. Screenshot of the project folder structure
2. Screenshot of the application homepage
3. Screenshot of the video feed interface
4. Screenshot of the login form validation
5. Screenshot of the signup form validation
6. Screenshot of the terminal running the development server
