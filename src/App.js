import React from "react";
import {BrowserRouter as Router} from "react-router-dom";

// import Header from "./components/Header";
// import HeroSection from "./components/HeroSection";
// import LogoSection from "./components/LogoSection";
// import AboutSection from "./components/AboutSection";
import NewsSection from "./components/NewsSection";
// import DocumentsSection from './components/DocumentsSection';
import AchievementsSection from './components/AchievementsSection';
// import InviteSection from './components/InviteSection';
// import ReportsSection from './components/ReportsSection';
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function App() {
  return (
      <Router>
        {/*<Header/>*/}
        <main>
          {/*<HeroSection/>*/}
          {/*<LogoSection/>*/}
          {/*<AboutSection/>*/}
          <NewsSection/>
          {/*<DocumentsSection/>*/}
          {/*<ReportsSection/>*/}
          <AchievementsSection/>
          {/*<InviteSection/>*/}
          <ContactSection/>
        </main>
        <Footer/>
      </Router>
  );
}

export default App;
