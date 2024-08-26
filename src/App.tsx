import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";
import { DarkModeProvider } from "./context/DarkModeContext";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import AIChat from "./pages/AIChat";
import About from "./pages/About";
import Contact from "./pages/Contact";
import { ThemeProvider } from "styled-components";
import { Theme } from "./styles/Theme";
import { MobileProvider } from "./context/MobileContext";

export default function App() {
  return (
    <DarkModeProvider>
      <MobileProvider>
        <ThemeProvider theme={Theme}>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="projects" element={<Projects />} />
                <Route path="ai-chat" element={<AIChat />} />
                <Route path="resume" element={<Resume />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </MobileProvider>
    </DarkModeProvider>
  );
}
