import * as React from 'react';
import * as moment from 'moment';
import { EDTtime } from 'joys-react-common';

export default class MeiDongTime extends React.PureComponent<MeiDongTimeProps, any> {
  private timerRef: any;

  constructor(props: MeiDongTimeProps) {
    super(props);
    this.state = { now: '' };
    this.timerRef = setInterval(this.loop.bind(this), 1000);
  }

  loop() {
    const now = moment(EDTtime()).format('YYYY-MM-DD HH:mm:ss');
    this.setState({ now });
  }

  componentWillUnmount() {
    window.clearInterval(this.timerRef);
  }

  public render() {
    return <span> {this.state.now} 美东时间</span>;
  }
}

interface MeiDongTimeProps {}
