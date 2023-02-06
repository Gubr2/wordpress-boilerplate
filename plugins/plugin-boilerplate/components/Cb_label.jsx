export default function Cb_label(props) {
  return (
    <>
      <p className={'cb__label ' + (props.level ? `cb__label--${props.level}` : 'cb__label--1')}>{props.text}</p>
    </>
  )
}
