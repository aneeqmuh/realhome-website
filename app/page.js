import Image from "next/image";
import Header from './_components/Header'
import Banner from "./_components/Banner";
import AboutUs from "./_components/AboutUs";
import Bismillah from "./_components/Bismillah";
import OurServices from "./_components/OurServices"
import WaveDivider from "./_components/WaveDivider";
import CurveDivider from "./_components/CurveDivider";
import WhyChooseUs from "./_components/WhyChooseUs"
import RequestVisit from "./_components/RequestVisit"
import Footer from "./_components/Footer"
import WhatsAppButton from './_components/WhatsAppButton';



export default function Home() {
  return (
    <>
      <WhatsAppButton/>

      <Header/>
      <Banner/>
      <AboutUs />
      {/* <WaveDivider/> */}     <OurServices/>
      {/* <CurveDivider/> */}
      <WhyChooseUs/>
      <RequestVisit/>
      <Footer/>

    </>
  );
}
