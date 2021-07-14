import React from 'react';

function About(props) {
    return (
      <div className="about-container-all">
        <div className="about-content">
          <div className="about-title">
            <h1>About page</h1>
          </div>
          <div className="about-info-content">
            <div className="about-me">
              <h2>About Me</h2>
              <p>
                I am a committed web developer / designer, with few years of
                experience but with the skills and energy to carry out my
                activities, always looking for the best solution to the problems
                that arise, striving every day to learn something new,
                programming It is something that I am passionate about and
                sincerely I would not like to work in any other profession
              </p>
            </div>
            <div className="about-skills">
                <div className="about-technologies">
                    <div className="technologies-title">
                        <h3>Technologies</h3>
                    </div>
                </div>
                <div className="about-competences">
                    <div className="competences-title">
                        <h3>Competences</h3>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default About;