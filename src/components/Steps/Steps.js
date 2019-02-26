import { createComponent } from '../../utils'

const Steps = createComponent('ul', 'step')

const stepsItemClassModifiers = {
  active: 'active',
}

const StepsItem = createComponent('li', 'step-item', stepsItemClassModifiers)

Steps.Item = StepsItem

export default Steps
