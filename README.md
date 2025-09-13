# Keval Shah - Portfolio

A modern, responsive portfolio website showcasing my work in AI engineering and robotics research. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Live Site

Visit the live portfolio at: [kevalshah.dev](https://kevalshah.dev)

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS** for styling
- **Radix UI** for accessible components
- **Wouter** for client-side routing
- **Framer Motion** for animations
- **Lucide React** for icons

### State Management
- **TanStack Query** for server state management
- **React Hook Form** for form handling
- **Custom Theme Provider** for dark/light mode

### Development Tools
- **TypeScript** for type safety
- **ESBuild** for server bundling
- **PostCSS** for CSS processing
- **Drizzle Kit** for database management

## 📁 Project Structure

```
portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── ui/         # Base UI components (Radix)
│   │   │   ├── Hero.tsx    # Landing section
│   │   │   ├── Navigation.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── ...
│   │   ├── pages/          # Route components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and configurations
│   │   └── providers/      # Context providers
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   └── storage.ts         # Database interface
├── shared/                # Shared types and schemas
└── attached_assets/        # Images and media files
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start development server:
```bash
npm run dev
```

The site will be available at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates optimized production builds in the `dist/` directory.

## 🎨 Features

- **Dark Mode Default**: Modern dark theme with smooth transitions
- **Responsive Design**: Optimized for all device sizes
- **Smooth Animations**: Subtle hover effects and transitions
- **Accessible**: Built with accessibility in mind using Radix UI
- **Fast Loading**: Optimized with Vite and modern React patterns
- **SEO Ready**: Proper meta tags and semantic HTML

## 📱 Pages

- **Home**: Hero section with profile photo and introduction
- **Experience**: Work history and achievements
- **Projects**: Featured AI and robotics projects
- **Skills**: Technical competencies and tools
- **Education**: Academic background and achievements

## 🚀 Deployment

### Cloudflare Pages (Current)

The site is deployed on Cloudflare Pages with automatic CI/CD:

1. **Build Command**: `npm run build`
2. **Build Output Directory**: `dist/public`
3. **Custom Domain**: kevalshah.dev

### Manual Deployment

```bash
# Build the project
npm run build

# Deploy to Cloudflare Pages
npx wrangler pages deploy dist/public --project-name website
```

## 🎯 Key Components

### Theme System
- Automatic dark mode detection
- Smooth theme transitions
- Persistent theme preference

### Navigation
- Responsive mobile menu
- Active route highlighting
- Theme toggle

### Content Sections
- **Hero**: Eye-catching introduction with profile photo
- **About**: Personal philosophy and vision
- **Experience**: Detailed work history with technologies
- **Projects**: Showcase of AI/robotics work
- **Skills**: Technical expertise organized by category
- **Education**: Academic achievements and honors

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run check` - Type checking
- `npm run db:push` - Push database schema changes

### Code Style

- TypeScript for type safety
- ESLint for code quality
- Prettier for formatting
- Tailwind CSS for styling

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

- **Email**: kshah57@asu.edu
- **LinkedIn**: [keval-shah14](https://linkedin.com/in/keval-shah14)
- **GitHub**: [kevalshah14](https://github.com/kevalshah14)
- **Website**: [kevalshah.dev](https://kevalshah.dev)

---

Built with ❤️ by Keval Shah
