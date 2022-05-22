import Link from 'next/link'
import { Layout } from 'src/components/Layout'
import { Grid, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'

const GridDemo = () => {
  return (
    <Layout title="grid">
      <Grid my="md">
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-blue-500"
          span={4}
        >
          1
        </Grid.Col>
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-green-500"
          span={4}
        >
          2
        </Grid.Col>
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-pink-500"
          span={4}
        >
          3
        </Grid.Col>
      </Grid>
      <Grid my="md" grow>
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-purple-500"
          span={6}
        >
          4
        </Grid.Col>
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-red-500"
          span={6}
        >
          5
        </Grid.Col>
        <Grid.Col
          className="font-bold text-center text-gray-100 bg-pink-500"
          span={6}
        >
          6
        </Grid.Col>
      </Grid>
    </Layout>
  )
}

export default GridDemo
