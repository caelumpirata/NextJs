import { useState } from "react";

const ProjectN = () => {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [gender, setGender] = useState("");
  const [numerologyResults, setNumerologyResults] = useState(null);

  const handleDateChange = (e) => setDate(e.target.value);
  const handleTimeChange = (e) => setTime(e.target.value);
  const handleGenderChange = (e) => setGender(e.target.value);

  const handleCalculateNumerology = () => {
    if (!date || !time || !gender) {
      alert("Please fill out all required fields.");
      return;
    }

    // Example logic for calculating numerology (replace with actual logic)
    setNumerologyResults({
      driver: "Driver result",
      monthSingleDigit: "Month single digit result",
      finalSingleDigitYear: "Final single digit year result",
      conductor: "Conductor result",
      plane: "Plane result",
      element: "Element result",
      whatDriverSays: "What driver says about you result",
    });
  };

  return (
    <div className="h-full flex flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row mx-auto p-8 rounded-lg w-full">
        <div className="md:w-1/2 mb-8 md:mb-0 m-8 bigger-padding">
          <h1 className="text-4xl font-bold titillium-web-black">PROJECT-N</h1>
          <h2 className="mb-6 bigger-font">Please enter your birth date.</h2>
          <input
            type="date"
            id="inputDate"
            name="dateInput"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 mb-4"
            value={date}
            onChange={handleDateChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto p-8 rounded-lg w-full">
        <div className="md:w-1/2 mb-8 md:mb-0 m-8 bigger-padding">
          <h1 className="text-4xl font-bold titillium-web-black">PROJECT-N</h1>
          <h2 className="mb-6 bigger-font">Please enter your birth time.</h2>
          <input
            type="time"
            id="inputTime"
            name="timeInput"
            className="w-full px-4 py-3 rounded-lg bg-gray-700 border border-gray-600 text-white focus:outline-none focus:border-blue-500 mb-4"
            value={time}
            onChange={handleTimeChange}
            required
          />
        </div>
      </div>

      <div className="flex flex-col md:flex-row mx-auto p-8 rounded-lg w-full">
        <div className="md:w-1/2 mb-8 md:mb-0 m-8 bigger-padding">
          <h1 className="text-4xl font-bold titillium-web-black">PROJECT-N</h1>
          <h2 className="mb-6 bigger-font">Please select your gender.</h2>
          <div className="mb-4">
            <div className="flex items-center mt-2">
              <input
                type="radio"
                name="gender"
                id="male"
                value="Male"
                className="form-radio h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                onChange={handleGenderChange}
                required
              />
              <label htmlFor="male" className="ml-4 text-white bigger-font">
                Male🙋‍♂️
              </label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="radio"
                name="gender"
                id="female"
                value="Female"
                className="form-radio h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                onChange={handleGenderChange}
                required
              />
              <label htmlFor="female" className="ml-4 text-white bigger-font">
                Female🙋‍♀️
              </label>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleCalculateNumerology}
        className="w-full btn text-white font-bold py-3 px-6 rounded hover:bg-blue-600"
      >
        Calculate Numerology
      </button>

      {numerologyResults && (
        <div className="flex flex-col md:flex-row mx-auto p-8 rounded-lg w-full">
          <div className="md:w-1/2 m-8 mt-28">
            <table className="w-full h-full bg-gray-700 text-white text-xl shadow-2xl">
              <tr>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
              </tr>
              <tr>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
              </tr>
              <tr>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48 w-48"></th>
                <th className="border border-gray-600 p-6 h-48"></th>
              </tr>
            </table>
          </div>
          <div className="md:w-1/2 mb-8 md:mb-0 m-8 bigger-padding mt-28">
            <h1 className="text-4xl font-bold">PROJECT-N</h1>
            <h2 className="mb-6 bigger-font">Numerology Results</h2>
            <div className="text-white">
              <p className="bigger-font">{numerologyResults.driver}</p>
              <p className="bigger-font">{numerologyResults.monthSingleDigit}</p>
              <p className="bigger-font">{numerologyResults.finalSingleDigitYear}</p>
              <p className="bigger-font">{numerologyResults.conductor}</p>
              <p className="bigger-font">{numerologyResults.plane}</p>
              <p className="bigger-font">{numerologyResults.element}</p>
              <p className="bigger-font">{numerologyResults.whatDriverSays}</p>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="w-full btn text-white font-bold py-3 px-6 rounded hover:bg-blue-600"
            >
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectN;
