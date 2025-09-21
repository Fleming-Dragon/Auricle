# Auricle - AI-Powered Mental Health Companion

A modern, gradient-based frontend application for Auricle, an AI-powered mental health companion built with React, TypeScript, and Tailwind CSS. Features calming design with glassmorphism effects, smooth animations, and a comprehensive therapy session flow.

## 🌟 Features

- **Modern Gradient Design**: Calming color palette with lavender, mint, sky blue, and teal gradients
- **Glassmorphism Effects**: Beautiful translucent UI components with backdrop blur
- **Dark/Light Mode**: Complete theme switching with persistent user preferences
- **Responsive Design**: Mobile-first approach that works beautifully on all devices
- **Smooth Animations**: Gentle transitions and hover effects throughout the interface
- **Complete Therapy Flow**: From landing page to session summary with realistic AI interaction

## 🎨 Design System

### Color Palette

- **Lavender**: `#a06eff` to `#f8f7ff` - Primary therapeutic color
- **Mint**: `#14b8a6` to `#f0fdfa` - Calming accent color
- **Sky Blue**: `#0ea5e9` to `#f0f9ff` - Trust and clarity
- **Teal**: `#14b8a6` to `#f0fdfa` - Balance and harmony

### Typography

- **Font**: Inter (Google Fonts)
- **Headings**: Bold gradient text effects
- **Body**: Clean, readable spacing with proper contrast

### Components

- **Rounded Corners**: 2xl border radius for soft, friendly appearance
- **Glassmorphism**: Translucent backgrounds with backdrop blur
- **Hover Effects**: Gentle scale and glow animations
- **Gradient Buttons**: Multi-color gradients with smooth transitions

## 📱 Pages Overview

### 1. Landing Page (`/`)

- Hero section with gradient background
- Headline introducing Auricle as AI-powered therapy
- Call-to-action button and demo preview
- Feature highlights with icons and descriptions
- Social proof with user avatars and ratings

### 2. Choose Your Therapist (`/therapists`)

- Grid layout with therapist profile cards
- Therapist specialties and communication styles
- Hover effects with gradient border glow
- Selection state with visual feedback
- Continue button activation

### 3. Live Session (`/session`)

- Large centered video frame (60% screen coverage)
- Real-time subtitles area with therapist dialogue
- Microphone toggle and end session controls
- Minimal UI to focus on the therapeutic experience
- Important disclaimer footer

### 4. Session Summary (`/summary`)

- Session completion celebration
- Progress indicators and mood ratings
- Key highlights from the session
- Action plan for continued growth
- Options to start new session or return home

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe development experience
- **Tailwind CSS** - Utility-first CSS framework with custom configuration
- **React Router Dom** - Client-side routing and navigation
- **Radix UI** - Accessible, unstyled component primitives
- **Lucide React** - Beautiful, customizable icon library
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm (or yarn/pnpm)
- Modern web browser with ES2020 support

### Installation

1. **Navigate to the project directory**

   ```bash
   cd Auricle
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   - Visit `http://localhost:5173`
   - The application will hot-reload as you make changes

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built application will be in the `dist` folder, ready for deployment.

## 🎯 Usage Flow

1. **Start** - Land on the hero page and click "Start Session"
2. **Choose** - Select your preferred AI therapist based on communication style
3. **Session** - Engage in a realistic therapy session with dynamic dialogue
4. **Summary** - Review session highlights and receive personalized action plans

## 🔧 Development

### Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Base UI primitives (Button, Card, Avatar)
│   ├── theme-provider.tsx
│   └── theme-toggle.tsx
├── pages/              # Main application pages
│   ├── LandingPage.tsx
│   ├── ChooseTherapistPage.tsx
│   ├── LiveSessionPage.tsx
│   └── SessionSummaryPage.tsx
├── lib/                # Utility functions
│   └── utils.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles and Tailwind imports
```

### Customization

The design system is highly customizable through:

- **Tailwind Config**: Modify colors, gradients, and animations in `tailwind.config.js`
- **CSS Variables**: Adjust theme colors in `src/index.css`
- **Component Variants**: Extend button and card styles in respective component files

## 🌙 Theme Support

Auricle includes comprehensive dark/light mode support:

- Automatic system preference detection
- Manual toggle with persistent storage
- Smooth transitions between themes
- All components optimized for both modes

## ⚠️ Important Disclaimers

This is a demonstration application for UI/UX purposes. The app includes appropriate disclaimers that:

- Auricle is not a licensed therapist
- Users experiencing crisis should seek immediate professional help
- Emergency contact information is prominently displayed

## 🤝 Contributing

This project combines modern React development practices with thoughtful mental health UX design. Contributions should maintain the calming, accessible design philosophy while ensuring the application remains a positive, supportive experience.

## 📄 License

This project is created for demonstration purposes. Please ensure any production use includes proper mental health disclaimers and professional oversight.

---

Built with 💙 for mental health awareness and modern web development education.
