import { h, Component } from 'preact'
import Code from '../src/components/Code'
import Grid from '../src/components/Grid'
import Tabs from '../src/components/Tabs'
import hljs from 'highlight.js/lib/highlight'
import xml from 'highlight.js/lib/languages/xml'
import { html as bHTML } from 'js-beautify'
import PropTable from './PropTable'

hljs.registerLanguage('xml', xml)

class Highlight extends Component {
  constructor(props) {
    props.source = bHTML(props.source, {
      indent_size: 2,
    })
    super(props)
  }

  componentDidMount() {
    hljs.highlightBlock(this.base)
  }

  render() {
    return <div style={{ background: 'transparent' }}>{this.props.source}</div>
  }
}

class DocsTabs extends Component {
  state = {
    activeTab: 0,
  }

  onClickTab = index => e => {
    e.preventDefault()
    this.setState({
      activeTab: index,
    })
  }

  render() {
    return (
      <div>
        <Tabs block>
          {this.props.tabs.map((label, i) => (
            <Tabs.Item active={this.state.activeTab === i}>
              <a href="#" onClick={this.onClickTab(i)}>
                {label}
              </a>
            </Tabs.Item>
          ))}
        </Tabs>
        <div style={{ height: '30vh', overflowY: 'auto' }}>
          {this.props.children[0](this.state.activeTab)}
        </div>
      </div>
    )
  }
}

const path = (path, obj) => {
  if (typeof obj !== 'object' || !obj) return null
  return path.reduce((subject, segment) => {
    if (!subject[segment]) return null
    return subject[segment]
  }, obj)
}

const withDocs = (story, { parameters: { docs = {} } }) => {
  const { source } = docs

  const docsTabs = []
  if (source) docsTabs.push('Source')

  const storyResult = story()
  const docgenInfo = path(['nodeName', '__docgenInfo'], storyResult)
  const props = path(['props'], docgenInfo)
  if (props) docsTabs.push('Props')

  const center = true

  return (
    <div>
      <Grid
        style={
          center
            ? {
                minHeight: '100vh',
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
              }
            : {}
        }
      >
        <Grid.Columns
          style={{
            justifyContent: 'space-between',
            flexDirection: 'column',
            minHeight: '100vh',
          }}
        >
          <Grid.Col
            col={6}
            style={{ marginTop: 'auto', marginBottom: 'auto' }}
            class="col-mx-auto"
          >
            <div class={`p-2 ${center && 'text-center'}`}>{story()}</div>
          </Grid.Col>
          {docsTabs.length > 0 && (
            <Grid.Col col={12}>
              <DocsTabs tabs={docsTabs}>
                {activeTab => {
                  if (activeTab === 0) {
                    return (
                      <Code lang="JSX">
                        <Highlight source={source} />
                      </Code>
                    )
                  }

                  if (activeTab === 1 && props) {
                    return <PropTable props={props} />
                  }

                  return null
                }}
              </DocsTabs>
            </Grid.Col>
          )}
        </Grid.Columns>
      </Grid>
    </div>
  )
}

export default withDocs
