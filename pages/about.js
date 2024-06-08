import { useAppContext } from '../context/AppContext';
import Link from 'next/link';
const AboutPage = () => {
  const { state, updateState } = useAppContext();

  const handleChange = () => {
    // Update state with new values
    updateState({ variable1: 'NewValue1', variable2: 'NewValue2' });
  };

  return (
    <div>
      <h1>About Page</h1>
      <p>Variable 1: {state.variable1}</p>
      <p>Variable 2: {state.variable2}</p>
      <button onClick={handleChange}>Change Values</button>
      <div>
        <Link href="/">
           Home Page  
        </Link>
        <Link href="/show-values">
           Show Values Page  
        </Link>
      </div>
    </div>
  );
};

export default AboutPage;