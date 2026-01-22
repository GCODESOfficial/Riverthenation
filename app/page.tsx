// import Image from "next/image";
import CoreActivities from "./components/CoreActivities";
import Hero from "./components/Hero";
import MissionVision from "./components/MissionVision";
import RevivingHeartsSection from "./components/RevivingHeartsSection";
// import QuoteSection from "./components/QuoteSection";
import WhoWeAre from "./components/WhoWeAre";
// import Homehero from "./components/Homehero";

export default function Home() {
  return (
    <div className="">
     {/* <Homehero /> */}
     <Hero />
     {/* <QuoteSection /> */}
     <WhoWeAre />
     <MissionVision />
     <CoreActivities />
     <RevivingHeartsSection />
    </div>
  );
}
