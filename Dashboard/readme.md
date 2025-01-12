# Dashboard Project

A comprehensive dashboard application built using **React** and **Redux**, featuring tools for managing skills, timelines, projects, and more. Styled with **Tailwind CSS**, it provides a seamless user experience with reusable components and state management using Redux.

## Features

- **Manage Skills**: Add, edit, and view skills.
- **Manage Timelines**: Organize and update timelines.
- **Manage Projects**: Create, update, and manage project details.
- **Update Profile**: Edit user profile information.
- **Toast Notifications**: Provide user feedback.

## Technologies Used

- **Frontend**: React.js, Tailwind CSS
- **State Management**: Redux
- **Tools**: Git, Postman


## Folder Structure
```
dashboard/
├── public/
│   ├── index.html
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── input.jsx
│   │   │   ├── label.jsx
│   │   │   ├── select.jsx
│   │   │   ├── tabs.jsx
│   │   │   ├── textarea.jsx
│   │   │   └── tooltip.jsx
│   │   └── sub-components/
│   │       ├── SpecialLoadingButton.jsx
│   │       ├── UpdateProfile.jsx
│   │       ├── Messages.jsx
│   │       ├── AddSkill.jsx
│   │       └── ...
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── ManageSkill.jsx
│   │   ├── ManageTimeline.jsx
│   │   ├── ManageProjects.jsx
│   │   ├── UpdateProject.jsx
│   │   └── ...
│   ├── store/
│   │   ├── slices/
│   │   │   ├── skillSlice.js
│   │   │   ├── softwareApplicationSlice.js
│   │   │   ├── timelineSlice.js
│   │   │   ├── userSlice.js
│   │   │   ├── messageSlice.js
│   │   │   └── projectSlice.js
│   │   └── index.js
│   ├── App.jsx
│   ├── index.jsx
│   └── ...
├── .gitignore
├── package.json
├── README.md
└── ...
  ```

## Redux Slices
- The project utilizes Redux for state management. Key slices include:

- **skillSlice.js**: Manages skills.
- **softwareApplicationSlice.js**: Manages software applications.
- **timelineSlice.js**: Manages timelines.
- **userSlice.js**: Manages user profiles.
- **messageSlice.js**: Manages messages.
- **projectSlice.js**: Manages projects.


## Contact
- For questions or feedback, contact me at [prashantadeuja@example.com].
