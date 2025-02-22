import React from 'react'
import { motion, useTime, useTransform } from 'motion/react'

export default function FloatingBox() {
  const distance = 50
  const time = useTime()
  const y = useTransform(()=> Math.sin(time.get()/1000) * distance)


  return (
   <motion.div
   style={{
     width: 100,
     height: 100,
     backgroundColor: 'skyblue',
     borderRadius: '50%',
     position: 'absolute',
     top: '50%',
     left: '50%',
     transform: 'translate(-50%, -50%)',
     y
   }}
   />
  )
}
