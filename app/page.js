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
      <div className="w-full text-center pt-3 pb-1 bg-gradient-to-b from-red-100 to-white">
        <p className="text-xl text-gray-900 italic tracking-wide">
          بِسْمِ ٱللّٰهِ ٱلرَّحْمَـٰنِ ٱلرَّحِيمِ
        </p>
      </div>

      <Header/>
      <Banner/>
      <AboutUs />
      <WaveDivider/>
      <OurServices/>
      <CurveDivider/>
      <WhyChooseUs/>
      <RequestVisit/>
      <Footer/>

    </>
  );
}
