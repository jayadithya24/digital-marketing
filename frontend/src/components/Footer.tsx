import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { PageType } from "../types";

interface FooterProps {
  onNavigate: (page: PageType) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Logo + Description */}
          <div>
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              Digital<span className="text-white">Expert</span>
            </h3>
            <p className="text-gray-400 text-sm">
              Transforming businesses through innovative digital marketing strategies and data-driven results.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>

            <ul className="space-y-2 text-gray-400 text-sm">

              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("portfolio")}
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </button>
              </li>

              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>

            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>

            <ul className="space-y-3 text-gray-400 text-sm">

              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>jaysalian24@gmail.com</span>
              </li>

              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+91 9876543210</span>
              </li>

              <li className="flex items-center gap-2">
                <MapPin size={16} />
                <span>Udupi, Karnataka</span>
              </li>

            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>

            <div className="flex space-x-4">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Twitter size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; 2024 DigitalExpert. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}