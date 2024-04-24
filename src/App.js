import "./App.css";

import ApplicationSection from "./StickyBar.js";
import BenefitsSection from "./BenefitsSection.js";
import CardDetails from "./CardDetails.js";
import CommitmentSection from "./Commitment.js";
import Footer from "./Footer.js";
import Header from "./Header.js";
import HeroSection from "./Hero.js";
import InstantCreditSection from "./InstantCredit.js";
import SupportSection from "./Supportsection.js";

function App() {
  return (
    <div className="App">
      <Header/>
      <HeroSection />
      <CardDetails />
      <ApplicationSection />
      <BenefitsSection />
      <InstantCreditSection />
      <SupportSection/>
      <CommitmentSection/>
      <Footer/>
    </div>
  );
}

export default App;
