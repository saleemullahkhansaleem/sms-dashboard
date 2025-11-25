# School Management System (SMS) Dashboard

A comprehensive and modern school management system built with Next.js 16, React 19, TypeScript, and Tailwind CSS. This dashboard provides a complete solution for managing students, teachers, staff, finances, and academic performance across multiple campuses.

![Next.js](https://img.shields.io/badge/Next.js-16.0-black)
![React](https://img.shields.io/badge/React-19.2-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.1-38bdf8)

## 🚀 Features

### 📊 Dashboard Sections

- **Overview Dashboard** - Real-time metrics and KPIs across all campuses
- **Finance Management** - Revenue tracking, expenses, and financial analytics
- **HR Management** - Staff and teacher management with payroll summaries
- **Academic Performance** - Student grades, attendance, and performance tracking
- **Admissions** - Student enrollment and admission tracking
- **Alerts & Notifications** - System alerts and notice board

### 🎨 Design Features

- **Dark/Light Theme** - Full theme switching with system preference detection
- **Responsive Design** - Mobile-first approach, works on all devices
- **Modern UI** - Clean, professional design with smooth animations
- **Color-Coded Sections** - Easy navigation with themed sections
- **Interactive Components** - Hover effects, transitions, and smooth animations

### 🔧 Technical Features

- **Next.js 16** with App Router
- **React 19** with Server Components
- **TypeScript** for type safety
- **Tailwind CSS 4.1** for styling
- **Radix UI** components for accessibility
- **Lucide React** for icons
- **Next Themes** for theme management
- **Vercel Analytics** integration

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0 or higher)
- **npm**, **yarn**, or **pnpm** package manager
- **Git** for version control

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd sms-dashboard
```

2. **Install dependencies**

Using npm:

```bash
npm install
```

Using yarn:

```bash
yarn install
```

Using pnpm:

```bash
pnpm install
```

3. **Set up environment variables** (if needed)

```bash
cp .env.example .env.local
```

4. **Run the development server**

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

Using pnpm:

```bash
pnpm dev
```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
sms-dashboard/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with theme provider
│   ├── page.tsx                 # Main dashboard page
│   └── globals.css              # Global styles & CSS variables
├── components/
│   ├── sections/                # Dashboard section components
│   │   ├── main-dashboard.tsx
│   │   ├── finance-overview.tsx
│   │   ├── hr-summary.tsx
│   │   ├── academic-performance.tsx
│   │   ├── alerts-notifications.tsx
│   │   └── feedback-complaints.tsx
│   ├── ui/                      # Reusable UI components
│   ├── dashboard-header.tsx     # Main header component
│   ├── theme-menu.tsx          # Theme selection menu
│   ├── theme-toggle.tsx        # Theme toggle button
│   └── theme-provider.tsx      # Theme context provider
├── hooks/                       # Custom React hooks
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts                # Utility functions
├── public/                      # Static assets
├── .gitignore
├── .gitattributes
├── package.json
├── tsconfig.json
└── tailwind.config.ts
```

## 🎯 Usage

### Navigation

The dashboard features a vertical sidebar navigation with the following sections:

- **Overview** - Main dashboard with key metrics
- **Finance** - Financial management and reporting
- **People** - HR and attendance management
- **Academic** - Academic performance tracking
- **Admin** - Administrative functions

### Theme Switching

Click the sun/moon icon in the header to switch between:

- **Light Mode** - For daytime use
- **Dark Mode** - For reduced eye strain
- **System** - Follows your OS preference

### Quick Stats Sidebar

The sidebar displays quick statistics:

- Total Students
- Total Staff
- Number of Campuses

## 🎨 Customization

### Colors

Edit the color scheme in `app/globals.css`:

```css
:root {
  --background: oklch(0.98 0.005 85);
  --foreground: oklch(0.18 0.02 240);
  /* ... more color variables */
}
```

### Components

All components are located in the `components/` directory and can be customized as needed.

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub/GitLab/Bitbucket
2. Import your repository on [Vercel](https://vercel.com)
3. Vercel will automatically detect Next.js and deploy

### Manual Build

```bash
npm run build
npm run start
```

## 📦 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [React](https://react.dev/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Radix UI](https://www.radix-ui.com/) - Accessible components
- [Lucide React](https://lucide.dev/) - Icons
- [Next Themes](https://github.com/pacocoursey/next-themes) - Theme management
- [Vercel Analytics](https://vercel.com/analytics) - Analytics

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please contact the development team.

## 🙏 Acknowledgments

- Design inspiration from modern dashboard applications
- Component library from Radix UI and shadcn/ui
- Icons from Lucide React

---

**Built with ❤️ for modern school management**
