import React from 'react'

const ContactForm = () => {
  return (
    <section id="three">
      <h2>Get In Touch</h2>
      <p>
        If you would like to discuss any projects you may have in mind please contact us.
          </p>
      <div className="row">
        {/* <div className="8u 12u$(small)">
          <form method="post" action="#">
            <div className="row uniform 50%">
              <div className="6u 12u$(xsmall)">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Name"
                />
              </div>
              <div className="6u 12u$(xsmall)">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                />
              </div>
              <div className="12u">
                <textarea
                  name="message"
                  id="message"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
            </div>
            <ul className="actions" style={{ marginTop: 30 }}>
              <li>
                <input type="submit" value="Send Message" />
              </li>
            </ul>
          </form>
        </div> */}
        <div className="4u 12u$(small)">
          <ul className="labeled-icons">
            <li>
              <h3 className="icon fa-home">
                <span className="label">Address</span>
              </h3>
                  122 Redhouse,
                  <br />
                  Hogmoor Rd,
                  <br />
                  Bordon, GU35 9HS
            </li>
            <li>
              <h3 className="icon fa-phone">
                <span className="label">Landline</span>
              </h3>
                  01420 479729
                </li>
            <li>
              <h3 className="icon fa-mobile">
                <span className="label">Mobile</span>
              </h3>
                  07720 300410
                </li>
            <li>
              <h3 className="icon fa-envelope-o">
                <span className="label">Email</span>
              </h3>
              <span>smithkws9@aol.com</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default ContactForm
