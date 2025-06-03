interface DesktopIconProps {
  icon: string;
  label: string;
  onDoubleClick: () => void;
  position: { x: number; y: number };
  isImage?: boolean;
}

export function DesktopIcon({ icon, label, onDoubleClick, position, isImage = false }: DesktopIconProps) {
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
      {isImage ? (
        <div className="icon-image">
          <img src={icon} alt={label} className="w-12 h-12 rounded-lg object-cover" />
        </div>
      ) : (
        <div className="icon-emoji">{icon}</div>
      )}
      <span>{label}</span>
    </div>
  );
}