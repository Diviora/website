import { Database } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#F8FAFC] border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#06B6D4] to-[#0284C7] rounded-lg flex items-center justify-center">
                <Database className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-[#0F172A] font-bold">Diviora Systems</div>
                <div className="text-xs text-gray-500">Tablinum</div>
              </div>
            </div>
            <p className="text-sm text-gray-600">
              Architects of modern data intelligence platforms for the enterprise.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#tablinum" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Tablinum
                </a>
              </li>
              <li>
                <a href="#roadmap" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4">Resources</h4>
            <ul className="space-y-3">
              <li>
                <a href="#docs" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#api" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#guides" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Guides
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#0F172A] font-bold mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  About Diviora
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#security" className="text-gray-600 hover:text-[#06B6D4] transition-colors">
                  Security
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-600">
            © 2026 Diviora Systems. Architects of Tablinum.
          </p>
          <div className="flex gap-6">
            <a href="#privacy" className="text-sm text-gray-600 hover:text-[#06B6D4] transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="text-sm text-gray-600 hover:text-[#06B6D4] transition-colors">
              Terms of Service
            </a>
            <a href="#legal" className="text-sm text-gray-600 hover:text-[#06B6D4] transition-colors">
              Legal
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
