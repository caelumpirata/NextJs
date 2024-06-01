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
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="time" >Time</label>
        <input
          type="time"
          id="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
        />
      </div>
      <div className="mb-6">
        <label htmlFor="gender" >Gender</label>
        <select
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="">Select gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      {message && <p className="text-sm text-green-500">{message}</p>}
      <button type="submit">
        Save Data
      </button>
    </form>
  );
};

export default NewForm;
