import { useState } from 'react';
import { DesktopWindow } from "@/components/desktop-window";
import { DesktopIcon } from "@/components/desktop-icon";
import { Taskbar } from "@/components/taskbar";
import { SpotifyWindow } from "@/components/spotify-window";
import { ClockWeatherWindow } from "@/components/clock-weather-window";
import { ImageLightbox } from "@/components/image-lightbox";

import { LoadingScreen } from "@/components/loading-screen";
import peterHeadshot from "@assets/Peter-Headshot.webp";

import boatImage from "@assets/boat.jpg";
import bourdainImage from "@assets/Bourdain.jpg";
import nightBoatImage from "@assets/night boat.jpg";
import oldDudeImage from "@assets/Old dude.jpg";
import oldWithFlowersImage from "@assets/Old with flowers.jpg";
import surfImage from "@assets/surf.jpg";
import toyotaImage from "@assets/toyota.jpg";
import vibinImage from "@assets/vibin.jpg";
import wallPaintImage from "@assets/Wall paint.jpg";
import windowImage from "@assets/window.jpg";
import image1 from "@assets/image_1749505584075.png";
import image2 from "@assets/image_1749505631464.png";
import image3 from "@assets/image_1749505655170.png";
import image4 from "@assets/image_1749505675928.png";
import image5 from "@assets/image_1749505706312.png";
import image6 from "@assets/image_1749505726650.png";
import image7 from "@assets/image_1749505746814.png";
import image8 from "@assets/image_1749505777880.png";
import image9 from "@assets/image_1749505800000.png";
import image10 from "@assets/image_1749505824351.png";
import image11 from "@assets/image_1749505854284.png";
import image12 from "@assets/image_1749505882301.png";
import journeyBook from "@assets/image_1749513879622.png";
import ghostWarsBook from "@assets/image_1749513899150.png";
import atomicBombBook from "@assets/image_1749513917203.png";
import narcolandBook from "@assets/image_1749513936564.png";
import worldRanOutBook from "@assets/image_1749513954205.png";
import weirdestPeopleBook from "@assets/image_1749513970796.png";
import perfectionistsBook from "@assets/image_1749513987058.png";
import skunkWorksBook from "@assets/image_1749514005064.png";
import greenlightsBook from "@/assets/IMG_1043_1749514045458.png";
import fifthRiskBook from "@/assets/IMG_1042_1749514045459.png";
import creativeActBook from "@/assets/IMG_1041_1749514045459.png";
import shoeDogBook from "@/assets/IMG_1040_1749514045459.png";
import redNoticeBook from "@/assets/IMG_1039_1749514045460.png";
import hitchhikerBook from "@/assets/IMG_1038_1749514045460.png";
import elonMuskBook from "@/assets/IMG_1037_1749514045460.png";
import restaurantBook from "@/assets/IMG_1036_1749514045460.png";
import whatsProblemBook from "@/assets/IMG_1035_1749514045460.png";
import chipWarBook from "@/assets/IMG_1034_1749514045461.png";
import redOctoberBook from "@/assets/IMG_1033_1749514045461.png";
import energyBook from "@/assets/IMG_1032_1749514045461.png";
import valentinesProject from "@/assets/valentines-project.png";

const inspirationImages = [
  { src: image9, alt: "Colorful crochet cardigan", caption: "" },
  { src: surfImage, alt: "Surf art", caption: "" },
  { src: image5, alt: "Lakeside with dog", caption: "" },
  { src: oldWithFlowersImage, alt: "Flower vendors", caption: "" },
  { src: image12, alt: "Dinner party celebration", caption: "" },
  { src: boatImage, alt: "Sailing adventure", caption: "" },
  { src: image3, alt: "Smiling in vintage car", caption: "" },
  { src: wallPaintImage, alt: "Creative wall art", caption: "" },
  { src: image7, alt: "Tennis in white", caption: "" },
  { src: vibinImage, alt: "Friends enjoying drinks", caption: "" },
  { src: image1, alt: "Portrait with flower in cap", caption: "" },
  { src: toyotaImage, alt: "Yellow Toyota truck", caption: "" },
  { src: image8, alt: "Horseback riding at sunset", caption: "" },
  { src: bourdainImage, alt: "Bourdain dining", caption: "" },
  { src: image11, alt: "Surfboard and purple shorts", caption: "" },
  { src: windowImage, alt: "Rustic window garden", caption: "" },
  { src: image2, alt: "Friends with drinks outdoors", caption: "" },
  { src: oldDudeImage, alt: "Stylish elder", caption: "" },
  { src: image10, alt: "Breakfast by the window", caption: "" },
  { src: nightBoatImage, alt: "Night boat party", caption: "" },
  { src: image4, alt: "Wine at stylish restaurant", caption: "" },
  { src: image6, alt: "Road trip adventure", caption: "" }
];

