# GenAgentX Documentation

Complete user and technical documentation for **GenAgentX** - a visual, no-code platform for creating, managing, and deploying AI agents powered by Google Gemini.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📚 Documentation Structure

The documentation covers 11 comprehensive sections:

1. **Overview** - Introduction to GenAgentX and key features
2. **Getting Started** - Prerequisites, installation, and setup
3. **First Time Setup & Onboarding** - Step-by-step onboarding guide
4. **Dashboard Navigation** - Understanding the interface
5. **Creating AI Agents** - Manual and AI-assisted agent creation
6. **Running Agents** - Executing agents and viewing results
7. **AI Chatbot Helper** - Using the AI assistant to generate agents
8. **Building Workflows** - Chaining multiple agents together
9. **Execution History** - Tracking and reviewing agent runs
10. **Import & Export** - Sharing and backing up agents
11. **Settings & Configuration** - Managing application settings

## 🛠️ Tech Stack

- **React 19** - UI framework
- **React Router DOM** - Routing and navigation
- **Vite** - Build tool and dev server
- **CSS3** - Custom styling with theme support

## 📁 Project Structure

```
GenAgentXDocs/
├── src/
│   ├── components/
│   │   ├── Layout.jsx          # Main layout with sidebar and header
│   │   ├── Layout.css          # Layout styling
│   │   └── CodeBlock.jsx       # Code syntax highlighting component
│   │
│   ├── pages/
│   │   ├── Overview.jsx        # Overview page
│   │   ├── GettingStarted.jsx  # Getting Started guide
│   │   ├── Onboarding.jsx      # Onboarding guide
│   │   ├── Dashboard.jsx       # Dashboard navigation guide
│   │   ├── CreatingAgents.jsx  # Agent creation guide
│   │   ├── RunningAgents.jsx   # Running agents guide
│   │   ├── AIHelper.jsx        # AI chatbot helper guide
│   │   ├── Workflows.jsx       # Workflows guide
│   │   ├── ExecutionHistory.jsx # History tracking guide
│   │   ├── ImportExport.jsx    # Import/Export guide
│   │   └── Settings.jsx        # Settings configuration guide
│   │
│   ├── App.jsx                 # Main app component with routing
│   ├── App.css                 # Global documentation styles
│   ├── main.jsx                # Entry point
│   └── index.css               # CSS reset and base styles
│
├── public/                     # Static assets
├── package.json                # Dependencies
├── vite.config.js              # Vite configuration
└── README.md                   # This file
```

## 🎨 Features

- ✅ **Responsive Design** - Mobile-friendly layout
- ✅ **Dark/Light Theme** - Toggle between themes
- ✅ **Smooth Navigation** - React Router for seamless browsing
- ✅ **Code Highlighting** - Syntax-highlighted code blocks
- ✅ **Copy to Clipboard** - One-click code copying
- ✅ **Comprehensive Coverage** - Every feature documented
- ✅ **Search Navigation** - Easy-to-use sidebar navigation
- ✅ **Clean UI** - Modern, professional design

## 🎯 Usage

### Development

```bash
npm run dev
```

The documentation will be available at `http://localhost:5173` (or next available port).

### Building for Production

```bash
npm run build
```

The build output will be in the `dist/` directory.

### Deployment

You can deploy the documentation to any static hosting service:

- **GitHub Pages**
- **Netlify**
- **Vercel**
- **AWS S3**
- **Cloudflare Pages**

## 📝 Adding New Pages

1. Create a new page component in `src/pages/`
2. Import the component in `src/App.jsx`
3. Add a new route in the `<Routes>` section
4. Add navigation item in `src/components/Layout.jsx`

Example:

```jsx
// 1. Create src/pages/NewPage.jsx
const NewPage = () => {
  return (
    <div className="doc-page">
      <h1>New Page Title</h1>
      <p>Content here...</p>
    </div>
  );
};
export default NewPage;

// 2. In App.jsx
import NewPage from './pages/NewPage';

// 3. Add route
<Route path="/new-page" element={<NewPage />} />

// 4. In Layout.jsx navItems array
{ path: '/new-page', label: 'New Page', icon: '📄' }
```

## 🎨 Styling Guide

### Theme Variables

The documentation uses CSS variables for theming:

```css
/* Light Theme */
--bg-primary: #ffffff
--text-primary: #1a202c
--accent-color: #3b82f6

/* Dark Theme */
--bg-primary: #1a202c
--text-primary: #f7fafc
--accent-color: #60a5fa
```

### Common Components

- `.doc-page` - Main page container
- `.info-box` - Information callouts
- `.feature-list` - Grid of feature items
- `.code-block` - Code snippets with copy button
- `.step-list` - Numbered steps with styled bullets

## 🔧 Configuration

### Vite Config

The project uses Vite for fast development and optimized builds. See `vite.config.js` for configuration.

### ESLint

Code quality is maintained with ESLint. Configuration in `eslint.config.js`.

## 📄 License

This documentation is part of the GenAgentX project.

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- **GitHub Issues**: https://github.com/suhas991/GenAgentX/issues
- **Main Project**: https://github.com/suhas991/GenAgentX

---

Built with ❤️ for the GenAgentX community


## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
