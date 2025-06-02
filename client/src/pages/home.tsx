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
  { name: "Twitter", icon: "🐦", url: "https://twitter.com" },
  { name: "LinkedIn", icon: "💼", url: "https://linkedin.com" },
  { name: "Newsletter", icon: "📧", url: "mailto:hello@example.com" },
  { name: "Spotify", icon: "🎵", url: "https://open.spotify.com/user/312jm37lavwanfdvn5rbam2olzym" },
  { name: "Blog", icon: "📚", url: "https://blog.example.com" },
  { name: "Portfolio", icon: "🎨", url: "https://portfolio.example.com" },
  { name: "Discord", icon: "💬", url: "https://discord.com" },
  { name: "Instagram", icon: "📱", url: "https://instagram.com" }
];

const projects = [
  {
    title: "Building Cool Web Stuff",
    description: "Working on some awesome web projects that blend retro aesthetics with modern functionality. It's like bringing the best of both worlds together!",
    tags: ["HTML/CSS", "JavaScript"],
    gradient: "from-purple-600 to-pink-500"
  },
  {
    title: "Learning New Tech",
    description: "Always exploring the latest in web development while keeping that nostalgic flair alive. Currently diving deep into modern frameworks!",
    tags: ["React", "Node.js"],
    gradient: "from-green-500 to-blue-500"
  },
  {
    title: "Creative Projects",
    description: "Experimenting with digital art, music, and interactive experiences. The early 2000s were all about self-expression!",
    tags: ["Art", "Music"],
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "Community Building",
    description: "Connecting with fellow web enthusiasts and sharing the love for retro internet culture. Let's bring back the fun web!",
    tags: ["Networking", "Sharing"],
    gradient: "from-cyan-500 to-purple-500"
  }
];

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="retro-bg relative overflow-x-hidden">
      <MouseTrail />
      <FloatingTimeWidget />
      <Sparkles />
      
      <div className="container mx-auto max-w-6xl px-4 py-8">
        
        {/* Welcome Section */}
        <section className="retro-container p-8 mb-8 text-center">
          <div className="mb-6">
            <div className="inline-block bg-gradient-to-r from-yellow-400 via-pink-500 to-cyan-400 text-black font-comic text-2xl px-6 py-3 rounded-full animate-blink font-bold">
              ★ WELCOME TO MY CYBERSPACE ★
            </div>
          </div>
          
          <h1 className="font-comic text-4xl md:text-6xl lg:text-8xl mb-6 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent animate-pulse">
            PETER'S SPACE
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
              <p className="font-verdana text-lg mb-4 leading-relaxed">
                Hey! I'm Peter, and welcome to my little corner of the internet! 🌟 
                This site is like my digital diary mixed with a time machine back to the golden age of the web. 
                I'm passionate about technology, creativity, and making the internet a more fun place!
              </p>
              <div className="flex gap-4 justify-center md:justify-start flex-wrap">
                <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-comic">Web Enthusiast</span>
                <span className="bg-pink-500 text-white px-3 py-1 rounded-full font-comic">Creator</span>
                <span className="bg-cyan-400 text-black px-3 py-1 rounded-full font-comic">Dreamer</span>
              </div>
            </div>
          </div>
        </section>
        
        {/* What I'm Up To Section */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-yellow-400 mb-6 text-center neon-text">
            🚀 What I'm Up To Right Now 🚀
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className={`bg-gradient-to-br ${project.gradient} p-6 rounded-xl border-2 border-white transition-transform hover:scale-105`}>
                <h3 className="font-comic text-xl text-cyan-400 mb-3">{project.title}</h3>
                <p className="text-sm mb-3">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="bg-black text-yellow-400 px-2 py-1 text-xs rounded font-pixel">
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
          <h2 className="font-comic text-4xl text-pink-400 mb-6 text-center neon-text">
            📸 My Photo Zone 📸
          </h2>
          <p className="text-center mb-8 font-verdana">Random pics from my adventures and things I love!</p>
          
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
          <h2 className="font-comic text-4xl text-cyan-400 mb-6 text-center neon-text">
            🎵 My Soundtrack 🎵
          </h2>
          <p className="text-center mb-6 font-verdana">Vibes from my Spotify Liked Songs!</p>
          
          <div className="bg-black rounded-xl p-4 border-2 border-green-400">
            <div className="text-center text-yellow-400 font-comic mb-4">🎧 SPOTIFY PLAYER 🎧</div>
            <div className="bg-gray-800 h-80 rounded-lg flex items-center justify-center">
              <iframe 
                src="https://open.spotify.com/embed/user/312jm37lavwanfdvn5rbam2olzym" 
                width="100%" 
                height="300" 
                frameBorder="0" 
                allowTransparency={true}
                allow="encrypted-media"
                className="rounded-lg"
                title="Spotify Player"
              />
            </div>
          </div>
        </section>
        
        {/* Links Section */}
        <section className="retro-container p-8 mb-8">
          <h2 className="font-comic text-4xl text-yellow-400 mb-6 text-center neon-text">
            🔗 Find Me Around The Web 🔗
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
          <div className="font-comic text-cyan-400 mb-4">
            Made with 💖 in the spirit of the early web
          </div>
          <div className="font-pixel text-xs text-yellow-400">
            © 2024 Peter's Retro Space • Best viewed with nostalgia
          </div>
          <div className="mt-4 animate-bounce cursor-pointer" onClick={scrollToTop}>
            <span className="text-2xl">⬆️</span>
            <div className="font-comic text-sm text-pink-400">Scroll back to top!</div>
          </div>
        </footer>
        
      </div>
    </div>
  );
}
