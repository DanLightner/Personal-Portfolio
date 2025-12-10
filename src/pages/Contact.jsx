function Contact() {
  return (
    <div className="space-y-3xl">
      <h1 className="text-3xl text-md-4xl text-center mb-2xl text-green-900">Contact</h1>
      
      {/* Contact Information */}
      <section className="card">
        <h2 className="text-2xl text-md-3xl mb-xl text-green-900 text-center">Get In Touch</h2>
        <div className="contact-grid">
          <div className="card bg-green-100">
            <h3 className="text-xl text-green-900 mb-sm">Email</h3>
            <a href="mailto:DRL400@francis.edu" className="text-lg text-green-800">
              DRL400@francis.edu
            </a>
          </div>
          <div className="card bg-green-100">
            <h3 className="text-xl text-green-900 mb-sm">Phone</h3>
            <a href="tel:8142542776" className="text-lg text-green-800">
              (814) 254-2776
            </a>
          </div>
          <div className="card bg-green-100">
            <h3 className="text-xl text-green-900 mb-sm">LinkedIn</h3>
            <a href="https://linkedin.com/in/daniel-lightner/" target="_blank" rel="noopener noreferrer" className="text-lg text-green-800">
              linkedin.com/in/daniel-lightner/
            </a>
          </div>
          <div className="card bg-green-100">
            <h3 className="text-xl text-green-900 mb-sm">GitHub</h3>
            <a href="https://github.com/DanLightner" target="_blank" rel="noopener noreferrer" className="text-lg text-green-800">
              github.com/DanLightner
            </a>
          </div>
          <div className="card bg-green-100">
            <h3 className="text-xl text-green-900 mb-sm">Location</h3>
            <p className="text-lg text-green-800">
              Cresson, PA
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="card max-w-2xl mx-auto">
        <h2 className="text-2xl text-md-3xl mb-xl text-green-900 text-center">Send a Message</h2>
        <form
          className="space-y-lg"
          action="https://formsubmit.co/DRL400@francis.edu"
          method="POST"
        >
          {/* FormSubmit helpers */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="Portfolio contact form" />
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="subject" className="form-label">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message here..."
              className="form-textarea"
              required
            />
          </div>
          <button 
            type="submit"
            className="btn btn-primary w-full"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact
