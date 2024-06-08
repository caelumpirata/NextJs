import Link from 'next/link';
import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';

const HomePage = () => {
  const { state, updateState } = useAppContext();

  useEffect(() => {
    console.log('HomePage useEffect triggered');
    updateState({ variable1: 'Value1', variable2: 'Value2' });
    console.log('State updated in HomePage:', { variable1: 'Value1', variable2: 'Value2' });
  }, []); // Empty dependency array ensures this runs only once

  const handleSubmit = async () => {
    const response = await fetch('/api/endpoint', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(state),
    });
    const data = await response.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Home Page</h1>
      <p>Variable 1: {state.variable1}</p>
      <p>Variable 2: {state.variable2}</p>
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <Link href="/about">
          About Page
        </Link>
        <Link href="/show-values">
          Show Values Page
        </Link>
      </div>
    </div>
  );
};

export default HomePage;