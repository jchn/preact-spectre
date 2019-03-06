/** @jsx h */
import { h } from 'preact'
import centered from '@storybook/addon-centered'
import { storiesOf } from '@storybook/preact'
import Video from './'

storiesOf('Elements|Video', module).add('Default', () => (
  <Video>
    <iframe
      width="560"
      height="315"
      src="https://www.youtube.com/embed/eRsGyueVLvQ"
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    />
  </Video>
))

storiesOf('Elements|Video/responsive', module)
  .add('Default', () => (
    <Video responsive>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRsGyueVLvQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Video>
  ))
  .add('1-1', () => (
    <Video responsive="1-1">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRsGyueVLvQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Video>
  ))
  .add('4-3', () => (
    <Video responsive="4-3">
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRsGyueVLvQ"
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Video>
  ))
