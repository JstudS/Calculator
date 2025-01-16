import React, { useState, useEffect, useRef } from 'react'
import CLOUDS from 'vanta/dist/vanta.clouds.min.js'

const BackgroundComponent = (component) => {
  const [vantaEffect, setVantaEffect] = useState(null)
  const myRef = useRef(null)
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(CLOUDS({
        el: myRef.current,
        mouseControls: false,
        touchControls: false,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        skyColor: 0x4199cf,
        cloudColor: 0xb1b3d9,
        sunColor: 0x0,
        sunGlareColor: 0x666666,
        sunlightColor: 0x5f5e5e
      }))
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [vantaEffect])
  return <div className='bg' ref={myRef}>{component.calculator}</div>
}

export default BackgroundComponent