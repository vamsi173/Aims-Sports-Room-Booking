
import React, { useState, useCallback, useEffect } from 'react';
import { User } from './types';
import AuthPage from './components/AuthPage';
import BookingPortal from './components/BookingPortal';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isInitializing, setIsInitializing] = useState(true);

  useEffect(() => {
    try {
      const storedUser = localStorage.getItem('aims_session');
      if (storedUser) {
        setCurrentUser(JSON.parse(storedUser));
      }
    } catch (error) {
      console.error("Failed to parse user from localStorage", error);
      localStorage.removeItem('aims_session');
    }
    setIsInitializing(false);
  }, []);
  
  // This effect hook manages the background of the entire page
  useEffect(() => {
    const body = document.body;
    if (currentUser) {
      body.classList.remove('auth-background');
      body.classList.add('portal-background');
    } else {
      // Apply auth background when logged out or on initial load
      body.classList.remove('portal-background');
      body.classList.add('auth-background');
    }
    
    // Optional: cleanup on component unmount
    return () => {
        body.classList.remove('auth-background', 'portal-background');
    };
  }, [currentUser, isInitializing]);

  const handleLogin = useCallback((user: User) => {
    localStorage.setItem('aims_session', JSON.stringify(user));
    setCurrentUser(user);
  }, []);

  const handleLogout = useCallback(() => {
    localStorage.removeItem('aims_session');
    setCurrentUser(null);
  }, []);

  if (isInitializing) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        {/* The background is handled by the useEffect. This container can be simple. */}
      </div>
    );
  }

  return (
    <>
      {!currentUser ? (
        <AuthPage onAuth={handleLogin} />
      ) : (
        <BookingPortal user={currentUser} onLogout={handleLogout} />
      )}
    </>
  );
};

export default App;