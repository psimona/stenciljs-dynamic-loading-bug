import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component-a',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponentA {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World from my-component-a! I'm {this.first} {this.last}
      </div>
    );
  }
}
