const ContactForm = () => {
  return (
    <div className="contact-form">
      <div className="contact-container">
        <div className="form-wrapper">
          <h2>Logo</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
            magnam consequuntur temporibus illum magni. Voluptatibus
            exercitationem quos maiores maxime officia.
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
