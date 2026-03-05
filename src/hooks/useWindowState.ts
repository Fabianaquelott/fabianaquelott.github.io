import { useState } from 'react';

export function useWindowState() {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMaximize = (onFocus?: () => void) => {
    setIsMaximized(!isMaximized);
    onFocus?.();
  };

  const handleMinimize = () => {
    setIsMinimized(true);
  };

  return {
    isMinimized,
    isMaximized,
    handleMaximize,
    handleMinimize,
  };
}
