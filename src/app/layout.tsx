import { ImagePath } from "@/Constant";
import "../index.scss";
import MainProvider from "./MainProvider";
import "remixicon/fonts/remixicon.css";
import "./globals.css";

export default function RootLayout({
  children,
  params: { lng },
}: {
  children: React.ReactNode;
  params: { lng: string };
}) {
  return (
    <html lang={lng}>
      <head>
        <title>Zeta admin dashboard</title>
        <link
          rel="icon"
          href={`../../assets/images/logo/favicon-icon.png`}
          type="image/x-icon"
        />
        <link
          rel="shortcut icon"
          href={`../../assets/images/logo/favicon-icon.png`}
          type="image/x-icon"
        />
        <script
          type="text/javascript"
          src="https://maps.googleapis.com/maps/api/js?v=3.exp"
        ></script>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap"
          rel="stylesheet"
        ></link>
      </head>
      <body id="mainBody" className="light">
        <MainProvider>{children}</MainProvider>
      </body>
    </html>
  );
}
