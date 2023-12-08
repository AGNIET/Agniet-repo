import React from "react";
//styling
import "./App.scss";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import { AgnietBg2, HomepageBg } from "./assets";

// routing
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// shared routes
import Header from "./shared/Header/Header";
import Footer from "./shared/Footer/Footer";

//routes
import Homepage from "./components/routes/private/homepage/Homepage";
import AboutPage from "./components/routes/private/about/AboutPage";
import ContactUs from "./components/routes/private/contactUs/ContactUs";
import Services from "./components/routes/private/services/Services";
import Shop from "./components/routes/private/shop/Shop";

//services routes
import ManagedItServices from "./components/routes/private/services/managedItServices";
import BusinessContinuityPlanning from "./components/routes/private/services/businessContinuityPlanning";
import BackupDisasterRecovery from "./components/routes/private/services/backupDisasterRecovery";
import ItConsulting from "./components/routes/private/services/itConsulting";
import NetworkSecurity from "./components/routes/private/services/networkSecurity";
import CloudServices from "./components/routes/private/services/cloudServices";
import VOIP from "./components/routes/private/services/voIP";
import Virtualization from "./components/routes/private/services/virtualization";
import EmailSpamProtection from "./components/routes/private/services/emailSpamProtection";
import MicrosoftOffice from "./components/routes/private/services/microsoftOffice";
import AllIn1Websites from "./components/routes/private/services/allin1Webistes";

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${AgnietBg2})`,
        backgroundSize: "100%",
        backgroundPositionY: "100%",
      }}
    >
      <Router>
        <div
          style={{
            backgroundImage: `url(${AgnietBg2})`,
            backgroundSize: "100%",
            backgroundPositionY: "100%",

            // backgroundColor: "#14134F",
          }}
        >
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>

        <div
          style={{
            backgroundImage: `url(${AgnietBg2})`,
            // backgroundSize: "100%",
            // backgroundPositionY: "100%",

            // backgroundColor: "#14134F",
          }}
        >
          <Routes>
            <Route path="/services" element={<Services />} />

            <Route
              path="/services/managedItServices"
              element={<ManagedItServices />}
            />
            <Route
              path="/services/businessContinuityPlanning"
              element={<BusinessContinuityPlanning />}
            />
            <Route
              path="/services/backupDisasterRecovery"
              element={<BackupDisasterRecovery />}
            />
            <Route path="/services/itConsulting" element={<ItConsulting />} />
            <Route
              path="/services/networkSecurity"
              element={<NetworkSecurity />}
            />
            <Route path="/services/cloudServices" element={<CloudServices />} />
            <Route path="/services/voIP" element={<VOIP />} />
            <Route
              path="/services/virtualization"
              element={<Virtualization />}
            />
            <Route
              path="/services/emailSpamProtection"
              element={<EmailSpamProtection />}
            />
            <Route
              path="/services/microsoftOffice"
              element={<MicrosoftOffice />}
            />
            <Route
              path="/services/allIn1Websites"
              element={<AllIn1Websites />}
            />
            <Route path="/shop" element={<Shop />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contactUs" element={<ContactUs />} />
          </Routes>
        </div>
        <div
          style={{
            backgroundImage: `url(${AgnietBg2})`,
            backgroundSize: "100%",
            backgroundPositionY: "100%",

            // backgroundColor: "#14134F",
          }}
        >
          <Footer />
        </div>
      </Router>
    </div>
  );
}

export default App;
