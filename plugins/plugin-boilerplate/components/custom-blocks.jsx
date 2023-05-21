export function Wrapper(_props) {
  return (
    <div className="cb__wrapper">
      <p className="cb__name">{_props.name}</p>
      {_props.children}
    </div>
  )
}

export function Item(_props) {
  return <div className="cb__item">{_props.children}</div>
}

export function Label(_props) {
  return <p className="cb__label">{_props.children}</p>
}
