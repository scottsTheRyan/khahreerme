import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg';
import style from 'styled-components';

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

const Wrapper = style.main`

nav { 
  width: var(--fluid-width);
  max-width: var (--max-width);
  margin: 0 auto;
  height: var(--nav-height);
  display: flex;
  align-items: center;
}

.page{
  min-height: calc(100vh - var(--nav-height));
  display: grid;
  align-items: center;
  margin-top: -3rem;
}

h1 {
  font-weight: 700;
span{
  color:var(--primary-500);
  }
}

p{
  color:var(--grey-600);
}

.main-img {
  display: none;
}
@media (min-width:992px){
  .page{
    grid-template-columns: 1fr 1fr;
    column-gap: 3rem;
  }
  .main-img {
  display: block;
}
}
`;



export default Landing;