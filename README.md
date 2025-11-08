# Glovo - Last-Mile Delivery Frontend

This is the frontend application for the Last-Mile Delivery feature, built with React + TypeScript + Redux + Tailwind CSS.

## 🛠 Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Redux Toolkit** - State management
- **React Router** - Navigation
- **Tailwind CSS** - Styling
- **Axios** - HTTP client
- **Vite** - Build tool
- **Jest + React Testing Library** - Unit/Integration testing
- **Playwright** - End-to-end testing

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Backend API running on `http://localhost:3000` (see [glovob-demo](https://github.com/Recillah-Khamala/glovob-demo) repository)

## 🚀 Getting Started

### Installation

```bash
# Install dependencies
npm install
```

### Environment Setup

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:3000
```

### Running the Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3001`

### Building for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🧪 Testing

### Run Unit/Integration Tests

```bash
npm test
```

### Run Tests in Watch Mode

```bash
npm run test:watch
```

### Run Tests with Coverage

```bash
npm run test:coverage
```

### Run End-to-End Tests

```bash
npm run test:e2e
```

## 📁 Project Structure

```
src/
├── api/              # API client and service functions
├── components/        # Reusable UI components
├── features/          # Feature-specific modules
├── mock/             # Mock data for development
├── pages/            # Page components
├── routes/           # Route configuration
├── store/            # Redux store and slices
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## 🔌 Connecting to Backend

The frontend is configured to connect to the Rails API backend. Make sure:

1. The backend is running on `http://localhost:3000`
2. CORS is properly configured in the backend
3. The `.env` file has the correct `VITE_API_BASE_URL`

### API Endpoints Used

- `GET /offices` - Fetch all transport offices
- `GET /offices/:id` - Get specific office details
- `POST /orders` - Create a new delivery order
- `GET /orders/:id` - Get order details for tracking
- `PATCH /orders/:id/status` - Update order status
- `GET /users/:id/orders` - Get user's order history

## 📱 Features

- **User Profile** - View user information and recent deliveries
- **Last-Mile Delivery** - Create new delivery requests
- **Order Tracking** - Track delivery status with real-time updates

## 🎨 Styling

This project uses **Tailwind CSS exclusively** for styling. All components are styled using Tailwind utility classes.

## 📝 Code Quality

- **ESLint** - Linting
- **Prettier** - Code formatting

Run linting:
```bash
npm run lint
```

## 🚀 Deployment

This frontend can be deployed to:

- **Vercel** - Recommended for React apps
- **Netlify** - Easy deployment with CI/CD
- **GitHub Pages** - Free hosting for static sites

Make sure to set the `VITE_API_BASE_URL` environment variable in your deployment platform.

## 📚 Next Steps

1. Set up authentication (currently using mock user)
2. Add real-time order status updates
3. Implement push notifications
4. Add payment integration
5. Enhance error handling and user feedback

## 👥 Author

**Recillah Khamala**

- GitHub: [@Recillah-Khamala](https://github.com/Recillah-Khamala)

## 📄 License

This project is MIT licensed.
