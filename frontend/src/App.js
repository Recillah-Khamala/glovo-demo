import React, { useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import Address from "./components/Address";
import Footer from "./components/Footer";
import Login from "./components/Login";
import HomePage from "./components/HomePage";
import { useAuth } from "./context/AuthContext";
import { useSelector, useDispatch } from "react-redux";
import { setLoginView } from "./store/loginSlice";

// Error Boundary Component
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h1>
            <p className="text-gray-600 mb-4">{this.state.error?.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const AppContent = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Reset login view when component mounts
    dispatch(setLoginView(null));
  }, [dispatch]);

  return (
    <div>
      <ErrorBoundary>
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<Address />} />
          
          {/* Login page */}
          <Route path="/login" element={<Login />} />
          
          {/* Protected routes - only accessible after login */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />
          
          {/* Address page - only accessible after login */}
          <Route
            path="/address"
            element={
              <ProtectedRoute>
                <div className="min-h-screen flex flex-col">
                  <main className="flex-grow">
                    <Address />
                  </main>
                  <Footer />
                </div>
              </ProtectedRoute>
            }
          />

          {/* Catch-all route */}
          <Route
            path="*"
            element={
              <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="text-center">
                  <h1 className="text-2xl font-bold text-gray-800 mb-4">404 - Page Not Found</h1>
                  <p className="text-gray-600 mb-4">The page you're looking for doesn't exist.</p>
                  <button
                    onClick={() => window.history.back()}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            }
          />
        </Routes>
      </ErrorBoundary>
    </div>
  );
};

const App = () => {
  return <AppContent />;
};

export default App;
