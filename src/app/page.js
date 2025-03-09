import Image from "next/image";
import styles from "../styles/page.module.css";
import Navbar from "@/components/Navbar/Navbar";
import Spline from "@splinetool/react-spline";
import SplineComp from "@/components/Spline/Spline";
import Homemid from "@/components/homemid/Homemid";
import Feature from "@/components/Features/Feature";

export default function Home() {
  return(
    <div>
        <SplineComp></SplineComp>
        <Homemid></Homemid>
        <Feature></Feature>
    </div>
  )
}
