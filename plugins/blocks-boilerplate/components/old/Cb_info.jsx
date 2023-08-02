export default function Cb_info(props) {
  return (
    <>
      <p className="cb__info">
        <span className="dashicon dashicons dashicons-info cb__info__icon"></span>
        {props.children}
      </p>
    </>
  )
}
