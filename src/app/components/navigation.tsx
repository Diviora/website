import { Database } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#06B6D4] to-[#0284C7] rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <div className="text-[#0F172A] font-bold">Diviora Systems</div>
              <div className="text-xs text-gray-500">Tablinum</div>
            </div>
          </div>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#platform" className="text-[#0F172A] hover:text-[#06B6D4] transition-colors">
              Platform
            </a>
            <a href="#connectors" className="text-[#0F172A] hover:text-[#06B6D4] transition-colors">
              Connectors
            </a>
            <a href="#security" className="text-[#0F172A] hover:text-[#06B6D4] transition-colors">
              Security
            </a>
            <a href="#documentation" className="text-[#0F172A] hover:text-[#06B6D4] transition-colors">
              Documentation
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <a href="#signin" className="text-[#0F172A] hover:text-[#06B6D4] transition-colors">
              Sign In
            </a>
            <button className="bg-[#0F172A] text-white px-6 py-2.5 rounded-lg hover:bg-[#1E293B] transition-colors">
              Request Access
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
