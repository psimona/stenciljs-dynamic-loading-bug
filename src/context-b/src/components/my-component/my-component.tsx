import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'my-component-b',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponentB {

  @Prop() first: string;
  @Prop() last: string;

  render() {
    return (
      <div>
        Hello, World form my-component-b! I'm {this.first} {this.last}
      </div>
    );
  }
}
