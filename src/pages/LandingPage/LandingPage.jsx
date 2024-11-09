import Section from "../../Sections/Section";
import SectionTwo from "../../Sections/SectionTwo";
import SectionThree from "../../Sections/SectionThree";
import { SectionFour } from "../../Sections/SectionFour";

const LandingPage = ({ page }) => {
  return (
    <div className="bg-[#080719] text-white">
      {/* Landing Page - {page === "web" ? "Web" : "Mobile"} */}
      <Section page={page} />
      <SectionTwo page={page} />
      <SectionThree page={page} />
      <SectionFour />
    </div>
  );
};

export default LandingPage;
