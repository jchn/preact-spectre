import { createComponent, withClassModifiers } from '../../utils'

const Steps = createComponent('ul', 'step')

const stepsItemClassModifiers = {
  active: 'active',
}

const StepsItem = withClassModifiers(stepsItemClassModifiers)(
  createComponent('li', 'step-item')
)

Steps.Item = StepsItem

export default Steps
