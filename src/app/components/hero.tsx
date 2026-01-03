import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, #0F172A 1px, transparent 1px),
              linear-gradient(to bottom, #0F172A 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-4 px-4 py-2 bg-[#06B6D4]/10 border border-[#06B6D4]/20 rounded-full">
              <span className="text-[#06B6D4]">Enterprise Data Integration Platform</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-[#0F172A] mb-6 leading-tight">
              The Foundation of Modern Data Intelligence.
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Bridge the gap between legacy on-premise systems and the modern cloud. 
              Ingest gigabyte-scale datasets with O(1) memory efficiency—no crashing, no data loss.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#0F172A] text-white px-8 py-4 rounded-lg hover:bg-[#1E293B] transition-all flex items-center justify-center gap-2 group">
                Start Ingestion
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-[#0F172A] text-[#0F172A] px-8 py-4 rounded-lg hover:bg-[#F8FAFC] transition-colors">
                View Architecture
              </button>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">5GB+</div>
                <div className="text-sm text-gray-600">File Size Support</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">O(1)</div>
                <div className="text-sm text-gray-600">Memory Efficiency</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0F172A]">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
            </div>
          </motion.div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Data Airlock Illustration */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#F8FAFC] to-white rounded-2xl border-2 border-gray-200 p-8 shadow-2xl">
                
                {/* Left side - Messy data streams */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-20 h-1 bg-gradient-to-r from-red-500/60 to-transparent rounded-full animate-pulse" />
                    <span className="text-xs text-gray-500 font-mono">CSV</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-24 h-1 bg-gradient-to-r from-orange-500/60 to-transparent rounded-full animate-pulse delay-100" />
                    <span className="text-xs text-gray-500 font-mono">XML</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-500/60 to-transparent rounded-full animate-pulse delay-200" />
                    <span className="text-xs text-gray-500 font-mono">JSON</span>
                  </div>
                </div>

                {/* Center - Tablinum Archway */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-48 h-64">
                    {/* Archway structure */}
                    <div className="absolute inset-0 border-4 border-[#0F172A] rounded-t-full" />
                    <div className="absolute bottom-0 left-0 right-0 h-32 border-4 border-t-0 border-[#0F172A]" />
                    
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-[#06B6D4]/20 via-transparent to-[#0284C7]/20 rounded-t-full" />
                    
                    {/* Center logo */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-[#06B6D4] to-[#0284C7] rounded-lg flex items-center justify-center shadow-lg">
                      <span className="text-white text-2xl font-bold">T</span>
                    </div>
                  </div>
                </div>

                {/* Right side - Clean data streams */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent to-[#06B6D4] rounded-full" />
                    <div className="w-8 h-8 bg-[#06B6D4]/20 rounded-lg border border-[#06B6D4] flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#06B6D4] rounded-sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2 ml-4">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent to-[#06B6D4] rounded-full" />
                    <div className="w-8 h-8 bg-[#06B6D4]/20 rounded-lg border border-[#06B6D4] flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#06B6D4] rounded-sm" />
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-32 h-0.5 bg-gradient-to-r from-transparent to-[#06B6D4] rounded-full" />
                    <div className="w-8 h-8 bg-[#06B6D4]/20 rounded-lg border border-[#06B6D4] flex items-center justify-center">
                      <div className="w-4 h-4 bg-[#06B6D4] rounded-sm" />
                    </div>
                  </div>
                  <span className="text-xs text-gray-500 font-mono ml-8">Cloud</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
