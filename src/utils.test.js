import { renameProps, mapPropsToClasses, createComponent, omit } from './utils'

describe('renameProps', () => {
  it('Should rename a prop', () => {
    const props = {
      foo: 'bar',
    }
    const newProps = renameProps({ foo: 'newFoo' }, props)
    expect(newProps).toEqual({ newFoo: 'bar' })
  })

  it('Should leave other props as is', () => {
    const props = {
      foo: 'bar',
      baz: 'qux',
    }
    const newProps = renameProps({ foo: 'newFoo' }, props)
    expect(newProps).toEqual({ newFoo: 'bar', baz: 'qux' })
  })
})

describe('mapPropsToClasses', () => {
  it('Should return an empty string when given and empty map', () => {
    const mapping = {
      foo: 'bar',
      baz: 'qux',
    }

    const classes = mapPropsToClasses({}, {})

    expect(classes).toBe('')
  })

  it('Should return a classname for each truthy value in supplied mapping', () => {
    const mapping = {
      foo: 'bar',
      baz: 'qux',
    }

    const classes = mapPropsToClasses(mapping, { foo: true, baz: true })

    expect(classes).toBe('bar qux')
  })

  it('Should not containg classnames of falsy properties', () => {
    const mapping = {
      foo: 'bar',
      baz: 'qux',
    }

    const classes = mapPropsToClasses(mapping, { foo: true, baz: false })

    expect(classes).toBe('bar')
  })

  it('Should apply a function to prop if given', () => {
    const mapping = {
      foo: val => 'result',
      baz: 'qux',
    }

    const classes = mapPropsToClasses(mapping, { foo: true, baz: false })

    expect(classes).toEqual('result')
  })

  it('Should use the value given in the supplied function', () => {
    const mapping = {
      foo: val => `${val}-result`,
      baz: 'qux',
    }

    const classes = mapPropsToClasses(mapping, { foo: 'cool', baz: false })

    expect(classes).toEqual('cool-result')
  })

  it('Should discard the value of the supplied function if it returns a falsey value', () => {
    const mapping = {
      foo: val => false,
      baz: 'qux',
    }

    const classes = mapPropsToClasses(mapping, { foo: 'some-value', baz: true })

    expect(classes).toEqual('qux')
  })
})

describe('createComponent', () => {
  it('Should return a function', () => {
    const component = createComponent(
      'button',
      'btn',
      { foo: 'bar' },
      { bar: 'baz' }
    )
    expect(typeof component).toBe('function')
  })

  it('Should return a function which return a VNode', () => {
    const component = createComponent(
      'button',
      'btn',
      { foo: 'bar' },
      { bar: 'baz' }
    )
    const node = component({ foo: 'bar' })
    expect(node.constructor.name).toEqual('VNode')
  })

  it('Should return a component with a default CSS class', () => {
    const component = createComponent('button', 'btn', {}, {})
    const node = component({ is: 'button' })
    expect(node.attributes.class).toEqual('btn')
  })

  it('Should handle mapping of props to CSS classes', () => {
    const component = createComponent('button', 'btn', { isActive: 'active' })
    const node = component({ is: 'button', isActive: true })
    expect(node.attributes.class).toEqual('btn active')
  })

  it('Should filter CSS props as attributes from node', () => {
    const component = createComponent('button', 'btn', { isActive: 'active' })
    const node = component({ is: 'button', isActive: true })
    expect(node.attributes.isActive).toBeUndefined()
  })

  it('Should handle mapping props to DOM attributes', () => {
    const component = createComponent(
      'button',
      'btn',
      {},
      { tooltip: 'x-tooltip' }
    )
    const node = component({ is: 'button', tooltip: 'tooltip text' })
    expect(node.attributes['x-tooltip']).toEqual('tooltip text')
  })

  it('Should filter original props as attribues from node', () => {
    const component = createComponent(
      'button',
      'btn',
      {},
      { tooltip: 'x-tooltip' }
    )
    const node = component({ is: 'button', tooltip: 'tooltip text' })
    expect(node.attributes['tooltip']).toBeUndefined()
  })

  it('Should append a given classname to the list of classes', () => {
    const component = createComponent('button', 'btn', { isActive: 'active' })
    const node = component({
      is: 'button',
      isActive: true,
      class: 'additional-class',
    })
    expect(node.attributes.class).toEqual('btn active additional-class')
  })
})

describe('omit', () => {
  it('Should return an object with the given keys omitted', () => {
    const obj = {
      foo: 'bar',
      baz: 'qux',
    }
    const newObj = omit(['foo'], obj)
    expect(newObj).toEqual({ baz: 'qux' })
  })

  it('Should return a new object', () => {
    const obj = {
      foo: 'bar',
      baz: 'qux',
    }

    expect(omit(['foo'], obj)).not.toEqual(obj)
  })
})
