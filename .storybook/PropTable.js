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

const PropTable = ({ propDefinitions }) => {
  const props = propDefinitions.map(
    ({ property, propType, required, description, defaultValue }) => {
      console.log(propType)
      return (
        <tr key={property}>
          <td>
            {property}
            {required ? <div>*</div> : null}
          </td>
          <td>
            {propType.name === 'enum' ? (
              <Enum values={propType.value} />
            ) : (
              propType.name
            )}
          </td>
          <td>{defaultValue}</td>
          <td>{description}</td>
        </tr>
      )
    }
  )

  return (
    <Table striped>
      <thead>
        <tr>
          <th>name</th>
          <th>type</th>
          <th>default</th>
          <th>description</th>
        </tr>
      </thead>
      <tbody>{props}</tbody>
    </Table>
  )
}

export default PropTable
