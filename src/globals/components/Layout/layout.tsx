import Head from "next/head";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <meta charSet="UTF-8" />

        {/* <!-- Viewport --> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* <!--  Primary --> */}
        <meta name="title" content="Airbnb clone" />
        <meta name="description" content="Airbnb clone" />
        <meta name="keywords" content="Airbnb clone made with nextjs" />
        <meta name="author" content="Eryscode7, @mozoerys@gmail.com" />
        <meta name="application_name" content="Airbnb clone" />

        {/* <!--  Open Graph / Facebook --> */}
        <meta property="og:title" content="Airbnb clone" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="" />
        <meta property="og:site_name" content="Airbnb clone" />
        <meta
          property="og:url"
          //   content="https://nextjs-template-eryscode7.vercel.app/"
        />
        <meta property="og:image" content="/next.svg" />
        <meta property="og:image:width" content="650" />
        <meta property="og:image:height" content="350" />
        <meta property="og:description" content="Airbnb clone Website" />
      </Head>
      <>
        {/* HEADER OR NAVBAR */}
        {/* <Navbar /> */}

        {/* MAIN PAGE */}
        <main>{children}</main>

        {/* FOOTER */}
        {/* <Footer /> */}
      </>
    </>
  );
};

export default Layout;
