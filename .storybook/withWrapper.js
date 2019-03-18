/** @jsx h */
import { h } from 'preact'
import Grid from '../src/components/Grid'

const withWrapper = Component => story => {
  return <Component>{story()}</Component>
}

export default withWrapper

export const withColumn = (col, className = '') =>
  withWrapper(({ children }) => (
    <Grid style={{ width: '100vw' }}>
      <Grid.Columns>
        <Grid.Col class={`col-mx-auto ${className}`.trim()} col={col}>
          {children}
        </Grid.Col>
      </Grid.Columns>
    </Grid>
  ))
