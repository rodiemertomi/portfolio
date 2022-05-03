import React from 'react'
import { Animator, ScrollContainer, ScrollPage } from 'react-scroll-motion'

const Scrolls = ({ page, content, animation }) => {
  return (
    <ScrollContainer>
      <ScrollPage page={page}>
        <div className='flex flex-col items-center justify-between'>
          <Animator animation={animation}>{content}</Animator>
        </div>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default Scrolls
