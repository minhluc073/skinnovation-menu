import { useRouter } from "next/router";
import { useEffect } from "react";

import AppProvider from "@context/app-context";
// import "../../public/assets/font-icomoon/font-iconmoon.css";
import "@styles/styles.scss";
import "@styles/tailwind.scss";

import { ToastContainer } from "react-toastify";
import ScrollToTop from "react-scroll-to-top";
import * as gtag from "../lib/gtag";

const isProduction = process.env.NODE_ENV === "production";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      /* invoke analytics function only for production */
      if (!gtag) {
        console.warn("Google Analytics script hasn't initialized.");
      }
      if (isProduction && gtag) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  // eslint-disable-next-line react/jsx-props-no-spreading

  return (
    <AppProvider>
      <Component {...pageProps} />
      <ToastContainer position="bottom-left" autoClose={3000} />
      {/* <ScrollToTop
        smooth
        component={<i className="fal fa-arrow-to-top" />}
        style={{
          backgroundColor: "#f7f5f4",
          borderRadius: "999px",
          height: "50px",
          width: "50px",
        }}
      /> */}
    </AppProvider>
  );
}

export default MyApp;
