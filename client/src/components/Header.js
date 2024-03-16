import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Header() {
  const { portfolioData } = useSelector((state) => state.root);
  // console.log(portfolioData);
  const { intro } = portfolioData;
  const {firstName, middleName, lastName} = intro;
  return (
    <div className='h-[10vh] px-5 bg-primary flex justify-between items-center'>
        <Link to="/"><h1 className='text-secondary text-4xl font-semibold'>{firstName || ''}</h1></Link>
        <h1 className='text-white text-4xl font-semibold'>{middleName[0]+'.' || ''}</h1>
        <Link to="/admin"><h1 className='text-tertiary text-4xl font-semibold'>{lastName || ''}</h1></Link>
    </div>
  )
}

export default Header