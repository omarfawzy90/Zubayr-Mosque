import React, { useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";
import theme from "./styles/theme";
import Home from "./pages/Home";
import ZubayrInfo from "./pages/ZubayrInfo";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  
  // Background image URL
  const backgroundImageUrl = `${process.env.PUBLIC_URL}/images/zubayer.webp`;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: "100vh",
        }}
      >
        <Box
          sx={{
            flex: 1,
            background: `
              linear-gradient(rgba(31, 74, 61, 0.6), rgba(31, 74, 61, 0.6)),
              url('${backgroundImageUrl}')
            `,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
          {currentPage === "home" ? <Home /> : <ZubayrInfo />}
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
