import {useState} from 'react'
import { motion } from "framer-motion";

import Img from '../../public/projects/Coala.png'
import Img2 from '../../public/projects/VanMetro.png'

const CardFlip = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const [isAnimating, setIsAnimating] = useState(false)

    function handleFlip() {
        if(!isAnimating){
            setIsFlipped(!isFlipped);
            setIsAnimating(true);
        }
    }
  return (
    <div className='flex flex-wrap justify-center align-baseline gap-4 h-[800px] cursor-pointer'>
      <div
      className='flip-card w-1/3 h-1/3 rounded-md'
      onClick={handleFlip}
      >
        <motion.div
        className='flip-card-inner w-[100%] h-[100%]'
        initial={false}
        animate = {{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration:0.6, animationDirection:"normal"}}
        onAnimationComplete={()=>setIsAnimating(false)}
        >
            <div
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg p-4'
            style={{backgroundImage: `url(${Img})`}}
            >
                <h1 className='text-2xl bold'>Project One</h1>
            </div>
            <div
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] p-4 rounded-lg'
            style={{backgroundImage: `url(${Img2})`}}
            >
                <h1 className='text-2xl bold'>Introduction</h1>
            </div>
        </motion.div>
      </div>
      <div
      className='flip-card w-1/3 h-1/3 rounded-md'
      onClick={handleFlip}
      >
        <motion.div
        className='flip-card-inner w-[100%] h-[100%]'
        initial={false}
        animate = {{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration:0.6, animationDirection:"normal"}}
        onAnimationComplete={()=>setIsAnimating(false)}
        >
            <div
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg p-4'
            style={{backgroundImage: `url(${Img})`}}
            >
                <h1 className='text-2xl bold'>Project One</h1>
            </div>
            <div
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] p-4 rounded-lg'
            style={{backgroundImage: `url(${Img2})`}}
            >
                <h1 className='text-2xl bold'>Introduction</h1>
            </div>
        </motion.div>
      </div>
      <div
      className='flip-card w-1/3 h-1/3 rounded-md'
      onClick={handleFlip}
      >
        <motion.div
        className='flip-card-inner w-[100%] h-[100%]'
        initial={false}
        animate = {{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration:0.6, animationDirection:"normal"}}
        onAnimationComplete={()=>setIsAnimating(false)}
        >
            <div
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg p-4'
            style={{backgroundImage: `url(${Img})`}}
            >
                <h1 className='text-2xl bold'>Project One</h1>
            </div>
            <div
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] p-4 rounded-lg'
            style={{backgroundImage: `url(${Img2})`}}
            >
                <h1 className='text-2xl bold'>Introduction</h1>
            </div>
        </motion.div>
      </div>
      <div
      className='flip-card w-1/3 h-1/3 rounded-md'
      onClick={handleFlip}
      >
        <motion.div
        className='flip-card-inner w-[100%] h-[100%]'
        initial={false}
        animate = {{rotateY: isFlipped ? 180 : 360}}
        transition={{ duration:0.6, animationDirection:"normal"}}
        onAnimationComplete={()=>setIsAnimating(false)}
        >
            <div
            className='flip-card-front w-[100%] h-[100%] bg-cover border-[1px] rounded-lg p-4'
            style={{backgroundImage: `url(${Img})`}}
            >
                <h1 className='text-2xl bold'>Project One</h1>
            </div>
            <div
            className='flip-card-back w-[100%] h-[100%] bg-cover border-[1px] p-4 rounded-lg'
            style={{backgroundImage: `url(${Img2})`}}
            >
                <h1 className='text-2xl bold'>Introduction</h1>
            </div>
        </motion.div>
      </div>
    </div>
  )
}

export default CardFlip
