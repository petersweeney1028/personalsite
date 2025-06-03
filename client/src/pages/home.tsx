import { MouseTrail } from "@/components/mouse-trail";
import { FloatingTimeWidget } from "@/components/floating-time-widget";
import { Sparkles } from "@/components/sparkles";
import { PolaroidPhoto } from "@/components/polaroid-photo";
import { MySpaceButton } from "@/components/myspace-button";
import { Guestbook } from "@/components/guestbook";

const photos = [
  {
    src: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Retro computer setup",
    caption: "My setup! 💻"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Vintage polaroid photos",
    caption: "Memories 📸"
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Retro boombox",
    caption: "The beats! 🎵"
  },
  {
    src: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Retro arcade games",
    caption: "Game time! 🕹️"
  },
  {
    src: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Retro CRT television",
    caption: "Old school TV 📺"
  },
  {
    src: "https://images.unsplash.com/photo-1487014679447-9f8336841d58?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=200",
    alt: "Early web design",
    caption: "Web vibes! 🌐"
  }
];

const socialLinks = [
  { name: "Twitter", icon: "🐦", url: "https://x.com/peter_sweeney0" },
  { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/peter-sweeney-a78b85b9/" },
  { name: "GitHub", icon: "💻", url: "https://github.com/petersweeney1028" },
  { name: "Medium", icon: "📝", url: "https://medium.com/@peter_sweeney" },
  { name: "Spotify", icon: "🎵", url: "https://open.spotify.com/user/312jm37lavwanfdvn5rbam2olzym" },
  { name: "Footprint", icon: "🔒", url: "https://www.onefootprint.com" },
  { name: "Night Routine", icon: "🌙", url: "https://apps.apple.com/sa/app/night-routine/id6740878360" },
  { name: "Email", icon: "📧", url: "mailto:hello@petersweeney.com" }
];

const projects = [
  {
    title: "Night Routine App",
    description: "Working with a friend on an app to help people set and stick to a nightly routine to optimize their sleep. Available on the App Store.",
    tags: ["iOS", "Sleep Tech"]
  },
  {
    title: "Chrome Article Summarizer",
    description: "Building a chrome extension that summarizes saved articles using GPT. Because who actually reads all those Instapaper articles?",
    tags: ["Chrome Extension", "AI"]
  },
  {
    title: "3D Printer Build",
    description: "Currently assembling a Prusa i3 MK3S+ kit. Part of my journey into the reindustrialization movement and getting my hands dirty with hardware.",
    tags: ["Hardware", "3D Printing"]
  },
  {
    title: "Blog Writing",
    description: "Writing about tech, culture, and startups on Medium. Covering everything from AI and NFTs to the future of content and community building.",
    tags: ["Writing", "Medium"]
  }
];

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="retro-bg relative overflow-x-hidden">
      <FloatingTimeWidget />
      
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Welcome Section */}
        <section className="retro-container p-8 mb-8 text-center">
          <div className="mb-6">
            <div className="inline-block bg-yellow-300 text-black font-comic text-2xl px-6 py-3 border-2 border-black animate-blink font-bold">
              ★ PETER'S DIGITAL SPACE ★
            </div>
          </div>
          
          <h1 className="font-comic text-4xl md:text-6xl lg:text-8xl mb-6 text-blue-800">
            PETER'S HOMEPAGE
          </h1>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="polaroid">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300" 
                alt="Peter's profile photo" 
                className="w-48 h-48 object-cover rounded"
              />
              <div className="text-center mt-3 font-comic text-black">That's me! 📸</div>
            </div>
            
            <div className="text-left max-w-2xl">
              <p className="font-verdana text-lg mb-4 leading-relaxed text-black">
                Hey everyone - I'm Peter. I currently lead growth at Footprint, where we help fintechs and financial institutions verify identity and prevent fraud. 
                Former investment banker at Goldman Sachs, ex-founder of ALAO. I love building things and exploring new tech.
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <span className="bg-red-500 text-white px-3 py-1 border-2 border-black font-comic">Growth Lead</span>
                <span className="bg-blue-500 text-white px-3 py-1 border-2 border-black font-comic">Ex-Founder</span>
                <span className="bg-green-500 text-white px-3 py-1 border-2 border-black font-comic">Builder</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* What I'm Up To Section */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-purple-800 mb-6 text-center">
            Current Projects & Side Hustles
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-gray-100 p-6 border-2 outset border-gray-400">
                <h3 className="font-comic text-xl text-blue-800 mb-3">{project.title}</h3>
                <p className="text-sm mb-3 text-black">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-blue-800 text-white px-2 py-1 text-xs font-verdana border border-black">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
        
        {/* Photo Zone */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-red-800 mb-6 text-center">
            Fun Stuff & Adventures
          </h2>
          <p className="text-center mb-8 font-verdana text-black">Surfing, snowboarding, tennis, good food with friends, and BBQ!</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
            {photos.map((photo, index) => (
              <PolaroidPhoto 
                key={index}
                src={photo.src}
                alt={photo.alt}
                caption={photo.caption}
              />
            ))}
          </div>
        </section>
        
        {/* Music Section */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-green-800 mb-6 text-center">
            My Music Player
          </h2>
          <p className="text-center mb-6 font-verdana text-black">Check out my tunes on Spotify!</p>
          
          <div className="bg-gray-200 p-4 border-2 inset border-gray-400">
            <div className="text-center text-black font-comic mb-4 bg-blue-800 text-white p-2 border-2 border-black">SPOTIFY PLAYER</div>
            <div className="bg-white h-80 border-2 inset border-gray-400 flex items-center justify-center">
              <iframe 
                src="https://open.spotify.com/embed/user/312jm37lavwanfdvn5rbam2olzym" 
                width="100%" 
                height="300" 
                frameBorder="0" 
                allowTransparency={true}
                allow="encrypted-media"
                title="Spotify Player"
              />
            </div>
          </div>
        </section>
        
        {/* Links Section */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-purple-800 mb-6 text-center">
            Find Me Around The Web
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialLinks.map((link, index) => (
              <MySpaceButton 
                key={index}
                icon={link.icon}
                text={link.name}
                url={link.url}
              />
            ))}
          </div>
        </section>
        
        {/* Guestbook Section */}
        <Guestbook />
        
        {/* Footer */}
        <footer className="text-center py-8">
          <div className="font-comic text-blue-800 mb-4">
            Always looking to meet cool and interesting people
          </div>
          <div className="font-verdana text-xs text-black">
            © 2024 Peter Sweeney • DM me on Twitter if you want to chat
          </div>
          <div className="mt-4 animate-bounce cursor-pointer" onClick={scrollToTop}>
            <span className="text-2xl">⬆️</span>
            <div className="font-comic text-sm text-purple-800">Back to Top!</div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}
