export default function Cb_item(_props) {
  return (
    <div className="cb__item" style={{ backgroundColor: _props.backgroundColor }}>
      {_props.children}
    </div>
  )
}
