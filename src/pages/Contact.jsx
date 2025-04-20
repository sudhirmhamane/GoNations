import React from "react";

const Contact = () => {
  const handleFormSubmit = (formData) => {
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  };

  return (
    <section className="section-contact">
      <div className="container">
        <h2 className="container-title">Contact Me</h2>
        <p className="contact-text">Feel free to reach out for any queries.</p>

        <form action={handleFormSubmit}
          className="contact-form"
        >
          <input type="text" name="name" placeholder="Your Name" className="contact-input" required />
          <input type="email" name="email" placeholder="Your Email" className="contact-input" required />
          <textarea name="message" rows="4" placeholder="Your Message" className="contact-textarea" required></textarea>
          <button type="submit" className="contact-button">Send Message</button>
        </form>

        <div className="contact-info">
          <p>Email: <a href="mailto:sudhirmhamane908@gmail.com" className="contact-link">sudhirmhamane908@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/sudhirmhamane" className="contact-link">linkedin.com/in/sudhirmhamane</a></p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
