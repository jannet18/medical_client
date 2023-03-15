import React from "react";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="mission">Our Mission:</h1>
      <p>
        To provide health services that is equitable, accessible and accountable
        to the people of Kiambu County through participatory Leadership.
      </p>
      <img src="https://lh3.googleusercontent.com/p/AF1QipP3LRH9iUN_g_qeUcY4p3qrw9ZYDk1EaL8mtkAb=w1080-h608-p-no-v0" alt="/" />
      <h1 className="about">Our Vision:</h1>
      <p>
        To best provide an efficient, effective and high quality health care
        system that is accessible, equitable and affordable for every person in
        Kiambu County.{" "}
      </p>

      <h1>Our Values:</h1>
      <ul className="about">
        <li>Excellence and continuous improvement</li>
        <li>Integrity in every decision we make</li>
        <li>Compassion and respect for the dignity of every person</li>
        <li>A diverse, equitable, inclusive and welcoming System</li>
        <li>Collaboration throughout our System</li>
        <li>Responsiveness to the people of our communities</li>
        <li>Fiscal accountability</li>
      </ul>
      <h1 className="about">Our Purpose:</h1>
      <ul className="about">
        <li>
          Health care of the highest quality in a cost-effective, readily
          available and equitable manner
        </li>
        <li>
          Education in the health sciences, allowing the region to have assured
          access to trained health professionals to deliver such care
        </li>
        <li>
          Biomedical and clinical research in order to contribute to the body of
          medical knowledge thus creating new ideas, procedures and drugs that
          advance the quality of such care
        </li>
      </ul>
    </div>
  );
};

export default AboutUs;
