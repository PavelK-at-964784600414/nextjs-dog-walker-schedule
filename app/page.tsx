import Link from 'next/link';

export default function Home() {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh', // Full height of the viewport
      flexDirection: 'column',
      textAlign: 'center',
    }}>
      <h1>Welcome to the Dog Walker Schedule</h1>
      <Link href="/schedule" style={{
        color: 'blue',
        textDecoration: 'underline',
        marginTop: '20px', // Space between text and button
        fontSize: '18px',
      }}>
        Go to Schedule
      </Link>
    </div>
  );
}
