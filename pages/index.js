import PetForm from '../components/PetForm';
import NewForm from '../components/NewForm';
import NumerologyForm from '@/components/NumerologyForm';

const Home = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl text-white mb-6">Add a New Pet</h1>
        {/* <PetForm /> */}
        {/* <NewForm /> */}
        <NumerologyForm />

      </div>
    </div>
  );
};

export default Home;
