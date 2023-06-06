import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import style from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="khame" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job<span> joy </span>
          </h1>
          <p>
            job hunting may not spark joy <br></br>but organization in your job
            search might <br></br>khahme can help
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;