import { useState } from 'react';
import { DesktopWindow } from "@/components/desktop-window";
import { DesktopIcon } from "@/components/desktop-icon";
import { Taskbar } from "@/components/taskbar";
import { SpotifyWindow } from "@/components/spotify-window";
import { ClockWeatherWindow } from "@/components/clock-weather-window";
import { ImageLightbox } from "@/components/image-lightbox";
import { Guestbook } from "@/components/guestbook";
import peterHeadshot from "@assets/Peter-Headshot.webp";

const inspirationImages = [
  {
    src: "https://images.unsplash.com/photo-1554941426-e6312d7d6054?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Tennis court with warm light",
    caption: "Vintage tennis courts capture that perfect summer light"
  },
  {
    src: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "70s interior design",
    caption: "Warm earth tones and organic shapes from the 70s"
  },
  {
    src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Sunset over tennis court",
    caption: "Sun-faded textures and golden hour nostalgia"
  },
  {
    src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Retro poolside scene",
    caption: "Poolsuite-inspired summer vibes"
  },
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Vintage polaroid photos",
    caption: "Analog memories and instant photography"
  },
  {
    src: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    alt: "Retro radio",
    caption: "Vintage audio equipment and warm tones"
  }
];

const books = [
  {
    title: "Sapiens",
    author: "Yuval Noah Harari",
    cover: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "Fascinating perspective on human history and evolution"
  },
  {
    title: "The Power Broker",
    author: "Robert Caro",
    cover: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "Epic biography of Robert Moses and power in America"
  },
  {
    title: "Zero to One",
    author: "Peter Thiel",
    cover: "https://images.unsplash.com/photo-1592496431122-2349e0fbc666?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "Essential reading for anyone building startups"
  },
  {
    title: "The Subtle Art of Not Giving a F*ck",
    author: "Mark Manson",
    cover: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "Counterintuitive approach to living a good life"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    cover: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "Practical framework for building good habits"
  },
  {
    title: "The Mom Test",
    author: "Rob Fitzpatrick",
    cover: "https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&h=300",
    notes: "How to talk to customers and learn if your idea is good"
  }
];

const socialLinks = [
  { name: "X (Twitter)", icon: "🐦", url: "https://x.com/peter_sweeney0" },
  { name: "LinkedIn", icon: "💼", url: "https://www.linkedin.com/in/peter-sweeney-a78b85b9/" },
  { name: "GitHub", icon: "💻", url: "https://github.com/petersweeney1028" },
  { name: "Medium", icon: "📝", url: "https://medium.com/@peter_sweeney" },
  { name: "Footprint", icon: "🔒", url: "https://www.onefootprint.com" }
];

