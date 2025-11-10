function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      
      {/* Contact Information */}
      <section>
        <h2>Get In Touch</h2>
        <div>
          <div>
            <h3>Email</h3>
            <p>
              {/* your.email@example.com */}
            </p>
          </div>
          <div>
            <h3>Phone</h3>
            <p>
              {/* (123) 456-7890 */}
            </p>
          </div>
          <div>
            <h3>LinkedIn</h3>
            <p>
              {/* LinkedIn profile link */}
            </p>
          </div>
          <div>
            <h3>Location</h3>
            <p>
              {/* Your location */}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section>
        <h2>Send a Message</h2>
        <form>
          <div>
            <label htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
            />
          </div>
          <div>
            <label htmlFor="subject">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
            />
          </div>
          <div>
            <label htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message here..."
            />
          </div>
          <button type="submit">
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact

