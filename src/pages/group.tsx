import { Group, Button } from '@mantine/core'
import React from 'react'
import { Layout } from 'src/components/Layout'

const GroupDemo = () => {
  return (
    <Layout title="button">
      <Group>
        <Button>button</Button>
        <Button>button</Button>
        <Button>button</Button>
      </Group>
    </Layout>
  )
}

export default GroupDemo
