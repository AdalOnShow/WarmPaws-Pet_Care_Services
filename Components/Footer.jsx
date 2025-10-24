import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer data-aos="fade-up" id="footer" className="bg-gray-900 text-gray-300 py-10">
      <div className="max-w-11/12 mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">WarmPaws</h2>
          <p className="text-sm leading-relaxed">
            Keeping your pets warm, healthy, and happy during the winter.
            We care for your furry friends like our own.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about" className="hover:text-white transition">About Us</a></li>
            <li><a href="/services" className="hover:text-white transition">Our Services</a></li>
            <li><a href="/contact" className="hover:text-white transition">Contact</a></li>
            <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact Info</h3>
          <p className="text-sm">Email: support@warmpaws.com</p>
          <p className="text-sm">Phone: +880 123 456 789</p>
          <p className="text-sm mb-4">Address: Chattogram, Bangladesh</p>

          <div className="flex gap-4 text-lg">
            <a href="#" className="hover:text-blue-500 transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-sky-400 transition"><FaTwitter /></a>
            <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
            <a href="#" className="hover:text-blue-600 transition"><FaLinkedinIn /></a>
          </div>
        </div>

      </div>
      <div className="text-center border-t border-gray-700 mt-8 pt-4 text-sm text-gray-400">
        © {new Date().getFullYear()} WarmPaws. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
