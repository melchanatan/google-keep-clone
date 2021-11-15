import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Built by Mel Chanatan </p>
      <p>Copyright ⓒ {year}</p>
    </footer>
  );
}

export default Footer;
