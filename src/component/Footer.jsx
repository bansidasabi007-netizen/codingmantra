import { FaTwitter, FaLinkedin, FaInstagram, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="pt-16 mt-[50px] text-[var(--text-secondary)] bg-[var(--bg-primary)] border-t border-[var(--border-color)]">

      <div className="grid gap-10 px-6 pb-10 mx-auto max-w-7xl md:grid-cols-4">

        {/* Logo + Info */}
        <div>
          <h2 className="text-2xl font-bold text-[#F3A412]">
            CodingMantra
          </h2>

          <p className="mt-4 text-sm leading-6">
            Providing business solutions for small and medium-sized businesses and helping them to grow.
          </p>

          <div className="flex gap-4 mt-6 text-lg">

            <FaTwitter className="cursor-pointer hover:text-[#F3A412] transition"/>
            <FaLinkedin className="cursor-pointer hover:text-[#F3A412] transition"/>
            <FaInstagram className="cursor-pointer hover:text-[#F3A412] transition"/>
            <FaFacebook className="cursor-pointer hover:text-[#F3A412] transition"/>
            <FaGithub className="cursor-pointer hover:text-[#F3A412] transition"/>
            <FaYoutube className="cursor-pointer hover:text-[#F3A412] transition"/>

          </div>
        </div>

        {/* Company */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#F3A412]">Company</h3>

          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[#F3A412] transition">About Us</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Services</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Products</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Portfolio</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Pricing</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Blog</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">API Docs</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Contact Us</li>
          </ul>
        </div>

        {/* Top Tools */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#F3A412]">Top Tools</h3>

          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[#F3A412] transition">All Tools</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Image Gallery</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Image Tools</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Digital Marketing</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Financial Tools</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Games</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">SEO Tools</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="mb-4 text-lg font-semibold text-[#F3A412]">Legal</h3>

          <ul className="space-y-2 text-sm">
            <li className="cursor-pointer hover:text-[#F3A412] transition">Privacy Policy</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Terms & Conditions</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Return Policy</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Deals</li>
            <li className="cursor-pointer hover:text-[#F3A412] transition">Sitemap</li>
          </ul>
        </div>

      </div>

      {/* Bottom */}
      <div className="py-5 text-sm text-center border-t border-[var(--border-color)]">
        © 2026 CodingMantra. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;