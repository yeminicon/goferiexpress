import React from "react";
import ReactDOM from "react-dom/client";
import { NextUIProvider } from "@nextui-org/react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import { HelmetProvider } from "react-helmet-async";
import { router } from "@/App";
import "./index.css";
import { StoreProvider } from "./store/context";

const helmetContext = {};


ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <StoreProvider>
          <HelmetProvider context={helmetContext}>
            <RouterProvider router={router} />
          </HelmetProvider>
        </StoreProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>,
);
