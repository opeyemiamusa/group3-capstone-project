import "./FooterSection.css";

function FooterSection() {
  return (
    <footer className="FooterSection">
      <div className="footer">

        <div className="footer-about">
          <h3>About</h3>
          
          <p className="about-text">
            Group 3 Capstone Project is a team of frontend developers
            collaborating to build a responsive Solar System application.
          </p>

          {/* Updated team members list (10 members) */}
          <div className="team-members">
            <a href="https://github.com/opeyemiamusa" target="_blank" rel="noreferrer">Opeyemi</a>
            <a href="https://github.com/Salomenelson" target="_blank" rel="noreferrer">Salome</a>
            <a href="https://github.com/Omoh-szn" target="_blank" rel="noreferrer">Omoh</a>
            <a href="https://github.com/billboyn" target="_blank" rel="noreferrer">James</a>
            <a href="https://github.com/QueenVictoria2" target="_blank" rel="noreferrer">Victoria</a>
            <a href="https://github.com/goodnesstomiwa" target="_blank" rel="noreferrer">Goodness</a>
            <a href="https://github.com/Tafaa01" target="_blank" rel="noreferrer">Mustapha</a>
            <a href="https://github.com/Leader613" target="_blank" rel="noreferrer">Leader</a>
            <a href="https://github.com/AtiyyayuNur" target="_blank" rel="noreferrer">Atiyyatu Nur</a>
            <a href="https://github.com/emmyandel16" target="_blank" rel="noreferrer">Emmanuel</a>
          </div>
        </div>

        <hr/>

        <div className="footer-bottom">
          <div className="footer-left">
            <p>
              ©2026 Design by{" "}
              <a href="https://amakandukwu.com" target="_blank" rel="noreferrer">Amaka</a>{" "}
              &{" "}
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">Ifeoma A.</a>
            </p>

            <p>
              Built by{" "}
              <a href="https://github.com" target="_blank" rel="noreferrer">Group 3 Capstone Project</a>
              . All rights reserved
            </p>
          </div>

          <div className="footer-right">
            <a href="https://tsacademyonline.com" target="_blank" rel="noreferrer">TSAcademy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default FooterSection;
