export default function Cb_wrapper(props) {
  return (
    <div className={'cb__wrapper ' + (props.level ? `cb__wrapper--${props.level}` : 'cb__wrapper--1')}>
      <p className="cb__name">{props.name}</p>
      {props.children}
    </div>
  )
}
