import "./globals.css";
import Header from "../components/Header";

export const metadata = {
  title: "Abstract",
  description: "Creatre with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
