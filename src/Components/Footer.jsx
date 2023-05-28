import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>
        <div id="contactDiv">
            <h3>Contact</h3>
            <p>Adresa: xxxxxxxxx</p>
            <p>Telefon: xxxxxxxxx</p>
            <p>Email: xxxxxxxxx</p>
        </div>
        {`Copyright © Theatre ${year}`}
    </footer>;
};

export default Footer;