import { post } from "@/api/api";
import { Check, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
const Footer = () => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(null);
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());
      setLoading(true);
      const response = await post("message/send", data);

      setLoading(false);
      setMessage(response.message);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (message)
      setTimeout(() => {
        setMessage(null);
      }, 5000);
  }, [message]);

  return (
    <>
      <footer className="border-gray-300 bg-gray-200 hover:bg-bodyColor shadow-gray-400 shadow-sm mt-20 px-4 py-10 rounded-xl text-black">
        <div className="flex md:flex-row flex-col justify-between gap-8 mx-auto container">
          {/* About Section */}
          <div className="flex flex-col flex-1 justify-between text-center">
            <h3 className="mb-2 font-bold font-instrumentSans text-6xl italic tracking-widest">
              Let's Create Together
            </h3>
            <p className="mb-4 py-7 font-semibold text-2xl italic">
              Thank you for visiting! Curious to learn more about my journey and
              approach? I’d love to share over a coffee chat or during an
              interview. Feel free to connect—I’m just a message away!
            </p>
            <div className="flex justify-center gap-5 mt-4">
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
              >
                <BiLogoGmail size={30} />
              </a>
              <a
                href="https://www.facebook.com/prashanta.kc.1"
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
              >
                <FaLinkedin size={30} />
              </a>
              <a
                href=""
                target="_blank"
                rel="noreferrer"
                className="flex items-center mt-4 font-semibold text-black text-xl hover:text-blue-800"
              >
                <FaSquareGithub size={30} />
              </a>
            </div>
          </div>

          {/* Contact Form Section */}
          <div
            id="contact"
            className="flex-1 border-2 border-gray-300 shadow-gray-400 shadow-sm md:mx-10 px-7 py-7 rounded-xl"
          >
            <h3 className="mb-2 font-bold text-2xl">Contact Me</h3>
            <form
              onSubmit={handleSubmit}
              action={handleSubmit}
              // method="POST"
              className="space-y-4"
            >
              <div>
                <label className="block mb-1" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="senderName"
                  className="border-gray-100 bg-gray-300 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-black focus:outline-none"
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
                  className="border-gray-100 bg-gray-300 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-black focus:outline-none"
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
                  className="border-gray-100 bg-gray-300 px-3 py-2 border rounded focus:ring-2 focus:ring-blue-500 w-full text-black focus:outline-none"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="inline-flex justify-center items-center gap-1 bg-slate-200 hover:bg-slate-50 shadow-black shadow-sm mt-8 px-8 py-3 rounded font-semibold text-black"
              >
                Send Message{" "}
                {loading && <Loader2 size={20} className="animate-spin" />}
              </button>
              {message && (
                <p className="flex gap-1 text-green-400 text-sm">
                  <Check size={20} />
                  {message}
                </p>
              )}
            </form>
          </div>
        </div>
      </footer>
      <div className="pt-10 w-full text-center">
        Copyright &copy; 2021, Prashanta Deuja
      </div>
    </>
  );
};

export default Footer;
