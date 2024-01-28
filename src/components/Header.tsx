import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from '@/assets/img/logo.jpg'

function Header (props: Readonly<{
  title: string;
  onHandleLogout?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}>){
  return (
    <div className='header'>
      <Link href='/' className='header__logo'>
        
        <Image 
          src={logo.src} alt='logo' 
          height={50}
          width={50} />
        
        <h2>{props.title}</h2>
      </Link>
      <button 
        className='btn btn--primary'
        onClick={props.onHandleLogout}>
          Logout
        </button>
    </div>
  );
}


export default Header;
