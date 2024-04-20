const ContactForm = () => {
  const logo = '/images/mineral-logo.png';
  return (
    <div className="contact-form">
      <div className="contact-container">
        <div className="form-wrapper">
          <img src={logo} alt="logo" className="logo" />
          <h2>Get in Touch</h2>
          <p>
            Ready to embark on a journey to pure, radiant skin? Contact us to
            schedule your consultation and take the first step towards a glowing
            complexion.
          </p>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Full Name"
              aria-label="Full Name"
            />

            <input
              type="email"
              id="email"
              placeholder="Email Address"
              aria-label="Email Address"
            />

            <input
              type="tel"
              id="phone-number"
              placeholder="Phone Number"
              aria-label="Phone Number"
            />

            <button type="submit" className="btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
