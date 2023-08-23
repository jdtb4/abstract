import "./globals.css";
import Header from "../components/Header";
import Search from "@/components/Search";

export const metadata = {
  title: "Abstract",
  description: "Creatre with Nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <Search />
        {children}
      </body>
    </html>
  );
}
