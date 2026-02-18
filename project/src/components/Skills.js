
function Skills() {
  const mySkills = ["JavaScript", "React", "CSS", "Node.js", "Git & GitHub", "NodeJS", "PHP", "MySQL", "MongoDB"];

  return (
    <div className="container d-flex flex-column">
      <h2>My Skills</h2>
      <ul className="skills-list">
        {mySkills.map(function(skill, index) {
          return <li key={index}>{skill}</li>;
        })}
      </ul>
    </div>
  );
}

export default Skills;