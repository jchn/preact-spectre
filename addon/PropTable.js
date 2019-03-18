import { h } from 'preact'
import Table from '../src/components/Table'
import Chip from '../src/components/Chip'

const Enum = ({ values }) => (
  <span>
    oneOf{' '}
    {values.map(v => (
      <Chip>{v.value}</Chip>
    ))}
  </span>
)

const PropTable = ({ props }) => (
  <Table>
    <thead>
      <tr>
        <th>name</th>
        <th>type</th>
        <th>default</th>
        <th>description</th>
      </tr>
    </thead>
    <tbody>
      {Object.entries(props).map(
        ([
          name,
          { description, required, defaultValue = { value: '' }, type = {} },
        ]) => (
          <tr>
            <td>
              {name} {required && '*'}
            </td>
            <td>
              {type.name === 'enum' ? <Enum values={type.value} /> : type.name}
            </td>
            <td>{defaultValue.value}</td>
            <td>{description}</td>
          </tr>
        )
      )}
    </tbody>
  </Table>
)

export default PropTable
