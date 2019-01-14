import { h } from 'preact'
import { createComponent, withClassModifiers } from './utils'

const imageClassModifiers = {
  responsive: 'img-responsive',
  contain: 'img-fit-contain',
  cover: 'img-fit-cover',
}

export const Image = withClassModifiers(imageClassModifiers)(
  createComponent('img', '')
)

const videoClassModifiers = {
  responsive: 'video-responsive',
  '4-3': 'video-responsive video-responsive-4-3',
  '1-1': 'video-responsive video-responsive-1-1',
}

export const Video = withClassModifiers(videoClassModifiers)(
  createComponent('video', '')
)

export const Figure = createComponent('figure', 'figure')
export const Figcaption = createComponent('figcaption', 'figure-caption')
