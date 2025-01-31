"use client";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Layout({ children }) {
  return (
    <body>
      <Navbar></Navbar>
      {children}
      <Footer></Footer>
    </body>
  );
}
