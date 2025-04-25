import React, { useId } from "react";
import { LucideIcon } from "lucide-react";

interface GradientIconProps {
  Icon: LucideIcon;
  className?: string;
  colors?: {
    from: string;
    to: string;
  };
}

const GradientIcon: React.FC<GradientIconProps> = ({
  Icon,
  className = "h-6 w-6",
  colors = { from: "#E31E25", to: "#8B87FF" }
}) => {
  const gradientId = useId();
  
  return (
    <div className={className} style={{ position: 'relative' }}>
      <svg width="0" height="0" style={{ position: 'absolute' }}>
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={colors.from} />
            <stop offset="100%" stopColor={colors.to} />
          </linearGradient>
        </defs>
      </svg>
      
      <Icon 
        className="w-full h-full"
        strokeWidth={2}
        absoluteStrokeWidth
        stroke={`url(#${gradientId})`}
      />
    </div>
  );
};

export default GradientIcon;