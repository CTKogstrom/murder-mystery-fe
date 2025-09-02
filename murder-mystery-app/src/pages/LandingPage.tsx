import React, { useState } from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { useNavigate } from 'react-router-dom';

const SECRET_PASSWORD = 'jessicarox';

const LandingPage = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const authContext = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === SECRET_PASSWORD) {
      setError('');

      authContext.login('user');
      
      navigate('/dashboard');
    } else {
      setError('Incorrect, try again');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen min-w-full justify-center px-12">
      <h2 className="text-2xl font-semibold mb-6">Enter the Secret Password</h2>
      <form onSubmit={handleSubmit} className="flex flex-col items-center w-full max-w-xs">
        <input
          type="password"
          placeholder="Secret Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          className={`text-lg p-1 w-full border rounded focus:outline-none focus:ring-2 focus:ring-gray-600 ${error ? 'mb-0' : 'mb-5'}`}
        />
        {error && (
          <div className="text-spooky-error mt-2 mb-2">{error}</div>
        )}
        <button
          type="submit"
          className={`mt-${error ? '2' : '5'} px-5 py-2 text-lg bg-spooky-accent text-white rounded transition`}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default LandingPage;