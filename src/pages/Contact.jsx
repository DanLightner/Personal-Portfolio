function Contact() {
  return (
    <div className="space-y-12">
      <h1 className="text-3xl md:text-4xl text-center mb-12 text-golf-green-900">Contact</h1>
      
      {/* Contact Information */}
      <section className="pixel-card bg-golf-white p-8">
        <h2 className="text-2xl md:text-3xl mb-8 text-golf-green-900 text-center">Get In Touch</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="pixel-card bg-golf-green-100 p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">Email</h3>
            <a href="mailto:DRL400@francis.edu" className="text-lg text-golf-green-800 hover:text-golf-green-900 underline">
              DRL400@francis.edu
            </a>
          </div>
          <div className="pixel-card bg-golf-green-100 p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">Phone</h3>
            <a href="tel:8142542776" className="text-lg text-golf-green-800 hover:text-golf-green-900 underline">
              (814) 254-2776
            </a>
          </div>
          <div className="pixel-card bg-golf-green-100 p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">LinkedIn</h3>
            <a href="https://linkedin.com/in/daniel-lightner/" target="_blank" rel="noopener noreferrer" className="text-lg text-golf-green-800 hover:text-golf-green-900 underline">
              linkedin.com/in/daniel-lightner/
            </a>
          </div>
          <div className="pixel-card bg-golf-green-100 p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">GitHub</h3>
            <a href="https://github.com/DanLightner" target="_blank" rel="noopener noreferrer" className="text-lg text-golf-green-800 hover:text-golf-green-900 underline">
              github.com/DanLightner
            </a>
          </div>
          <div className="pixel-card bg-golf-green-100 p-6">
            <h3 className="text-xl text-golf-green-900 mb-2">Location</h3>
            <p className="text-lg text-golf-green-800">
              Cresson, PA
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="pixel-card bg-golf-white p-8 max-w-2xl mx-auto">
        <h2 className="text-2xl md:text-3xl mb-8 text-golf-green-900 text-center">Send a Message</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-lg text-golf-green-900 mb-2 font-bold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              className="w-full px-4 py-3 border-[3px] border-golf-green-700 bg-golf-white text-golf-green-900 text-lg focus:outline-none focus:border-golf-green-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-lg text-golf-green-900 mb-2 font-bold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 border-[3px] border-golf-green-700 bg-golf-white text-golf-green-900 text-lg focus:outline-none focus:border-golf-green-900"
            />
          </div>
          <div>
            <label htmlFor="subject" className="block text-lg text-golf-green-900 mb-2 font-bold">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              className="w-full px-4 py-3 border-[3px] border-golf-green-700 bg-golf-white text-golf-green-900 text-lg focus:outline-none focus:border-golf-green-900"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-lg text-golf-green-900 mb-2 font-bold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              placeholder="Your message here..."
              className="w-full px-4 py-3 border-[3px] border-golf-green-700 bg-golf-white text-golf-green-900 text-lg focus:outline-none focus:border-golf-green-900 resize-none"
            />
          </div>
          <button 
            type="submit"
            className="pixel-button bg-golf-green-600 text-golf-white px-8 py-4 text-lg w-full md:w-auto"
          >
            Send Message
          </button>
        </form>
      </section>
    </div>
  )
}

export default Contact

