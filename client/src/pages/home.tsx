import { useState } from 'react';
import { DesktopWindow } from "@/components/desktop-window";
import { DesktopIcon } from "@/components/desktop-icon";
import { Taskbar } from "@/components/taskbar";
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
  const [openWindows, setOpenWindows] = useState<string[]>([]);

  const openWindow = (windowId: string) => {
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
    }
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
  };

  const desktopIcons = [
    { id: 'about', icon: '👤', label: 'About Me', position: { x: 30, y: 30 } },
    { id: 'projects', icon: '🛠️', label: 'Projects', position: { x: 30, y: 120 } },
    { id: 'photos', icon: '📸', label: 'Photos', position: { x: 30, y: 210 } },
    { id: 'music', icon: '🎵', label: 'Music', position: { x: 30, y: 300 } },
    { id: 'links', icon: '🔗', label: 'Links', position: { x: 30, y: 390 } },
    { id: 'guestbook', icon: '📝', label: 'Guestbook', position: { x: 30, y: 480 } },
    { id: 'footprint', icon: '🔒', label: 'Footprint', position: { x: 120, y: 30 } },
    { id: 'blog', icon: '📖', label: 'Blog', position: { x: 120, y: 120 } }
  ];

  return (
    <div className="desktop-bg relative">
      {/* Desktop Icons */}
      {desktopIcons.map(icon => (
        <DesktopIcon
          key={icon.id}
          icon={icon.icon}
          label={icon.label}
          position={icon.position}
          onDoubleClick={() => openWindow(icon.id)}
        />
      ))}

      {/* Windows */}
      <DesktopWindow
        title="About Me - Peter Sweeney"
        isOpen={openWindows.includes('about')}
        onClose={() => closeWindow('about')}
        initialPosition={{ x: 200, y: 100 }}
        width={500}
        height={400}
      >
        <div className="p-4">
          <div className="flex items-start gap-4 mb-4">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&h=100" 
              alt="Peter Sweeney" 
              className="w-20 h-20 border-2 inset border-gray-400"
            />
            <div>
              <h3 className="font-bold text-lg mb-2">Peter Sweeney</h3>
              <p className="text-sm">
                Growth Lead at Footprint • Ex-Goldman Sachs • Ex-Founder of ALAO
              </p>
            </div>
          </div>
          <p className="text-sm leading-relaxed">
            Hey everyone - I'm Peter. I currently lead growth at Footprint, where we help fintechs 
            and financial institutions verify identity and prevent fraud. Former investment banker 
            at Goldman Sachs, ex-founder of ALAO. I love building things and exploring new tech.
            Always looking to meet cool and interesting people.
          </p>
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="Current Projects"
        isOpen={openWindows.includes('projects')}
        onClose={() => closeWindow('projects')}
        initialPosition={{ x: 250, y: 150 }}
        width={600}
        height={500}
      >
        <div className="p-4">
          {projects.map((project, index) => (
            <div key={index} className="mb-4 p-3 bg-white border-2 inset border-gray-400">
              <h4 className="font-bold text-sm mb-1">{project.title}</h4>
              <p className="text-xs mb-2">{project.description}</p>
              <div className="flex gap-1 flex-wrap">
                {project.tags.map((tag, tagIndex) => (
                  <span key={tagIndex} className="bg-blue-800 text-white px-1 py-0.5 text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="Photo Gallery"
        isOpen={openWindows.includes('photos')}
        onClose={() => closeWindow('photos')}
        initialPosition={{ x: 300, y: 200 }}
        width={500}
        height={400}
      >
        <div className="p-4">
          <p className="text-sm mb-4">Surfing, snowboarding, tennis, good food with friends, and BBQ!</p>
          <div className="grid grid-cols-3 gap-2">
            {photos.map((photo, index) => (
              <div key={index} className="polaroid" style={{ transform: 'none', margin: 0 }}>
                <img 
                  src={photo.src}
                  alt={photo.alt}
                  className="w-full h-20 object-cover"
                />
                <div className="text-center mt-1 text-xs font-comic text-black">
                  {photo.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="Spotify Music Player"
        isOpen={openWindows.includes('music')}
        onClose={() => closeWindow('music')}
        initialPosition={{ x: 350, y: 100 }}
        width={400}
        height={350}
      >
        <div className="p-4">
          <p className="text-sm mb-4">Check out my tunes on Spotify!</p>
          <div className="bg-white border-2 inset border-gray-400 h-64">
            <iframe 
              src="https://open.spotify.com/embed/user/312jm37lavwanfdvn5rbam2olzym" 
              width="100%" 
              height="100%" 
              frameBorder="0" 
              allowTransparency={true}
              allow="encrypted-media"
              title="Spotify Player"
            />
          </div>
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="My Links"
        isOpen={openWindows.includes('links')}
        onClose={() => closeWindow('links')}
        initialPosition={{ x: 400, y: 150 }}
        width={350}
        height={300}
      >
        <div className="p-4">
          <div className="grid grid-cols-2 gap-2">
            {socialLinks.map((link, index) => (
              <MySpaceButton 
                key={index}
                icon={link.icon}
                text={link.name}
                url={link.url}
              />
            ))}
          </div>
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="Guestbook"
        isOpen={openWindows.includes('guestbook')}
        onClose={() => closeWindow('guestbook')}
        initialPosition={{ x: 150, y: 50 }}
        width={500}
        height={600}
      >
        <div className="p-2">
          <Guestbook />
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="Footprint - Identity Verification"
        isOpen={openWindows.includes('footprint')}
        onClose={() => closeWindow('footprint')}
        initialPosition={{ x: 450, y: 200 }}
        width={400}
        height={300}
      >
        <div className="p-4">
          <h3 className="font-bold mb-3">Footprint</h3>
          <p className="text-sm mb-3">
            I lead growth at Footprint, where we help fintechs, financial institutions 
            and marketplaces verify identity, prevent fraud and vault sensitive information.
          </p>
          <button 
            className="myspace-btn text-xs px-3 py-2"
            onClick={() => window.open('https://www.onefootprint.com', '_blank')}
          >
            Visit Footprint →
          </button>
        </div>
      </DesktopWindow>

      <DesktopWindow
        title="My Blog on Medium"
        isOpen={openWindows.includes('blog')}
        onClose={() => closeWindow('blog')}
        initialPosition={{ x: 500, y: 250 }}
        width={450}
        height={350}
      >
        <div className="p-4">
          <h3 className="font-bold mb-3">Recent Blog Posts</h3>
          <div className="space-y-2 text-xs">
            <div className="p-2 bg-white border border-gray-400">
              <strong>Sports Talk Radio: The Best Community Building Medium</strong>
            </div>
            <div className="p-2 bg-white border border-gray-400">
              <strong>Why the F*ck Can't I Get Sabrina Carpenter Out of My Head?</strong>
            </div>
            <div className="p-2 bg-white border border-gray-400">
              <strong>The Erosion and Rediscovery of Personal Style in the Age of AI</strong>
            </div>
            <div className="p-2 bg-white border border-gray-400">
              <strong>I Am Looking for Adventures</strong>
            </div>
          </div>
          <button 
            className="myspace-btn text-xs px-3 py-2 mt-3"
            onClick={() => window.open('https://medium.com/@peter_sweeney', '_blank')}
          >
            Read More on Medium →
          </button>
        </div>
      </DesktopWindow>

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}
