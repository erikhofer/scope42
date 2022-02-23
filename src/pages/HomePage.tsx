import { Card, Col, Row, Skeleton } from 'antd'
import { PageHeader } from '../components/PageHeader'
import { Welcome } from '../components/Welcome'
import { selectAllItems, useStore } from '../data/store'

export default function HomePage() {
  const noItems = useStore(state => selectAllItems(state).length === 0)

  if (noItems) {
    return <Welcome />
  }

  return (
    <div>
      <PageHeader title='Dashboard' />
      <Row gutter={16}>
        <Col span={8}>
          <Card title="Work in Progress">
            <p>The dashboard is not available yet. I you have any ideas about what content would be useful here, you are welcome to contribute to the <a href="https://github.com/erikhofer/scope42/discussions/3" target="_blank" rel="noopener noreferrer">discussion</a> about this.</p>
            In the meantime, use the other navigation links to manage your architecture improvement.
          </Card>
        </Col>
        <Col span={8}>
          <Card title="TBD"><Skeleton /></Card>
        </Col>
        <Col span={8}>
          <Card title="TBD"><Skeleton /></Card>
        </Col>
      </Row>
      <Row gutter={16} style={{marginTop: 16}}>
        <Col span={8}>
          <Card title="TBD"><Skeleton /></Card>
        </Col>
        <Col span={8}>
          <Card title="TBD"><Skeleton /></Card>
        </Col>
        <Col span={8}>
          <Card title="TBD"><Skeleton /></Card>
        </Col>
      </Row>
    </div>
  )
}
