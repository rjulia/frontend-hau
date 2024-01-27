import React from 'react';

function Header (props: Readonly<{
  title: string;
}>){
  return (
    <div className='header'>
      <h2>{props.title}</h2>
    </div>
  );
}


export default Header;
