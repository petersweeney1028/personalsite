interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
  position: { x: number; y: number };
}

export function DesktopIcon({ icon, label, onDoubleClick, position }: DesktopIconProps) {
  const handleClick = () => {
    console.log(`Desktop icon clicked: ${label}`);
    onDoubleClick();
  };

  return (
    <div
      className="desktop-icon"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y,
        zIndex: 10
      }}
      onDoubleClick={handleClick}
      onClick={handleClick}
    >
      <div className="icon-emoji">{icon}</div>
      <span>{label}</span>
    </div>
  );
}