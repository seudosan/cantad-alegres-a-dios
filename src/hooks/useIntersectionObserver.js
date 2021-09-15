import { useEffect, useState, useRef } from 'react';

const useIntersectionObserver = ({ threshold = 0, rootMargin = '0px', callback }) => {
  const [inView, setView] = useState(false);
  const ref = useRef();
  const options = {
    threshold,
    rootMargin,
  };

  const handleView = (entries) => {
    if (entries[0].isIntersecting) {
      setView(true);
      if (typeof (callback) === 'function') {
        callback();
      }
    } else {
      setView(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleView, options);

    observer.observe(ref.current);
  }, []);

  return { inView, ref };
};

export default useIntersectionObserver;

