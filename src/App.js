import './App.scss';
// import GridDemo from './Grid/Grid';
import SectionTours from './Components/SectionTours';
import Features from './Components/SectionFeatures';
import Popular from './Components/SectionPopular';
import Stories from './Components/Stories';
import Header from './Components/Header';
import Booking from './Components/Booking';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <body>
        <Header></Header>
        <SectionTours></SectionTours>
        <Features></Features>
        <Popular></Popular>
        <Stories></Stories>
        <Booking></Booking>
        <Footer></Footer>
      </body>
    </div>
  );
}

export default App;
