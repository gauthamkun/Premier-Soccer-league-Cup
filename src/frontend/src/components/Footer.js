import React from 'react';

function Footer() {

  return (
            <footer>
                <p>Content on this site is ©Copyright 2021 Arizona State University</p>
                <h4>Premier Soccer League Cup</h4>
                <p>Developed with ❤️ by Team 33 of the course SER 515</p>
                <p>Email Us: XYZ@abc.com</p>

                <section id="subscribe">
        <div className="container">
          <form>
            <input type="email" placeholder="Enter Email..." />
            <button type="Submit" className="button">
              Subscribe to our Newsletter
            </button>
          </form>
        </div>
      </section>
            </footer>
  );
}

export default Footer;