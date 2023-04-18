import Head from "next/head";
import Header from "./components/header";
import "./globals.css";

export const metadata = {
  title: "Latest Earthquakes - TR",
  description: "Latest Earthquakes in Turkey",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="UTF-8" />
        <meta name="description" content={metadata.description} />
        <script async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCRqcLoOQnRgPdnHa-Ov3z9zJDHrT1HMMM"></script>
      </Head>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
