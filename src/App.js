import React from 'react';
import './App.css';


class LapCounter extends React.Component {
  constructor(props){
    super(props);
      this.state = {
        lapCount : 0,
        lapArray : []
      }
      this.addLaps = this.addLaps.bind(this);
      this.decreaseLaps = this.decreaseLaps.bind(this);
      this.resetLaps = this.resetLaps.bind(this);
      this.saveLaps = this.saveLaps.bind(this);
  }
  addLaps(){
    this.setState({
      lapCount : this.state.lapCount + 1
    });
  }
  decreaseLaps() {
    if(this.state.lapCount > 0) {
      this.setState({
        lapCount : this.state.lapCount - 1
      });
    }
  }
  resetLaps() {
    this.setState({
      lapCount : 0
    })
  }
  saveLaps() {
    this.state.lapArray.push(this.state.lapCount);
    this.setState({
      lapCount : 0
    })

  }

  render() {
    return(
      <div>
        <h2>LapCounter</h2>
        <p>Current Laps: {this.state.lapCount}</p>
        <button onClick={this.addLaps}>Add Lap</button>
        <button onClick={this.decreaseLaps}>Decrease Laps</button>
        <button onClick={this.resetLaps}>Reset Count</button>
        <button onClick={this.saveLaps}>Save Laps</button>
        <SavedLaps lapArray={this.state.lapArray}/>
      </div>
    )
  }
}

/**
 * TODO: Test by exporting this Component.
 * @param props
 * @returns {JSX.Element}
 * @constructor
 */
function SavedLaps(props)  {
    let listLaps = props.lapArray.map((lap) =>
    <li>{lap}</li>);
    return(
      <div>
        <h3>Previous Laps</h3>
        <ul>{listLaps}</ul>
      </div>
    )

}



export default LapCounter
