import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

interface SquareProps {
  value: string;
  onClick: () => void;
}

interface SquareState {
  value: string;
}

export function Square(props: SquareProps) {
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  )
}