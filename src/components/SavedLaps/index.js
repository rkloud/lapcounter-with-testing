/**
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
const Component = (props) =>  {
  let listLaps = props.lapArray.map((lap) =>
  <li>{lap}</li>);
  return(
    <div>
      <h3>Previous Laps</h3>
      <ul>{listLaps}</ul>
    </div>
  )

}

export default Component