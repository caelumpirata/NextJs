import PetForm from '../components/PetForm';
import NewForm from '../components/NewForm';
import NumerologyForm from '@/components/NumerologyForm';
import ProjectN from '@/components/ProjectN';

const Home = () => {
  return (
    <div>
      <div >
        <h1 >Add a New Pet</h1>
        {/* <PetForm /> */}
        {/* <NewForm /> */}
        {/* <NumerologyForm /> */}
        < ProjectN />

      </div>
    </div>
  );
};

export default Home;


// pages/index.js
// import { useState } from 'react';
// import DriverDescription from '../components/DriverDescription';
// import { convertIntToStr } from '../utils/numberUtils';


// export default function Home() {
//     const [driverNumber, setDriverNumber] = useState('');

//     const whatDriverSaysAboutYou = (driverNumber) => {
//       setDriverNumber(driverNumber);
//     };

//     const digits = convertIntToStr(123); // Example usage
// console.log(digits); // Output: [1, 2, 3]

//     return (
//         <div>
//             <h1>What the Driver Says About You</h1>
//             <hr></hr>
//             <button onClick={() => whatDriverSaysAboutYou(1)}>Driver 1</button>
//             <button onClick={() => whatDriverSaysAboutYou(2)}>Driver 2</button>
//             <button onClick={() => whatDriverSaysAboutYou(3)}>Driver 3</button>
//             <button onClick={() => whatDriverSaysAboutYou(4)}>Driver 4</button>
//             <button onClick={() => whatDriverSaysAboutYou(5)}>Driver 5</button>
//             <button onClick={() => whatDriverSaysAboutYou(6)}>Driver 6</button>
//             <button onClick={() => whatDriverSaysAboutYou(7)}>Driver 7</button>
//             <button onClick={() => whatDriverSaysAboutYou(8)}>Driver 8</button>
//             <button onClick={() => whatDriverSaysAboutYou(9)}>Driver 9</button>
//             <button onClick={() => whatDriverSaysAboutYou(11)}>Driver 11</button>
//             <div>
//               <hr></hr>
//                 <DriverDescription driver={driverNumber} />
//             </div>
//         </div>
//     );
// }
