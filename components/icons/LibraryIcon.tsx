import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

interface LibraryIconProps extends SvgProps {
  color?: string;
  size?: number;
  filled?: boolean;
}

export const LibraryIcon: React.FC<LibraryIconProps> = ({ 
  color = '#898989', 
  size = 24, 
  filled = false,
  ...props 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path 
        d="M6.8667 6.86719V17.1339" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M10.2889 6.86719V17.1339" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      <Path 
        d="M13.7111 17.1339V6.86719L17.1333 9.23642V17.1339H13.7111Z" 
        stroke={color} 
        strokeWidth="1.2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill={filled ? color : 'none'}
      />
    </Svg>
  );
}; 