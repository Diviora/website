import { motion } from "motion/react";
import { ArrowRight, Database, Cloud } from "lucide-react";

export function FeaturePreview() {
  return (
    <section className="py-20 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Map, Transform, and Sync in Minutes
          </h2>
          <p className="text-xl text-gray-600">
            Visual interface for complex data transformations
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          {/* Mock Interface */}
          <div className="bg-white rounded-2xl border-2 border-gray-200 shadow-2xl overflow-hidden">
            {/* Header */}
            <div className="bg-[#0F172A] px-6 py-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-white ml-4">Tablinum Console - Column Mapping</span>
              </div>
              <div className="inline-block px-3 py-1 bg-[#06B6D4] text-white text-sm rounded-full">
                Incremental Sync Enabled
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                {/* Left: Legacy DB */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Database className="w-6 h-6 text-[#0F172A]" />
                    <h3 className="font-bold text-[#0F172A]">Legacy Database</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {["customer_id", "first_name", "last_name", "email_addr", "created_date"].map((field, index) => (
                      <div 
                        key={index}
                        className="p-4 bg-gray-50 border border-gray-200 rounded-lg flex items-center justify-between group hover:border-[#06B6D4] transition-colors cursor-pointer"
                      >
                        <span className="font-mono text-sm text-gray-700">{field}</span>
                        <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#06B6D4] transition-colors" />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Connection Lines */}
                <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-32">
                  <svg className="w-full h-48" viewBox="0 0 120 200">
                    <path d="M 0 40 Q 60 40 120 40" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M 0 70 Q 60 70 120 70" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M 0 100 Q 60 100 120 100" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.6" />
                    <path d="M 0 130 Q 60 130 120 130" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
                    <path d="M 0 160 Q 60 160 120 160" stroke="#06B6D4" strokeWidth="2" fill="none" opacity="0.4" />
                  </svg>
                </div>

                {/* Right: Cloud Event Fields */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <Cloud className="w-6 h-6 text-[#06B6D4]" />
                    <h3 className="font-bold text-[#0F172A]">Cloud Event Schema</h3>
                  </div>
                  
                  <div className="space-y-3">
                    {["userId", "firstName", "lastName", "email", "timestamp"].map((field, index) => (
                      <div 
                        key={index}
                        className={`p-4 border rounded-lg flex items-center ${
                          index === 2 
                            ? "bg-[#06B6D4]/10 border-[#06B6D4]" 
                            : "bg-white border-gray-200"
                        }`}
                      >
                        <span className="font-mono text-sm text-gray-700">{field}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Action Bar */}
              <div className="mt-8 pt-6 border-t border-gray-200 flex items-center justify-between">
                <div className="text-sm text-gray-600">
                  <span className="font-bold text-[#0F172A]">5/5</span> columns mapped
                </div>
                <button className="bg-[#0F172A] text-white px-6 py-3 rounded-lg hover:bg-[#1E293B] transition-colors flex items-center gap-2">
                  Deploy Pipeline
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Tag */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-6 py-2 bg-white border-2 border-[#06B6D4] rounded-full shadow-lg">
            <span className="text-[#06B6D4] font-bold">Incremental Sync & Snapshot Capabilities</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
