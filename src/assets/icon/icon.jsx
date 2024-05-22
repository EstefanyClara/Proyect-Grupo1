import React from 'react'
import ZestIcons from 'zest-free'

const Icon = ({uid, size=24, color='', valign, className}) => {
  console.log('en el icon me tira' + uid);
  let paths
  let style = {}
  if (uid in ZestIcons) {
    paths = ZestIcons[uid].paths
  } else {
    throw new Error('Invalid UID for icon: ' + uid)
  }
  if (valign) {
    style['verticalAlign'] = valign
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} style={style}>
      <g fill={color} dangerouslySetInnerHTML={{ __html: paths }} />
    </svg>
  )
}

export default Icon