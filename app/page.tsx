import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 bg-black/90 backdrop-blur-sm border-b border-gray-800 z-50">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-highlight">
                Border Door Game
              </h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="#banner"
                  className="hover:text-highlight px-3 py-2 rounded-md text-sm font-medium"
                >
                  Home
                </a>
                <a
                  href="#video"
                  className="hover:text-highlight px-3 py-2 rounded-md text-sm font-medium"
                >
                  Video
                </a>
                <a
                  href="#team"
                  className="hover:text-highlight px-3 py-2 rounded-md text-sm font-medium"
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="hover:text-highlight px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Banner Section */}
      <section
        id="banner"
        className="relative min-h-screen flex items-center justify-center text-center px-4"
      >
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            <span className="text-glow">BORDER</span>
            <br />
            <span className="text-white">DOOR</span>
            <br />
            <span className="text-highlight">GAME</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            An immersive gaming experience that challenges your strategic
            thinking
          </p>
          <button className="bg-highlight hover:bg-highlight-dark text-black font-bold py-4 px-8 rounded-lg text-lg transition-colors">
            Play Now
          </button>
        </div>
      </section>

      {/* YouTube Video Section */}
      <section id="video" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-highlight">
            Game Trailer
          </h2>
          <p className="text-xl mb-12 text-gray-300">
            Watch our latest gameplay trailer
          </p>
          <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden">
            {/* Replace the src with your YouTube video ID */}
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/gQermu0WrNA"
              title="Border Door Game Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-4 bg-gray-900/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4 text-highlight">
            Our Team
          </h2>
          <p className="text-xl text-center mb-12 text-gray-300">
            Meet the developer behind Border Door Game
          </p>

          <div className="flex justify-center">
            {/* Team Member - Amatak Yvi */}
            <div className="bg-black/50 rounded-lg p-8 text-center border border-gray-800 hover:border-highlight transition-colors max-w-sm">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-2 border-highlight">
                <Image
                  src="/main_image/my_profile.jpg"
                  alt="Amatak Yvi Profile"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold mb-2">Amatak Yvi</h3>
              <p className="text-highlight mb-2 text-lg">
                Lead Developer & Designer
              </p>
              <p className="text-gray-400">
                Computer Science major at George Mason University, fourth year
                student passionate about game development and interactive
                experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-highlight">Contact Us</h2>
          <p className="text-xl mb-12 text-gray-300">
            Get in touch with our development team
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <span className="text-highlight font-bold w-20">Email:</span>
                  <span>contact@borderdoorgame.com</span>
                </div>
                <div className="flex items-center">
                  <span className="text-highlight font-bold w-20">
                    Discord:
                  </span>
                  <span>BorderDoorGame#1234</span>
                </div>
                <div className="flex items-center">
                  <span className="text-highlight font-bold w-20">GitHub:</span>
                  <span>github.com/borderdoorgame</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-highlight focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-highlight focus:outline-none"
                />
                <textarea
                  rows={4}
                  placeholder="Your Message"
                  className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-highlight focus:outline-none resize-none"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-highlight hover:bg-highlight-dark text-black font-bold py-3 px-6 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-highlight">
                Border Door Game
              </h3>
              <p className="text-gray-400">
                An innovative gaming experience that pushes the boundaries of
                interactive entertainment.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-highlight">
                Quick Links
              </h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#banner"
                    className="hover:text-highlight transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#video"
                    className="hover:text-highlight transition-colors"
                  >
                    Video
                  </a>
                </li>
                <li>
                  <a
                    href="#team"
                    className="hover:text-highlight transition-colors"
                  >
                    Team
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-highlight transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4 text-highlight">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-highlight transition-colors"
                >
                  Twitter
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-highlight transition-colors"
                >
                  Discord
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-highlight transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Border Door Game. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
