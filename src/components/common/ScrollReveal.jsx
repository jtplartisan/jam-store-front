import React, { useEffect, useRef } from 'react'
import './scrollReveal.css'
const ScrollReveal = ({children}) => {
const revealRef = useRef()
useEffect(() => {
const handleScroll = ()=>{
    const element = revealRef.current
    if (isInViewport(element)) {
        element.classList.add('active')
    }
}
const isInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };
  window.addEventListener('scroll', handleScroll);
  handleScroll();
 return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);
  return (
    <div ref={revealRef}>{children}</div>
  )
}

export default ScrollReveal