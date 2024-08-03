import React from 'react';
import Cover from './components/Cover';
import TvSection from './components/TvSection';
import DowonlodSection from './components/DowonlodSection';
import WeatchSection from './components/WeatchSection';
import ProfileSection from './components/ProfileSection';
import Questions from './components/Questions';
import Footer from './components/Footer';



const App = () => {
  return (
    <div>
       <Cover/>
       <TvSection/>
       <DowonlodSection/>
       <WeatchSection/>
       <ProfileSection/>
       <Questions/>
       <Footer/>
    </div>
  );
};

export default App;