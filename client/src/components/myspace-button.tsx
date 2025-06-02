interface MySpaceButtonProps {
  icon: string;
  text: string;
  url: string;
}

export function MySpaceButton({ icon, text, url }: MySpaceButtonProps) {
  const handleClick = () => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <button 
      className="myspace-btn font-comic px-4 py-3 rounded-lg transition-all duration-300 hover:animate-pulse-neon"
      onClick={handleClick}
    >
      <div className="text-xs">{icon}</div>
      <div>{text}</div>
    </button>
  );
}
