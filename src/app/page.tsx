import Navbar from "@/app/components/Navbar";
import Hero from "./components/Hero";
import Manegment from "./components/Manegment";
import Extention from "./components/Extention";
import Customise from "./components/Customise";
import Work from "./components/Work";
import Our from "./components/Our";
import Bar from "./components/Bar";
export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Manegment />
      <Extention />
      <Customise />
      <Work />
      <Our />
      <Bar />
    </div>
  );
}
