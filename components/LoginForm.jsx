'use client';

import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({ action: '' });

  const doSocialLogin = async (event) => {
    event.preventDefault(); // Prevents the default form submission
    console.log('Form submitted');
    
    // Here, formData is your React state, so access it directly
    const action = formData.action;
    console.log('Action:', action);

    // You can add logic for login with the specific provider
    return { success: true };
  };

  return (
    <form onSubmit={doSocialLogin}>
      <button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        onClick={() => setFormData({ action: 'google' })}
      >
        Login with Google
      </button>

      <button
        className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
        type="submit"
        onClick={() => setFormData({ action: 'github' })}
      >
        Login with GitHub
      </button>
    </form>
  );
};

export default LoginForm;
