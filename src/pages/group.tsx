import React from 'react'
import Link from 'next/link'

import { Group, Button, Center } from '@mantine/core'
import { ReplyIcon } from '@heroicons/react/solid'

import { Layout } from 'src/components/Layout'

const GroupDemo = () => {
  return (
    <Layout title="button">
      <Group grow my="md">
        <Button color="orange">button</Button>
        <Button color="cyan">button</Button>
        <Button color="grape">button</Button>
      </Group>
      <Group my="md" align="end">
        <Button color="orange" className="h-10">
          1
        </Button>
        <Button color="cyan" className="h-20">
          2
        </Button>
        <Button color="grape" className="h-32">
          3
        </Button>
      </Group>
      <Center>
        <Link href="/">
          <ReplyIcon className="w-6 h-6 mt-4 text-white cursor-pointer" />
        </Link>
      </Center>
    </Layout>
  )
}

export default GroupDemo
