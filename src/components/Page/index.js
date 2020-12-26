import React from 'react';
import './style.scss';
function Page(props) {

  return (
    <React.Fragment>
      <header className="header">
        <h1 className="header__title">Мобильный оператор</h1>
      </header>
      <div className="page-wrapper">
        {props.children}
      </div>
    </React.Fragment>
  )
}

export default Page;