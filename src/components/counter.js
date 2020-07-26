import React, {Component} from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';

const style = {
  componentName: {},
  col: {},
  countup: {},
};

class Counter extends Component {
  state = {
    didViewCountUp: false
  };


  onVisibilityChange = isVisible => {
    if (isVisible) {
      this.setState({didViewCountUp: true});
    }
  }

  render() {
    return (
      <div className={style.componentName}>
        <VisibilitySensor onChange={this.onVisibilityChange} offset={{
          top:
            10
        }} delayedCall>
          <CountUp className="countup" decimals={0} start={this.props.start} end={this.state.didViewCountUp ? this.props.end : 0}
                   suffix="" duration={this.props.duration}  separator = "," />
        </VisibilitySensor>
      </div>)
  }
}

export default Counter;

