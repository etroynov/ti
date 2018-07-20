/*
 * dependencies
 */
import * as React from 'react';
/*
 * Styled Components
 */
import { Button } from './styledComponents/button'
/*
 * Expo
 */
export default class App extends React.Component {
  render() {
    return (
      <div style={{ marginLeft: 20, marginRight: 20 }}>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button>Default</Button>
          <Button disabled>Default disabled</Button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button>Default</Button>
          <Button primary>Primary</Button>
          <Button secondary>Secondary</Button>
          <Button danger>Danger</Button>
          <Button link>Link</Button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button small>Default</Button>
          <Button primary small>Primary</Button>
          <Button secondary small>Secondary</Button>
          <Button danger small>Danger</Button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button large>Default</Button>
          <Button primary large>Primary</Button>
          <Button secondary large>Secondary</Button>
          <Button danger large>Danger</Button>
        </div>
        <div style={{ marginTop: 20, marginBottom: 20 }}>
          <Button full>Default</Button>
          <Button primary full>Primary</Button>
          <Button secondary full>Secondary</Button>
          <Button danger full>Danger</Button>
        </div>
      </div>
    );
  }
}

