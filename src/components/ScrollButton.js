import React, { useState } from 'react';
import { BiUpArrowCircle } from 'react-icons/bi';
import { Button } from './ScrollButtonStyles';

const isBrowser = typeof window !== 'undefined';

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
      /* you can also use 'auto' behaviour 
		in place of 'smooth' */
    });
  };

  if (isBrowser) {
    window.addEventListener('scroll', toggleVisible);
  }

  return (
    <Button>
      <BiUpArrowCircle
        onClick={scrollToTop}
        style={{ display: visible ? 'inline' : 'none' }}
      />
    </Button>
  );
};

export default ScrollButton;
