const Footer = () => {
  return (
    <footer className="border-gray-300 bg-gray-200 shadow-gray-400 shadow-sm mx-10 mt-20 px-4 px-7 py-10 py-7 rounded-xl text-black">
      <div className="flex md:flex-row flex-col justify-between gap-8 mx-auto container">
        {/* About Section */}
        <div className="flex-1">
          <h3 className="mb-2 font-bold font-instrumentSans text-6xl italic tracking-widest">
            Let's Create Together
          </h3>
          <p className="mb-4 py-7 font-semibold text-2xl italic">
            Thank you for visiting! Curious to learn more about my journey and
            approach? I’d love to share over a coffee chat or during an
            interview. Feel free to connect—I’m just a message away!
          </p>
          <div className="flex gap-4">
            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
            >
              LinkedIn
            </a>
            <a
              href="mailto:your-email@gmail.com"
              className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
            >
              Gmail
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 border-2 border-gray-300 shadow-gray-400 shadow-sm mx-10 px-7 py-7 rounded-xl">
          <h3 className="mb-2 font-bold text-2xl">Contact Me</h3>
          <form
            action="https://formspree.io/f/{your_form_id}" // Replace with your Formspree endpoint or backend API
            method="POST"
            className="space-y-4"
          >
            <div>
              <label className="block mb-1" htmlFor="name">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="border-gray-100 bg-gray-300 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="subject">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="border-gray-100 bg-gray-600 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-white focus:outline-none"
                required
              />
            </div>
            <div>
              <label className="block mb-1" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="border-gray-100 bg-gray-300 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-white focus:outline-none"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="inline-block bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
