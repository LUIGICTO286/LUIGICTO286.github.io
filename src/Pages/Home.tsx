// src/Pages/Home.tsx
import { Front } from '../Sections/Front.tsx';
import { ContractAddress } from '../Sections/ContractAddress.tsx';
// import { Roadmap } from '../Sections/Roadmap.tsx';
// import { History }      from '../Sections/History.tsx';
import { Manifesto } from '../Sections/Manifesto/Manifesto.tsx';

export const Home = () => {
  return (
    <div>
      <Front />
      <ContractAddress />
      <Manifesto />
      {/* <Roadmap />                      */}
      {/* <History />                      */}
    </div>
  );
};
