import "./font.css";
import Navbar from "./Navbar";
import "./myglobal.css";
import "./aos.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Analytics } from "@vercel/analytics/react";
import "./body.dark-mode.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />
          <main className="custom-cursor">{children}</main>
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
