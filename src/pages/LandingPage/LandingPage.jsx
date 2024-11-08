import Section from "../../Sections/Section";

const LandingPage = ({ page }) => {
  return (
    <div className="bg-green-500 ">
      {/* Landing Page - {page === "web" ? "Web" : "Mobile"} */}
      <Section page={page} />
    </div>
  );
};

export default LandingPage;
