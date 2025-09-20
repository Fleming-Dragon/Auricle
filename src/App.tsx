import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import { LandingPage } from "@/pages/LandingPage";
import { ChooseTherapistPage } from "@/pages/ChooseTherapistPage";
import { LiveSessionPage } from "@/pages/LiveSessionPage";
import { SessionSummaryPage } from "@/pages/SessionSummaryPage";

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="auricle-ui-theme">
      <Router>
        <div className="relative">
          <ThemeToggle />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/therapists" element={<ChooseTherapistPage />} />
            <Route path="/session" element={<LiveSessionPage />} />
            <Route path="/summary" element={<SessionSummaryPage />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
