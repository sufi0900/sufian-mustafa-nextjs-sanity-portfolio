import "./HomeComponent/font.css";
import "./HomeComponent/aos.css";
import "./globals.css";
import "./HomeComponent/body.dark-mode.css";
import Navbar from "./HomeComponent/Navbar";
import AuthProvider from "./HomeComponent/SessionProvider";
import theme from "./HomeComponent/theme";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Analytics } from "@vercel/analytics/react";

import Head from "next/head";

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <AuthProvider>
        <Head>
          <meta
            name="google-site-verification"
            content="k0JxDLTBR6jAV0eTVc6UxwWSEuoyBpz1c4k0zI7mKL4"
          />
        </Head>
        <body>
          <div className="body">
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <Navbar />
              <main className="custom-cursor">{children}</main>
              <Analytics />
              <SpeedInsights />
            </ThemeProvider>
          </div>
        </body>
      </AuthProvider>
    </html>
  );
}
