import { SiVorondesign } from "react-icons/si";
import { FaCode } from "react-icons/fa";

function ServicesComp() {
  return (
    <div className="servicesBg flex flex-col justify-center items-center gap-4 p-20">
      <h1 className="text-5xl font-extrabold gradient-text pb-2">
        My Quality Services
      </h1>
      <h2 className="text-base text-pertiary">
        Elevate Your Digital Presence with Top-Tier UI/UX Design and Web
        Development Services
      </h2>
      <div className=" servicesCard1 flex justify-between items-center gap-20 p-6 rounded-xl border-2 border-primary text-pertiary font-bold cursor-pointer w-full ">
        <h1>01</h1>
        <h1>UI/UX Designing</h1>
        <h1>
          Crafting Exceptional UI/UX Designs for Unparalleled User Experiences
        </h1>
        <SiVorondesign className="w-10 h-10  text-pertiary" />
      </div>
      <div className="servicesCard2 flex justify-between items-center gap-20 p-6 rounded-xl border-2 border-primary text-pertiary font-bold cursor-pointer w-full">
        <h1>02</h1>
        <h1>Web Development</h1>
        <h1>
          Transforming Ideas into Seamless Web Solutions with Expert Development
        </h1>
        <FaCode className="w-10 h-10  text-pertiary" />
      </div>
    </div>
  );
}

export default ServicesComp;
