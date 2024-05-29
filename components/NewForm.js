import { useState } from 'react';

const NewForm = () => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [gender, setGender] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/new-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date, time, gender }),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Something went wrong');
      }

      setMessage('Data added successfully!');
      setDate('');
      setTime('');
      setGender('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
      <div className="mb-4">
        <label htmlFor="date" className="block text-white text-sm font-bold mb-2">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="time" className="block text-white text-sm font-bold mb-2">Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="gender" className="block text-white text-sm font-bold mb-2">Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      {message && <p className="text-sm text-green-500">{message}</p>}
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Save Data
      </button>
    </form>
  );
};

export default NewForm;
