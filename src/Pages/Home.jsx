import HeroComp from "../Components/Hero/Hero";
import NavbarComp from "../Components/Navbar/Navbar";
import ServicesComp from "../Components/Services/Services";

function HomePage() {
  return (
    <div>
      <>
        <NavbarComp />
      </>
      <>
        <HeroComp />
      </>
      <>
        <ServicesComp />
      </>
    </div>
  );
}

export default HomePage;
