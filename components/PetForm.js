// import { useState } from 'react';

// const PetForm = () => {
//   const [petName, setPetName] = useState('');
//   const [ownerName, setOwnerName] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setMessage('');

//     try {
//       const response = await fetch('/api/pets', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ petName, ownerName }),
//       });

//       if (!response.ok) {
//         const result = await response.json();
//         throw new Error(result.error || 'Something went wrong');
//       }

//       setMessage('Pet added successfully!');
//       setPetName('');
//       setOwnerName('');
//     } catch (err) {
//       setMessage(err.message);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-gray-800 rounded-lg overflow-hidden shadow-md p-6">
//       <div className="mb-4">
//         <label htmlFor="petName" className="block text-white text-sm font-bold mb-2">Pet Name</label>
//         <input
//           type="text"
//           id="petName"
//           value={petName}
//           onChange={(e) => setPetName(e.target.value)}
//           className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
//         />
//       </div>
//       <div className="mb-6">
//         <label htmlFor="ownerName" className="block text-white text-sm font-bold mb-2">Owner Name</label>
//         <input
//           type="text"
//           id="ownerName"
//           value={ownerName}
//           onChange={(e) => setOwnerName(e.target.value)}
//           className="bg-gray-700 appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
//         />
//       </div>
//       {message && <p className="text-sm text-green-500">{message}</p>}
//       <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
//         Add Pet
//       </button>
//     </form>
//   );
// };

// export default PetForm;



import { useState } from 'react';

const PetForm = () => {
  const [petName, setPetName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [fullName, setFullName] = useState('');
  const [message, setMessage] = useState('');
  const [sum, setSum] = useState('');
  const [sixOrNine, setSixOrNine] = useState('');



  // ON CLICK OF BUTTON , CALCULATE FOLLOWING
  const handleButtonClick = async () => {
    const calculatedFullName = `${petName} ${ownerName}`;
    setFullName(calculatedFullName);

    const sum = 9;
    setSum(sum);
    
    setMessage('');


    //   TRYING TO SEND DATA TO API FOR SAVING PURPOSE
    try {
      const response = await fetch('/api/pets', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ petName, ownerName, fullName: calculatedFullName , sum, sixOrNine}),
      });

      if (!response.ok) {
        const result = await response.json();
        throw new Error(result.error || 'Something went wrong');
      }

      setMessage('Pet added successfully!');
      setPetName('');
      setOwnerName('');
      setSixOrNine('');
    } catch (err) {
      setMessage(err.message);
    }
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} >
      <div className="mb-4">
        <label htmlFor="petName" className="block text-white text-sm font-bold mb-2">Pet Name</label>
        <input
          type="text"
          id="petName"
          value={petName}
          onChange={(e) => setPetName(e.target.value)}
          className="bg-gray-700 appearance-none border rounded  py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="ownerName" className="block text-white text-sm font-bold mb-2">Owner Name</label>
        <input
          type="text"
          id="ownerName"
          value={ownerName}
          onChange={(e) => setOwnerName(e.target.value)}
          className="bg-gray-700 appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>

      {/* adding my custom input field */}
      <div className="mb-6">
        <label htmlFor="sixOrNine" className="block text-white text-sm font-bold mb-2">Six or Nine</label>
        <input
          type="text"
          id="sixOrNine"
          value={sixOrNine}
          onChange={(e) => setSixOrNine(e.target.value)}
          className="bg-gray-700 appearance-none border rounded py-2 px-3 text-white leading-tight focus:outline-none focus:bg-gray-600"
        />
      </div>

      <div className="mb-4">
        <button
          type="button"
          onClick={handleButtonClick}
          className="border hover:bg-green-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Add Pet and Show Full Name
        </button>
      </div>
      {fullName && <p className="text-white">Full Name: {fullName}</p>}
      {sixOrNine && <p className="text-white">You selected: {sixOrNine}</p>}
      {sum && <p className="text-white">Hardcoded value is: {sum}</p>}
      {message && <p className="text-sm text-green-500">{message}</p>}


    </form>
  );
};

export default PetForm;
