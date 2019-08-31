import React, { useState, useEffect, FC, ReactNode } from 'react'

interface P {
  color: string
  size?: string
}
interface S {
  count: number
}
class App extends React.PureComponent<P, S> {
  public readonly state: Readonly<S> = {
    count: 1,
  }
  public render() {
    return <div>Hello world</div>
  }
  public componentDidMount() {
    // this.state.count = 2 // error
  }
}

class Component<P1, S1> {
  readonly props: Readonly<{ a: string; children?: ReactNode }> & Readonly<P1>
  state: Readonly<S1>
}

const pageA: FC = ({ location }) => {
  const context = location
  return <div>hello</div>
}
