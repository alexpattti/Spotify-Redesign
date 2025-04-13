import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { Path, Circle } from 'react-native-svg';

interface SearchIconProps extends SvgProps {
  color?: string;
  size?: number;
  filled?: boolean;
}

export const SearchIcon: React.FC<SearchIconProps> = ({ 
  color = '#898989', 
  size = 24, 
  filled = false,
  ...props 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path 
        d="M14.5707 14.5C15.4548 13.5981 16 12.3627 16 11C16 8.23858 13.7614 6 11 6C8.23858 6 6 8.23858 6 11C6 13.7614 8.23858 16 11 16C12.3987 16 13.6633 15.4257 14.5707 14.5ZM14.5707 14.5L17.5 17.5" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round"
      />
      {filled && (
        <Circle 
          cx="11" 
          cy="11" 
          r="7" 
          stroke={color} 
          strokeWidth="1.2" 
          fill="none"
        />
      )}
    </Svg>
  );
}; 