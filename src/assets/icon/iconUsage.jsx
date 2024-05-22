import Icon from './icon'

const IconUsage = ({nombreIcono, colorsito, tamanio}) => <div>
  <h1>
    <Icon uid={nombreIcono} color={colorsito} size={tamanio} valign="middle" />
  </h1>
</div>

export default IconUsage