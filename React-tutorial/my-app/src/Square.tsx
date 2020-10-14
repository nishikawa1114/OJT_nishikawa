import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface SquareProps {
  value: string;
  onClick: Function;
}

interface SquareState {
  value: string;
}

export class Square extends React.Component<SquareProps, SquareState> {
  constructor(props: SquareProps) {
    super(props);
    this.state = {
      value: '',
    };
  }

  render() {
    return (
      <button
        className="square"
        onClick={() => this.props.onClick()}
      >
         {this.props.value}
      </button>
    );
  }
}