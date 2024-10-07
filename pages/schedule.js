import { useSession, signIn } from 'next-auth/react';
import React, { useState } from 'react';
import Calendar from '../components/Calendar';
import RequestForm from '../components/RequestForm';
import { sendEmail } from '../utils/email';
import Component from '../components/login-btn'; // Your login component


const Schedule = () => {
  const { data: session, status } = useSession();
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateSelect = (date) => {
    setSelectedDate(date);
  };

  const handleFormSubmit = async ({ name, email, time}) => {
    const requestData = {
      name,
      email,
      date: selectedDate,
      time,
    };
    console.log('requestData');
    console.log(requestData);
    await sendEmail(requestData);
    alert('Request submitted successfully and confirmation email was sent to you inbox!');
  };

  // Check if session is still loading
  if (status === 'loading') {
    return <div>Loading...</div>;
  }
  // If no session, prompt to sign in
  if (!session) {
    return (
      <div className="flex flex-col justify-center items-center m-4">
        <button
          className="bg-pink-400 text-white p-1 rounded-md m-1 text-lg"
          onClick={() => signIn('google')} // Trigger sign-in flow
        >
          Login with Google
        </button>
        <Component / >
        <div   style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30vh', // Full height of the viewport
          flexDirection: 'column',
          textAlign: 'center',
        }}>
        <h1 className="text-3xl my-3" > Dog Walker Schedule</h1>
        <Calendar onDateSelect={handleDateSelect} />
        {selectedDate && (
          <RequestForm onSubmit={handleFormSubmit} />
        )}
        </div>
      </div>
    );
  }

  // If user is logged in, show the schedule and form
  return (
    <div className="flex flex-col justify-center items-center m-4" >
      <Component />
      <div  style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '30vh', // Full height of the viewport
        flexDirection: 'column',
        textAlign: 'center',
      }}>
      <h1 className="text-3xl my-3 font-bold underline"> Dog Walker Schedule</h1>
      
      <Calendar onDateSelect={handleDateSelect} />
      {selectedDate && (
        <RequestForm onSubmit={handleFormSubmit} session ={session}/>
      )}
      </div>
    </div>
  );
};

export default Schedule;
