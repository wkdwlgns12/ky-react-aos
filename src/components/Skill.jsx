import React from "react";
import "./style/Skill.css";
const Skill = () => {
  const skills = [
    "html",
    "css",
    "javascript",
    "node express",
    "aws",
    "sql",
    "react",
  ];

  return (
    <section>
      <div className="t-wrap">
        <h2>Skill title</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis,
          voluptas!
        </p>
        <ul className="skills">
          {skills.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skill;
