import BasePage from "../../components/BasePage";
import BaseButton from "../../components/BaseButton";

const About = function () {
  return (
    <BasePage title="About me">
      <p>
        I'm a Fullstack web and mobile developer Based in Tangier, Morocco. I
        like to code things from scratch and enjoy bringing ideas into real
        world projects.
        <br />
        My main focus these last months is building accessible UI/UXfriendly and
        devOps driven mobile apps with{" "}
        <a className="links" target={"_blank"} href="https://reactnative.dev">
          react-native
        </a>{" "}
        and{" "}
        <a className="links" target={"_blank"} href="https://laravel.com">
          laravel
        </a>
        .
      </p>
      <p className="suite">
        In 2016, I was attempting to get an online appointment with the german
        consulat in Rabat to apply for stduent visa. Back then every thing was
        smooth excpet taht appointment, after just couple of seconds all the
        available appointmend listed on the consulat website gone, this problem
        had last roughly a month without success. In the same period, I was
        self-teaching myself HTML on the famous french platform OPENCLASSROM, it
        offered a free HTML course.
        <br />
        The knowledge that I had gained during my learnig journey, helped my to
        figure out on my own how to prefill the required fileds in advance and
        remove the annoying captcha. Since then my passion for web development
        has borned and I dopted as my hobby until 2019 when I decided to make
        the web and mobile development as a professional carrer.
      </p>
      <BaseButton mode="button" type="button" state="ghost">
        Read more
      </BaseButton>
      <div>
        <p>Here are a few technologies I’ve been working with recently:</p>
        <ul className="techs">
          <li>
            <a className="links" href="#">
              HTML
            </a>
          </li>
          <li>
            <a className="links" href="#">
              CSS
            </a>
          </li>
          <li>
            <a className="links" href="#">
              SASS
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Tailwind
            </a>
          </li>
          <li>
            <a className="links" href="#">
              JavaScript (ES6+)
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Vue.js (3+)
            </a>
          </li>
          <li>
            <a className="links" href="#">
              React
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Node.js
            </a>
          </li>
          <li>
            <a className="links" href="#">
              PHP
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Laravel
            </a>
          </li>
          <li>
            <a className="links" href="#">
              React-native
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Figma
            </a>
          </li>
          <li>
            <a className="links" href="#">
              AdobeXD
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Github
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Docker
            </a>
          </li>
          <li>
            <a className="links" href="#">
              MongoDB(mongoose)
            </a>
          </li>
          <li>
            <a className="links" href="#">
              MYSQL
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Nuxt.js
            </a>
          </li>
          <li>
            <a className="links" href="#">
              Next.js
            </a>
          </li>
        </ul>
      </div>
    </BasePage>
  );
};

export default About;