const blogPosts = [
  {
    title: "Sports Talk Radio: The Best Community-Building Medium",
    url: "https://medium.com/@peter_sweeney/sports-talk-radio-the-best-community-building-medium-84e21b9dfb82"
  },
  {
    title: "Why the F*ck Can't I Get Sabrina Carpenter Out of My Head?",
    url: "https://medium.com/@peter_sweeney/why-the-f-ck-cant-i-get-sabrina-carpenter-out-of-my-head-658117112ae3"
  },
  {
    title: "The Erosion and Rediscovery of Personal Style in the Age of AI",
    url: "https://medium.com/@peter_sweeney/the-erosion-and-rediscovery-of-personal-style-in-the-age-of-ai-229bbe242b35"
  },
  {
    title: "I Am Looking for Adventures",
    url: "https://medium.com/@peter_sweeney/i-am-looking-for-adventures-079b68e59b88"
  },
  {
    title: "How to Be More Productive",
    url: "https://medium.com/@peter_sweeney/how-to-be-more-productive-dc8ada8a3fb3"
  },
  {
    title: "Interesting Things to Build in the Future: Part 3 – Future of Content",
    url: "https://medium.com/@peter_sweeney/interesting-things-to-build-in-the-future-part-3-future-of-content-2e536eed6321"
  },
  {
    title: "Interesting Things to Build in the Future: Part 2 – Longing for Belonging",
    url: "https://medium.com/@peter_sweeney/interesting-things-to-build-in-the-future-part-2-longing-for-belonging-f816322ebd61"
  },
  {
    title: "Interesting Things to Build in the Future",
    url: "https://medium.com/@peter_sweeney/interesting-things-to-build-in-the-future-45a8ca6f1c0e"
  }
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
  const [openWindows, setOpenWindows] = useState<string[]>(['clock', 'spotify']);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [windowZIndices, setWindowZIndices] = useState<Record<string, number>>({
    clock: 100,
    spotify: 101
  });
  const [highestZIndex, setHighestZIndex] = useState(101);

  const openWindow = (windowId: string) => {
    console.log(`Opening window: ${windowId}`);
    console.log(`Current open windows:`, openWindows);
    
    if (!openWindows.includes(windowId)) {
      setOpenWindows([...openWindows, windowId]);
      console.log(`Window ${windowId} added to open windows`);
      
      // Set z-index for new window
      const newZIndex = highestZIndex + 1;
      setWindowZIndices(prev => ({ ...prev, [windowId]: newZIndex }));
      setHighestZIndex(newZIndex);
    } else {
      // If window is already open, bring it to front
      bringToFront(windowId);
      console.log(`Window ${windowId} already open`);
    }
  };

  const bringToFront = (windowId: string) => {
    const newZIndex = highestZIndex + 1;
    setWindowZIndices(prev => ({ ...prev, [windowId]: newZIndex }));
    setHighestZIndex(newZIndex);
  };

  const closeWindow = (windowId: string) => {
    setOpenWindows(openWindows.filter(id => id !== windowId));
  };

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setLightboxIndex((prev) => (prev + 1) % inspirationImages.length);
  };

  const prevImage = () => {
    setLightboxIndex((prev) => (prev - 1 + inspirationImages.length) % inspirationImages.length);
  };

  const desktopIcons = [
    { id: 'work', icon: '👋', label: 'About Me', position: { x: 30, y: 30 } },
    { id: 'spotify', icon: '🎵', label: 'Spotify', position: { x: 30, y: 130 } },
    { id: 'inspiration', icon: '🖼️', label: 'Inspiration', position: { x: 30, y: 230 } },
    { id: 'writing', icon: '✍️', label: 'Writing', position: { x: 30, y: 330 } },
    { id: 'reading', icon: '📚', label: 'Reading', position: { x: 30, y: 430 } },
    { id: 'guestbook', icon: '📝', label: 'Guestbook', position: { x: 130, y: 30 } }
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

      {/* Clock & Weather Window (Auto-opens) */}
      <ClockWeatherWindow
        isOpen={openWindows.includes('clock')}
        onClose={() => closeWindow('clock')}
        zIndex={windowZIndices.clock || 100}
        onFocus={() => bringToFront('clock')}
      />

      {/* Spotify Window */}
      {openWindows.includes('spotify') && (
        <DesktopWindow
          title="🎵 Spotify Player"
          isOpen={true}
          onClose={() => closeWindow('spotify')}
          initialPosition={{ x: 200, y: 100 }}
          width={450}
          height={400}
          zIndex={windowZIndices.spotify || 100}
          onFocus={() => bringToFront('spotify')}
        >
          <div className="p-4" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <p className="text-sm mb-4 font-serif">Now playing from my Liked Songs collection</p>
            <div className="bg-white border-2 inset border-gray-400 h-64 rounded">
              <iframe 
                src="https://open.spotify.com/embed/user/312jm37lavwanfdvn5rbam2olzym" 
                width="100%" 
                height="100%" 
                frameBorder="0" 
                allowTransparency={true}
                allow="encrypted-media"
                title="Spotify Player"
                style={{ borderRadius: '4px' }}
              />
            </div>
            <div className="mt-3 flex gap-2">
              <button className="retro-button text-xs px-3 py-1">⏸️ Pause</button>
              <button className="retro-button text-xs px-3 py-1">⏭️ Next</button>
            </div>
          </div>
        </DesktopWindow>
      )}

      {/* Inspiration Window */}
      {openWindows.includes('inspiration') && (
        <DesktopWindow
          title="🖼️ Visual Inspiration"
          isOpen={true}
          onClose={() => closeWindow('inspiration')}
          initialPosition={{ x: 300, y: 150 }}
          width={500}
          height={400}
          zIndex={windowZIndices.inspiration || 100}
          onFocus={() => bringToFront('inspiration')}
        >
          <div className="p-4" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <p className="text-sm mb-4 font-serif">Vintage tennis, 70s interiors, and sun-faded aesthetics</p>
            <div className="grid grid-cols-3 gap-2">
              {inspirationImages.map((image, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-20 object-cover border-2 border-gray-400 rounded"
                  />
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-3 font-serif">Click any image to view in full size</p>
          </div>
        </DesktopWindow>
      )}

      {/* Writing Window */}
      {openWindows.includes('writing') && (
        <DesktopWindow
          title="✍️ My Writing"
          isOpen={true}
          onClose={() => closeWindow('writing')}
          initialPosition={{ x: 250, y: 200 }}
          width={450}
          height={350}
          zIndex={windowZIndices.writing || 100}
          onFocus={() => bringToFront('writing')}
        >
          <div className="p-4" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <h3 className="font-bold mb-3 font-serif" style={{ color: '#F2B5D4' }}>My Blog Posts</h3>
            <div className="space-y-2 text-sm max-h-60 overflow-y-auto">
              {blogPosts.map((post, index) => (
                <div key={index} className="p-3 bg-white border border-gray-400 rounded cursor-pointer hover:bg-gray-50">
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <strong>{post.title}</strong>
                  </a>
                </div>
              ))}
            </div>
            <button 
              className="retro-button text-xs px-3 py-2 mt-3"
              onClick={() => window.open('https://medium.com/@peter_sweeney', '_blank')}
            >
              View All Posts →
            </button>
          </div>
        </DesktopWindow>
      )}

      {/* Reading Window */}
      {openWindows.includes('reading') && (
        <DesktopWindow
          title="📚 My Reading List"
          isOpen={true}
          onClose={() => closeWindow('reading')}
          initialPosition={{ x: 400, y: 100 }}
          width={450}
          height={500}
          zIndex={windowZIndices.reading || 100}
          onFocus={() => bringToFront('reading')}
        >
          <div className="p-4">
            <h3 className="font-bold mb-3 font-serif" style={{ color: '#8B4513' }}>Books & Notes</h3>
            <div className="grid grid-cols-2 gap-3">
              {books.map((book, index) => (
                <div 
                  key={index} 
                  className="p-3 bg-white border border-gray-400 rounded cursor-pointer hover:bg-gray-50 transition-colors"
                  title={book.notes}
                >
                  <img 
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-24 object-cover border border-gray-300 rounded mb-2"
                  />
                  <div className="text-xs">
                    <div className="font-bold">{book.title}</div>
                    <div className="text-gray-600">{book.author}</div>
                    <div className="text-gray-500 mt-1 text-xs">{book.notes}</div>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xs text-gray-600 mt-3 font-serif">Hover over books to see my notes</p>
          </div>
        </DesktopWindow>
      )}

      {/* About Me Window */}
      {openWindows.includes('work') && (
        <DesktopWindow
          title="👋 About Me"
          isOpen={true}
          onClose={() => closeWindow('work')}
          initialPosition={{ x: 350, y: 250 }}
          width={550}
          height={450}
          zIndex={windowZIndices.work || 100}
          onFocus={() => bringToFront('work')}
        >
          <div className="p-6 h-full" style={{ backgroundColor: '#403D39' }}>
            <div className="flex items-start gap-6 mb-6">
              <img 
                src={peterHeadshot} 
                alt="Peter Sweeney" 
                className="w-24 h-24 border-3 rounded-lg shadow-lg object-cover" 
                style={{ borderColor: '#C1DDB9' }}
              />
              <div>
                <h3 className="font-bold text-2xl mb-3 font-serif" style={{ color: '#F2B5D4' }}>Peter Sweeney</h3>
              </div>
            </div>
            
            <div className="rounded-lg border-2 p-5 shadow-md" style={{ backgroundColor: '#403D39', borderColor: '#C1DDB9' }}>
              <div className="space-y-4 text-base font-serif max-h-60 overflow-y-auto leading-relaxed" style={{ color: '#F2B5D4' }}>
                <p>Hey everyone - I am Peter. I currently lead growth at Footprint, where we help fintechs, financial institutions, and marketplaces verify identity, prevent fraud, and vault sensitive information.</p>
                
                <p>I started my career in investment banking at GS, where I spent ~3 years on the TMT team. I left back in 2021 to start a company ALAO, which helped micro-celebrities invest in consumer brands. It was a blast; we made plenty of mistakes and learned a ton. In 2022, we sold the company to Commonwealth (for not a lot of money :)).</p>
                
                <p>I loved being a founder and fully intend to do it again. I joined Footprint as the first business hire in hopes to learn everything I can about building a generational company.</p>
                
                <p>These days I spend most of my time working on Footprint, but also explore curiosities (stablecoins, manufacturing, construction, ingredient supply chain, and agriculture), write a blog (as often as I can), and work on side projects.</p>
                
                <p>I am always looking to meet cool and interesting people. If you want to chat, feel free to DM me on Twitter.</p>
              </div>
            </div>
            
            <div className="mt-6 flex gap-3 justify-center">
              <button 
                className="retro-button text-sm px-4 py-2"
                onClick={() => window.open('https://www.linkedin.com/in/peter-sweeney-a78b85b9/', '_blank')}
              >
                LinkedIn
              </button>
              <button 
                className="retro-button text-sm px-4 py-2"
                onClick={() => window.open('https://x.com/peter_sweeney0', '_blank')}
              >
                Twitter
              </button>
              <button 
                className="retro-button text-sm px-4 py-2"
                onClick={() => window.open('https://medium.com/@peter_sweeney', '_blank')}
              >
                Medium
              </button>
            </div>
          </div>
        </DesktopWindow>
      )}

      {/* Guestbook Window */}
      {openWindows.includes('guestbook') && (
        <DesktopWindow
          title="📝 Sign My Guestbook"
          isOpen={true}
          onClose={() => closeWindow('guestbook')}
          initialPosition={{ x: 150, y: 50 }}
          width={500}
          height={600}
          zIndex={windowZIndices.guestbook || 100}
          onFocus={() => bringToFront('guestbook')}
        >
          <div style={{ padding: '8px' }}>
            <Guestbook />
          </div>
        </DesktopWindow>
      )}

      {/* Image Lightbox */}
      <ImageLightbox
        images={inspirationImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      {/* Taskbar */}
      <Taskbar />
    </div>
  );
}
