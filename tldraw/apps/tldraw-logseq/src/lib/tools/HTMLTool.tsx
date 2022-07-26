import { TLBoxTool } from '@tldraw/core'
import type { TLReactEventMap } from '@tldraw/react'
import { HTMLShape, Shape } from '~lib/shapes'

export class HTMLTool extends TLBoxTool<HTMLShape, Shape, TLReactEventMap> {
  static id = 'youtube'
  Shape = HTMLShape
}

export { }

