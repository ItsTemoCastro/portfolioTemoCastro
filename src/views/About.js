import React from 'react';

function About(props) {
  return (
    <div className="about-container-all">
      <div className="about-content">
        <div className="about-title">
          <h1>About me</h1>
        </div>
        <div className="about-info-content">
          <div className="about-me">
            <p>
              I am a committed web developer / designer, with few years of
              experience but with the skills and energy to carry out my
              activities, always looking for the best solution to the problems
              that arise, striving every day to learn something new,
              programming It is something that I am passionate about and
              sincerely I would not like to work in any other profession
            </p>
          </div>
          <div className="about-competences">
            <div className="competences-title">
              <h2>Competences</h2>
            </div>
            <div className="competences-content">
              <CompetencesItem image="images/kindness.png" content="Kind and empathetic" />
              <CompetencesItem image="images/profesional.png" content="Responsable" />
              <CompetencesItem image="images/team.png" content="I work very well in team" />
              <CompetencesItem image="images/trust.png" content="Honest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const CompetencesItem = (props) => {

  const imageItem = props.image;
  const content = props.content;
  return (
    <div className="competences-item">
      <div className="item-image">
        <img src={imageItem} alt="kind" />
      </div>
      <div className="item-content">
        <span>{content}</span>
      </div>
    </div>
  )
}

export default About;