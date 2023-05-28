import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>
        <div id="contactDiv">
            <p>Adresa: str. X, nr. Y, Bucuresti, Romania</p>
            <p>Telefon: 0762312542</p>
        </div>
        {`Copyright © Theatre ${year}`}
    </footer>;
};

export default Footer;