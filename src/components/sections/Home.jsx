import { RevealOnScroll } from "./RevealOnScroll";
import PixelBlast from "./bg";

export const Home = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background PixelBlast */}
      <div className="absolute inset-0">
        <PixelBlast
          variant="square"
          pixelSize={3}
          color="#38ff98"
          patternScale={3.5}
          patternDensity={1.05}
          pixelSizeJitter={0.65}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.4}
          edgeFade={0.25}
          transparent
        />
      </div>

      {/* Foreground content */}
      <RevealOnScroll>
        <div className="relative z-10 text-center px-4">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6
                       bg-gradient-to-r from-white to-green-500
                       bg-clip-text text-transparent leading-tight"
          >
            Hi, I'm Aljazy
          </h1>

          <p className="text-white-500 text-lg mb-8 max-w-lg mx-auto">
            Aspiring full-stack developer skilled in JavaScript, HTML, and CSS.
            Passionate about building complete web applications and continuously
            expanding my front-end and back-end expertise
          </p>

          <div className="flex justify-center space-x-4">
            <a
              href="#project"
              className="bg-emerald-600 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 
                         hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              View projects
            </a>

            <a
              href="#contact"
              className="border border-emerald-600/60 text-emerald-600 py-3 px-6 rounded font-medium transition-all duration-200
                         hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-emerald-600/10"
            >
              Contact me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
