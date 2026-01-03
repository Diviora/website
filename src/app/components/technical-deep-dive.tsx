import { Terminal } from "lucide-react";
import { motion } from "motion/react";

export function TechnicalDeepDive() {
  const codeSnippet = `{
  "source": {
    "type": "postgresql",
    "host": "on-premise.corporate.net",
    "port": 5432,
    "database": "legacy_db",
    "tunnel": "secure-vpn"
  },
  "destination": {
    "type": "azure-event-hub",
    "namespace": "prod-events",
    "hub": "customer-sync"
  },
  "transform": {
    "mode": "streaming",
    "batch_size": 1000,
    "memory_limit": "512MB"
  },
  "sync": {
    "type": "incremental",
    "key": "updated_at",
    "interval": "5m"
  }
}`;

  return (
    <section className="py-20 px-6 bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-[#06B6D4]" />
              <span className="text-[#06B6D4] font-bold">Developer-First</span>
            </div>

            <h2 className="text-4xl font-bold mb-6">
              Developer-First Configuration
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Full API access, CLI controls, and transparent logging for your engineering team. 
              Configure pipelines with JSON, deploy with CI/CD, and monitor with real-time metrics.
            </p>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#06B6D4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0F172A] text-sm">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">RESTful API & GraphQL</div>
                  <div className="text-gray-400">Programmatic control over all pipeline operations</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#06B6D4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0F172A] text-sm">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Infrastructure as Code</div>
                  <div className="text-gray-400">Terraform provider and Helm charts included</div>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-[#06B6D4] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[#0F172A] text-sm">✓</span>
                </div>
                <div>
                  <div className="font-bold mb-1">Real-time Observability</div>
                  <div className="text-gray-400">OpenTelemetry integration with Prometheus & Grafana</div>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* Right: Code Snippet */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-[#1E293B] rounded-2xl border border-gray-700 overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="bg-[#0F172A] px-4 py-3 flex items-center gap-2 border-b border-gray-700">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-400 text-sm ml-2 font-mono">pipeline-config.json</span>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm overflow-x-auto">
                <pre className="text-gray-300">
                  <code>{codeSnippet}</code>
                </pre>
              </div>

              {/* Command Line */}
              <div className="bg-[#0F172A] px-6 py-4 border-t border-gray-700">
                <div className="flex items-center gap-2 text-sm font-mono">
                  <span className="text-[#06B6D4]">$</span>
                  <span className="text-gray-300">tablinum deploy pipeline-config.json</span>
                  <span className="inline-block w-2 h-4 bg-[#06B6D4] animate-pulse ml-1" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
