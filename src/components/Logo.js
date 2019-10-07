import React from 'react'
import { Illustration, Ellipse, Rect } from 'react-zdog'

export const Logo = () => {
  return (
    <Illustration
      element='canvas'
      zoom={2}
    >
      <Rect
        dragRotate
        width={20}
        height={20}
        stroke={3}
        color='#ffa7c4'
        fill
        translate={{ z: -40 }}
      />
      <Ellipse
        diameter={15}
        stroke={3}
        color='#282c35'
        translate={{ z: 40 }}
      />
    </Illustration>
  );
}