import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.css"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <h1 className="bg-primary text-center text-white pt-3 pb-3" >My Form Using REST API</h1>
        {children}
        <div className="bg-primary text-center text-white position-fixed bottom-0 w-100">&copy;rights 2024</div>
        </body>
    </html>
  );
}
