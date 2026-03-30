import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const footerLinks = [
    {
      heading: "Product",
      links: ["Features", "Pricing", "Templates", "Integrations"],
    },
    {
      heading: "Company",
      links: ["About", "Blog", "Careers", "Press"],
    },
    {
      heading: "Resources",
      links: ["Documentation", "Help Center", "Community", "Contact"],
    },
  ];

  const socialLinks = [
    { icon: <FaInstagram size={18} />, href: "#" },
    { icon: <FaFacebookF size={18} />, href: "#" },
    { icon: <FaXTwitter size={18} />, href: "#" },
  ];

  const legalLinks = ["Privacy Policy", "Terms of Service", "Cookies"];

  return (
    <footer className="bg-[#0B1120] text-white px-4">
      <div className="lg:container mx-auto pt-16 pb-12">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          {/* Brand Column */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-3xl font-bold tracking-tight">DigiTools</h2>
            <p className="text-white/80 text-[15px] leading-relaxed max-w-xs">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          {/* Navigation Links */}
          {footerLinks.map((group) => (
            <div key={group.heading} className="space-y-6">
              <h4 className="text-lg font-medium text-white">
                {group.heading}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/80 hover:text-white transition-colors text-[15px]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Social Links Column */}
          <div className="space-y-6 sm:max-md:col-span-2 sm:max-md:mx-auto">
            <h4 className="text-lg font-medium text-white">Social Links</h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary hover:bg-gray-500 hover:text-white/90 transition-all duration-200"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-500 text-sm">
            © 2026 DigiTools. All rights reserved.
          </p>

          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="text-gray-500 hover:text-white text-sm transition-colors"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
