const Footer = () => {
  const year = new Date().getFullYear();

  return <footer>
        <div>
            <h3>Contact</h3>
            <p>Adresa: xxxxxxxxx</p>
            <p>Telefon: xxxxxxxxx</p>
            <p>Email: xxxxxxxxx</p>
        </div>
        {`Copyright © Theatre ${year}`}
    </footer>;
};

export default Footer;