const books = [
  {
    title: "Journey to the Centre of the Earth",
    author: "Jules Verne",
    cover: journeyBook
  },
  {
    title: "Ghost Wars",
    author: "Steve Coll",
    cover: ghostWarsBook
  },
  {
    title: "The Making of the Atomic Bomb",
    author: "Richard Rhodes",
    cover: atomicBombBook
  },
  {
    title: "Narcoland",
    author: "Anabel Hernández",
    cover: narcolandBook
  },
  {
    title: "How the World Ran Out of Everything",
    author: "Peter S. Goodman",
    cover: worldRanOutBook
  },
  {
    title: "The WEIRDest People in the World",
    author: "Joseph Henrich",
    cover: weirdestPeopleBook
  },
  {
    title: "The Perfectionists",
    author: "Simon Winchester",
    cover: perfectionistsBook
  },
  {
    title: "Skunk Works",
    author: "Ben R. Rich and Leo Janos",
    cover: skunkWorksBook
  },
  {
    title: "Greenlights",
    author: "Matthew McConaughey",
    cover: greenlightsBook
  },
  {
    title: "The Fifth Risk",
    author: "Michael Lewis",
    cover: fifthRiskBook
  },
  {
    title: "The Creative Act: A Way of Being",
    author: "Rick Rubin",
    cover: creativeActBook
  },
  {
    title: "Shoe Dog",
    author: "Phil Knight",
    cover: shoeDogBook
  },
  {
    title: "Red Notice",
    author: "Bill Browder",
    cover: redNoticeBook
  },
  {
    title: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    cover: hitchhikerBook
  },
  {
    title: "Elon Musk",
    author: "Walter Isaacson",
    cover: elonMuskBook
  },
  {
    title: "The Restaurant at the End of the Universe",
    author: "Douglas Adams",
    cover: restaurantBook
  },
  {
    title: "What's Our Problem?",
    author: "Tim Urban",
    cover: whatsProblemBook
  },
  {
    title: "Chip War",
    author: "Chris Miller",
    cover: chipWarBook
  },
  {
    title: "The Hunt for Red October",
    author: "Tom Clancy",
    cover: redOctoberBook
  },
  {
    title: "Energy: A Human History",
    author: "Richard Rhodes",
    cover: energyBook
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

const sideProjects = [
  {
    title: "Night Routine",
    description: "Working with a friend on an app to help people set and stick to a nightly routine to optimize their sleep.",
    status: "Live on App Store",
    link: "https://apps.apple.com/sa/app/night-routine/id6740878360",
    icon: "🌙",
    note: "Check it out on the App Store!"
  },
  {
    title: "Chrome Plugin to Summarize Articles",
    description: "I am a big Instapaper user, which really means I store articles in there and never read them. Building a chrome plugin that sends you a summary of all saved articles once a week.",
    status: "In Development",
    link: "https://www.loom.com/share/c4d912fa335a43c58d632e36bb3d8033?sid=5ad9ffa7-af94-437e-bad5-c21cee94dfd3",
    icon: "🔗",
    note: "Building with GPT and YouTube videos. Latest progress shown in Loom video!"
  },
  {
    title: "Taylor Swift Newsletter",
    description: "Built an AI automated Taylor Swift newsletter in early 2023. Daily webscraper pulled top 10 Google News stories, GPT summarized in millennial voice, used TF-IDF matrix for similarity detection.",
    status: "Discontinued",
    link: null,
    icon: "📰",
    note: "Peaked at 11 subscribers. Google News changed their HTML and broke the scraper 2 weeks after launch."
  },
  {
    title: "Screw Cupid, Just Text",
    description: "Valentine's Day project for college students to anonymously message their crush. Built with SquareSpace, Zapier, Google Sheets, and Twilio. $1 to reveal sender identity.",
    status: "Completed",
    link: null,
    icon: "💕",
    note: "Made $4 total revenue lol",
    image: valentinesProject
  },
  {
    title: "Building 3D Printer",
    description: "Currently building a 3D printer as part of my journey into the reindustrialization movement. Bought a Prusa i3 MK3S+ kit assembly after realizing I needed one to build an underwater drone kit.",
    status: "Completed",
    link: "https://x.com/peter_sweeney0/status/1836571857480204436",
    icon: "🖨️",
    note: "The printer is working! Took longer than I'd like to admit but we are live. Hit me up for all your 3D printer needs"
  }
];

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [openWindows, setOpenWindows] = useState<string[]>(['clock']);
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

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  // Responsive desktop icon positions
  const getResponsiveIconPositions = () => {
    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
      // Mobile layout - arrange in a more compact grid
      return [
        { id: 'clock', icon: '🕐', label: 'Clock & Weather', position: { x: 20, y: 20 } },
        { id: 'work', icon: '👋', label: 'About Me', position: { x: 110, y: 20 } },
        { id: 'spotify', icon: '🎵', label: 'Spotify', position: { x: 200, y: 20 } },
        { id: 'projects', icon: '🛠️', label: 'Side Projects', position: { x: 20, y: 110 } },
        { id: 'inspiration', icon: '🖼️', label: 'Inspiration', position: { x: 110, y: 110 } },
        { id: 'writing', icon: '✍️', label: 'Writing', position: { x: 200, y: 110 } },
        { id: 'reading', icon: '📚', label: 'Reading', position: { x: 20, y: 200 } }
      ];
    } else {
      // Desktop layout - scattered naturally
      return [
        { id: 'clock', icon: '🕐', label: 'Clock & Weather', position: { x: 85, y: 45 } },
        { id: 'work', icon: '👋', label: 'About Me', position: { x: 180, y: 120 } },
        { id: 'spotify', icon: '🎵', label: 'Spotify', position: { x: 320, y: 85 } },
        { id: 'projects', icon: '🛠️', label: 'Side Projects', position: { x: 450, y: 120 } },
        { id: 'inspiration', icon: '🖼️', label: 'Inspiration', position: { x: 120, y: 280 } },
        { id: 'writing', icon: '✍️', label: 'Writing', position: { x: 420, y: 280 } },
        { id: 'reading', icon: '📚', label: 'Reading', position: { x: 280, y: 420 } }
      ];
    }
  };

  const desktopIcons = getResponsiveIconPositions();

  if (isLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

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

      {/* Spotify Window - Using dedicated SpotifyWindow component */}
      <SpotifyWindow
        isOpen={openWindows.includes('spotify')}
        onClose={() => closeWindow('spotify')}
      />

      {/* Inspiration Window */}
      {openWindows.includes('inspiration') && (
        <DesktopWindow
          title="🖼️ Visual Inspiration"
          isOpen={true}
          onClose={() => closeWindow('inspiration')}
          initialPosition={{ x: 300, y: 150 }}
          width={500}
          height={600}
          zIndex={windowZIndices.inspiration || 100}
          onFocus={() => bringToFront('inspiration')}
        >
          <div className="p-4 h-full overflow-y-auto mobile-scroll" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 mobile-gallery">
              {inspirationImages.map((image, index) => (
                <div 
                  key={index} 
                  className="cursor-pointer hover:opacity-80 transition-opacity"
                  onClick={() => openLightbox(index)}
                >
                  <img 
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-24 object-cover rounded"
                    style={{ border: '2px solid #C1DDB9' }}
                  />
                </div>
              ))}
            </div>
            <p className="text-xs mt-4 text-center font-serif" style={{ color: '#F2B5D4' }}>Click any image to view in full size</p>
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
                <div key={index} className="p-3 border rounded cursor-pointer hover:opacity-80" style={{ backgroundColor: '#403D39', borderColor: '#C1DDB9' }}>
                  <a href={post.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <strong style={{ color: '#F2B5D4' }}>{post.title}</strong>
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

      {/* Side Projects Window */}
      {openWindows.includes('projects') && (
        <DesktopWindow
          title="🛠️ Side Projects"
          isOpen={true}
          onClose={() => closeWindow('projects')}
          initialPosition={{ x: 250, y: 120 }}
          width={550}
          height={600}
          zIndex={windowZIndices.projects || 100}
          onFocus={() => bringToFront('projects')}
        >
          <div className="p-4 mobile-scroll h-full overflow-y-auto" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <h3 className="font-bold mb-4 font-serif mobile-text" style={{ color: '#F2B5D4' }}>My Side Projects</h3>
            <div className="space-y-4">
              {sideProjects.map((project, index) => (
                <div 
                  key={index} 
                  className="p-4 border rounded-lg hover:opacity-90 transition-opacity"
                  style={{ backgroundColor: '#403D39', borderColor: '#C1DDB9' }}
                >
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">{project.icon}</span>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <h4 className="font-bold text-sm" style={{ color: '#F2B5D4' }}>{project.title}</h4>
                        <span 
                          className="px-2 py-1 text-xs rounded"
                          style={{ 
                            backgroundColor: project.status === 'Live on App Store' ? '#C1DDB9' : 
                                           project.status === 'In Development' ? '#FFC684' : 
                                           project.status === 'Discontinued' ? '#666' : '#F2B5D4',
                            color: project.status === 'Discontinued' ? '#ccc' : '#403D39'
                          }}
                        >
                          {project.status}
                        </span>
                      </div>
                      <p className="text-xs mb-2 leading-relaxed" style={{ color: '#F2B5D4' }}>
                        {project.description}
                      </p>
                      {project.image && (
                        <div className="mb-2">
                          <img 
                            src={project.image} 
                            alt={project.title}
                            className="w-full max-w-64 h-auto rounded border"
                            style={{ borderColor: '#C1DDB9' }}
                          />
                        </div>
                      )}
                      {project.note && (
                        <p className="text-xs italic mb-2" style={{ color: '#FFC684' }}>
                          {project.note}
                        </p>
                      )}
                      {project.link && (
                        <a 
                          href={project.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs underline hover:opacity-80"
                          style={{ color: '#C1DDB9' }}
                        >
                          {project.title === 'Night Routine' ? 'View on App Store' : 
                           project.title === 'Chrome Plugin to Summarize Articles' ? 'Watch Latest Demo' : 
                           project.title === 'Building 3D Printer' ? 'See Twitter Post' :
                           'Learn More'}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
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
          <div className="p-4 mobile-scroll" style={{ backgroundColor: '#403D39', color: '#F2B5D4' }}>
            <h3 className="font-bold mb-3 font-serif mobile-text" style={{ color: '#F2B5D4' }}>My Reading Collection</h3>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-2 mobile-grid">
              {books.map((book, index) => (
                <div 
                  key={index} 
                  className="p-3 border rounded cursor-pointer hover:opacity-80 transition-colors"
                  style={{ backgroundColor: '#403D39', borderColor: '#C1DDB9' }}
                  title={book.title}
                >
                  <img 
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-24 object-cover border rounded mb-2"
                    style={{ borderColor: '#C1DDB9' }}
                  />
                  <div className="text-xs">
                    <div className="font-bold" style={{ color: '#F2B5D4' }}>{book.title}</div>
                    <div style={{ color: '#F2B5D4' }}>{book.author}</div>

                  </div>
                </div>
              ))}
            </div>

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



      {/* Image Lightbox */}
      <ImageLightbox
        images={inspirationImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={nextImage}
        onPrev={prevImage}
      />

      {/* Taskbar - Hidden */}
      {/* <Taskbar /> */}
    </div>
  );
}
