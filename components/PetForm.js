import { useState } from 'react';

const PetForm = () => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ petName, ownerName }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Something went wrong');
      }

      setMessage('Pet added successfully!');
      setPetName('');
      setOwnerName('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="petName" className="block text-white text-sm font-bold mb-2">Pet Name</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="ownerName" className="block text-white text-sm font-bold mb-2">Owner Name</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>
      {message && <p className="text-sm text-green-500">{message}</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Pet
      </button>
    </form>
  );
};

export default PetForm;
