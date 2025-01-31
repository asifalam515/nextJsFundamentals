import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
export const metadata = {
  title: "Login",
  description: "modern ui using next js",
};

export default function Layout({ children }) {
  return (
    <body>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </body>
  );
}
