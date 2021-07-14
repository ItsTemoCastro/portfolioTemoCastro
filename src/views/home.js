import React from 'react';

function Home(props) {
    return (
        <div className="home-container-all">
            <div className="home-section-layer">
                <div className="home-port-info">
                    <div className="home-img">
                        <img src="images/user-image.jpg" alt="user" />
                    </div>
                    <div className="home-intro">
                        <h1>Hello, I am Cuauhtemoc Castro and this is my portfolio</h1>
                    </div>
                    <div className="home-icons">
                        <span><i className="fab fa-react"></i></span>
                        <span><i className="fab fa-html5"></i></span>
                        <span><i className="fab fa-css3-alt"></i></span>
                        <span><i className="fab fa-node-js"></i></span>
                        <span><i className="fab fa-git-alt"></i></span>
                        <span><i className="fab fa-github"></i></span>
                    </div>
                    <div className="home-cv">
                        <button type="button" className="button-cv">Download CV</button>
                    </div>
                    <div className="home-phrase">
                        <h3>“interested in never stop learn, always trying to my tomorrow's version surpasses today's”</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;