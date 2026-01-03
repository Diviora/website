import { Zap, Plug, Shield } from "lucide-react";
import { motion } from "motion/react";

export function ValueProposition() {
  const cards = [
    {
      icon: Zap,
      title: "Streaming First",
      description: "Node.js streaming architecture handles 5GB+ files without loading into memory.",
      gradient: "from-[#06B6D4]/10 to-[#0284C7]/10",
      iconBg: "bg-[#06B6D4]"
    },
    {
      icon: Plug,
      title: "Format Agnostic",
      description: "Parse CSV, Fixed-Width, XML, and JSON with a single unified engine.",
      gradient: "from-purple-500/10 to-pink-500/10",
      iconBg: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "The Data Airlock",
      description: "Secure tunneling for on-premise databases behind corporate firewalls.",
      gradient: "from-emerald-500/10 to-teal-500/10",
      iconBg: "bg-emerald-500"
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#0F172A] mb-4">
            Built for Scale, Engineered for Precision
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Enterprise-grade data integration with developer-first tooling
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative p-8 rounded-2xl bg-gradient-to-br ${card.gradient} border border-gray-200 backdrop-blur-sm hover:shadow-xl transition-all group`}
              >
                {/* Glassmorphism effect */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl" />
                
                <div className="relative">
                  <div className={`w-14 h-14 ${card.iconBg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {card.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
