interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
  position: { x: number; y: number };
}

export function DesktopIcon({ icon, label, onDoubleClick, position }: DesktopIconProps) {
  return (
    <div
      className="desktop-icon"
      style={{
        position: 'absolute',
        left: position.x,
        top: position.y
      }}
      onDoubleClick={onDoubleClick}
    >
      <div className="text-2xl mb-1">{icon}</div>
      <span>{label}</span>
    </div>
  );
}