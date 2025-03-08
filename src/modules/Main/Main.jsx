import { About } from "../About/About";
import { Build } from "../Build/Build";
import { Contact } from "../Contact/Contact";
import { Dream } from "../Dream/Dream";
import { Enterprises } from "../Enterprises/Enterprises";
import { Home } from "../Home/Home";
import { Page } from "../Page/Page";
import { Projects } from "../Projects/Projects";

export const Main = () => {
  return (
    <article>
      <Home />
      <Enterprises />
      <Page />
      <Dream />
      <Projects />
      <About />
      <Build />
      <Contact />
    </article>
  );
};
