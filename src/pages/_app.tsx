import Layout from "@/globals/components/Layout/layout";
import "@/styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import type { AppProps } from "next/app";
import { Router } from "next/router";

const progress = new ProgressBar({
  size: 2,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.start);

export default function App({ Component, pageProps }: AppProps) {
  console.log("Render");

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
