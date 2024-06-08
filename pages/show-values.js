import { useAppContext } from '../context/AppContext';
import { useEffect } from 'react';
import Link from 'next/link';

const ShowValuesPage = () => {
  const { state } = useAppContext();

  useEffect(() => {
    console.log('ShowValuesPage state on mount:', state);
  }, []);

  useEffect(() => {
    console.log('ShowValuesPage state update:', state);
  }, []);

  console.log("-------------------" + state.variable1)

  return (
    <div>
      <h1>Show Values Page</h1>
      <p>Variable 1: {state.variable1}</p>
      <p>Variable 2: {state.variable2}</p>
      <div>
        <Link href="/">
           Home Page  
        </Link>
        <Link href="/about">
           About Page  
        </Link>
      </div>
    </div>
  );
};

export default ShowValuesPage;