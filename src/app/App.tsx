import { Navigation } from "./components/navigation";
import { Hero } from "./components/hero";
import { LogoStrip } from "./components/logo-strip";
import { ValueProposition } from "./components/value-proposition";
import { FeaturePreview } from "./components/feature-preview";
import { TechnicalDeepDive } from "./components/technical-deep-dive";
import { Footer } from "./components/footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <LogoStrip />
      <ValueProposition />
      <FeaturePreview />
      <TechnicalDeepDive />
      <Footer />
    </div>
  );
}