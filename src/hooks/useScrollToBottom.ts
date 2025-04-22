import { useState, useEffect } from 'react';

export const useScrollToBottom = () => {
  const [isBottom, setIsBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      // Check if we're within 100px of the bottom
      if (scrollHeight - scrollTop - clientHeight < 100) {
        setIsBottom(true);
      } else {
        setIsBottom(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return isBottom;
}; 