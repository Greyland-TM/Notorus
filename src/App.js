import './App.scss';
// import './css/style.css';
// import GridDemo from './Grid/Grid';
import SectionTours from './Components/SectionTours';
import Features from './Components/SectionFeatures';
import Popular from './Components/SectionPopular';
import Stories from './Components/Stories';
import Header from './Components/Header';
import Booking from './Components/Booking';
import Footer from './Components/Footer';
import Navigation from './Components/Navigation';
import Popup from './Components/Popup';

function App() {
  return (
    <div>
      <body>
        <Navigation></Navigation>
        <Header></Header>
        <SectionTours></SectionTours>
        <Features></Features>
        <Popular></Popular>
        <Stories></Stories>
        <Booking></Booking>
        <Footer></Footer>
        <Popup></Popup>
      </body>
    </div>
  );
}

export default App;
