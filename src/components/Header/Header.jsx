import HeaderLogo from "../../assets/images/headerLogo.png"


import React from 'react'
function Header() {
  return (
    <>
        <div className="container">
            <div>
                <img src={HeaderLogo} alt="img" width={207} height={50}/>
            </div>
        </div>
    </>
  )
}

export default Header
