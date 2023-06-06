import React from 'react';
import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';
import Wrapper from '../assets/wrappers/ErrorPage';

const Error = () => {
  return (
  <Wrapper className='full-page'>
    <div>
      <img src={img} alt='not found' />
      <h3>oops!</h3>
      <h3>job searches can be tough</h3>
      <p>but you got this!!!</p>
      <Link to='/'>back at'em</Link>
    </div>
  </Wrapper>
);
  
}
export default Error;
