import React from 'react'
import { Illustration, Ellipse, Rect, useRender, Group } from 'react-zdog'

export const Logo = () => {

  return (
    <Illustration
      element='canvas'
      zoom={2}
    >
      <Group
      >
        <Rect
          width={20}
          height={20}
          stroke={3}
          color='#E62'
          fill={true}
        />
        <Ellipse
          diameter={20}
          stroke={5}
          color='#636'
        />
      </Group>

    </Illustration>);
}