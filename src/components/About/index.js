import React from "react";
import {
  AboutSection,
  AboutTitle,
  AboutText,
  SocialMediaIcons,
  SocialMediaIcon,
} from "./AboutStyle";

const About = () => {
  return (
    <AboutSection>
      <AboutTitle>Crafting My Narrative</AboutTitle>
      <AboutText>
        I'm Muhammadh Yahya, a passionate <b>Front-End Developer</b> with a
        strong foundation in web technologies and a keen eye for
        detail.Currently, I am specializing in{" "}
        <b>React.js, Next.js, Bootstrap, and JavaScript.</b>
        My journey in IT began during my Advanced Level studies, where I
        developed a deep interest in technology that led me to pursue a Higher
        National Diploma in Information Technology (HNDIT).
      </AboutText>
      <AboutText>
        My journey in web development started during my Higher National Diploma,
        where I've gained comprehensive knowledge in various areas of IT.I have
        actively developed and contributed to various projects in college and
        have taken the initiative to work on several self-driven projects.
        <b>
          I love translating concepts into seamless user experiences, and I’m
          constantly looking to improve my skills.
        </b>
      </AboutText>
      <SocialMediaIcons>
        <SocialMediaIcon
          href="https://github.com/yahya676767"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
        </SocialMediaIcon>
        <SocialMediaIcon
          href="https://www.linkedin.com/in/muhammadh-yahya/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </SocialMediaIcon>
        {/* Add more icons as needed */}
      </SocialMediaIcons>
    </AboutSection>
  );
};

export default About;
