export default function Cb_wrapper(props) {
  return (
    <div className="cb__wrapper">
      <p className="cb__name">{props.name}</p>
      {props.children}
    </div>
  )
}
