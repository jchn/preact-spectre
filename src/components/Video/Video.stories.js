/** @jsx h */
import { h } from 'preact'
import Centered from '@storybook/addon-centered/preact'
import { withColumn } from '../../../.storybook/withWrapper'
import { storiesOf } from '@storybook/preact'
import Video from './'

storiesOf('Elements|Video', module)
  .addDecorator(Centered)
  .add('Default', () => (
    <Video>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRsGyueVLvQ"
        frameborder="0"
        allowfullscreen
      />
    </Video>
  ))

storiesOf('Elements|Video/responsive', module)
  .addDecorator(withColumn([12, 8, 6]))
  .addDecorator(Centered)
  .add('Default', () => (
    <Video responsive>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/eRsGyueVLvQ"
        frameborder="0"
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
