import React from 'react';
export const HeaderNav = () => {
  const categories = ["Home", "About", "Promotions", "Blogs", "Contact Us"];
  
  return (
      <nav className='w-[400px]'>
        {categories.map((item, index) => (
          <a className="nav-link" href="/" key={index}>{item}</a>
        ))}
      </nav>
  );
}

export default HeaderNav;


