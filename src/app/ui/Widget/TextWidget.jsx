import React from 'react'
import Div from '../Div'

export default function TextWidget({logoSrc, logoAlt, text, logoWidth, logoHeight}) {
  return (
    <Div className="cs-text_widget">
      <img src={logoSrc} alt={logoAlt} width={logoWidth} height={logoHeight} />
      <p>{text}</p>
    </Div>
  )
}
