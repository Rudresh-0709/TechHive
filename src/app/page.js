import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Spline from "@splinetool/react-spline";
import SplineComp from "@/components/Spline/Spline";

export default function Home() {
  return(
    <div>
        <SplineComp></SplineComp>
    </div>
  )
}
