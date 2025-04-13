import React from 'react';
import { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

interface HomeIconProps extends SvgProps {
  color?: string;
  size?: number;
  filled?: boolean;
}

export const HomeIcon: React.FC<HomeIconProps> = ({ 
  color = '#898989', 
  size = 24, 
  filled = false,
  ...props 
}) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none" {...props}>
      <Path 
        d="M15 17H17C17.5523 17 18 16.5523 18 16V11.5407C18 11.2466 17.8705 10.9673 17.6459 10.7773L12.6459 6.54657C12.2731 6.23108 11.7269 6.23108 11.3541 6.54657L6.35406 10.7773C6.12951 10.9673 6 11.2466 6 11.5407V16C6 16.5523 6.44772 17 7 17H9" 
        stroke={color} 
        strokeWidth="1.4" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
      {filled && (
        <Path 
          d="M9 17V13C9 12.4477 9.44772 12 10 12H14C14.5523 12 15 12.4477 15 13V17" 
          fill={color} 
          stroke={color} 
          strokeWidth="1.4" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      )}
    </Svg>
  );
}; 