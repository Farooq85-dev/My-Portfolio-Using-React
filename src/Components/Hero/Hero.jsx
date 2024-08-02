import ButtonComp from "../Button/Button.jsx";
import myImg from "../../assets/Images/my-img.jpeg";
import { FaLinkedin, FaGithubSquare, FaFacebookSquare } from "react-icons/fa";

function HeroComp() {
  return (
    <div className="heroBg grid gap-7 lg:gap-0 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 p-20">
      <div className="authorDetails flex flex-col justify-center items-start gap-6">
        <h1 className="text-2xl font-medium text-pertiary">
          Hello! I am Farooq
        </h1>
        <h2 className="text-5xl font-extrabold gradient-text pb-2">
          Web Developer + <br />
          UI/UX Designer
        </h2>
        <p className="text-base text-pertiary">
          As a passionate and experienced Web Developer and UI/UX Designer, I
          specialize in creating dynamic, user-friendly, and visually appealing
          web applications. With a strong foundation in HTML, CSS, and
          JavaScript, and expertise in modern frameworks like React.js and
          Next.js, I build responsive and high-performing websites that provide
          an exceptional user experience.
        </p>
        <div>
          <div className="socialButtons flex justify-center items-center gap-8">
            <ButtonComp title="Hire Me" classes="navbarButton" />
            <div className="socialButtons flex justify-center items-center gap-2">
              <div className="linkedinContainer flex justify-center items-center w-10 h-10 cursor-pointer rounded-full bg-primary duration-1000 transition-all">
                <a href="https://web.facebook.com/muhammadfarooqdev">
                  <FaFacebookSquare className="text-pertiary w-5 h-5" />
                </a>
              </div>
              <div className="linkedinContainer flex justify-center items-center w-10 h-10 cursor-pointer rounded-full bg-primary ">
                <a href="https://www.linkedin.com/in/muhammad-farooq-b71886295/">
                  <FaLinkedin className="text-pertiary w-5 h-5" />
                </a>
              </div>
              <div className="linkedinContainer flex justify-center items-center w-10 h-10 cursor-pointer rounded-full bg-primary ">
                <a href="https://github.com/Farooq85-dev">
                  <FaGithubSquare className="text-pertiary w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="authorImage">
        <div className="flex justify-center items-center">
          <img
            src="https://images.unsplash.com/photo-1579038773867-044c48829161?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Z3V5fGVufDB8fDB8fHww"
            alt="Muhammad Farooq..."
            className="w-[300px] rounded-3xl border-2 border-primary"
          />
        </div>
      </div>
    </div>
  );
}

export default HeroComp;
