import React, { useState, useEffect } from 'react';

//TODO: add location, duration, and special requests
const RequestForm = ({ onSubmit, session }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [time, setTime] = useState('');

  // Pre-fill form fields with session data when the component loads or session changes
  useEffect(() => {
    if (session) {
      console.log('Session data found. Pre-filling form.');
      setName(session.user.name);
      setEmail(session.user.email);
    }
  }, [session]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Submit the form with the current state values
    onSubmit({ name, email, time });

    // Reset the form after submission
    setName('');
    setEmail('');
    setTime('');
  };

  // Conditional rendering based on the existence of session data
  if (!session) {
    return (
      <form onSubmit={handleSubmit}>
        <h2>Request a Walk</h2>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Preferred Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }

  // Form rendering when session data is present
  return (
    <form onSubmit={handleSubmit}>
      <h2>Request a Walk</h2>
      <div>
        <label>Name: {session.user.name}</label>
      </div>
      <div>
        <label>Email: {session.user.email}</label>
      </div>
      <div>
        <label>Preferred Time:</label>
        <input
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default RequestForm;
