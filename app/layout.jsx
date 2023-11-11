import "./font.css";
import Navbar from "./Navbar";
import "./myglobal.css";
import "./aos.css";
import theme from "./theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { Analytics } from "@vercel/analytics/react";
import "./body.dark-mode.css";
import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta
          name="google-site-verification"
          content="k0JxDLTBR6jAV0eTVc6UxwWSEuoyBpz1c4k0zI7mKL4"
        />
      </Head>

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
