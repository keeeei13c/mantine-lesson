import React from 'react'
import Link from 'next/link'
import { Layout } from '../components/Layout'
import { Button, Group } from '@mantine/core'
import { BrandGithub, ThreeDCubeSphere } from 'tabler-icons-react'
import { ReplyIcon } from '@heroicons/react/solid'

const ButtonDemo = () => {
  return (
    <Layout title="button">
      <Group position="center" direction="column">
        <Button leftIcon={<BrandGithub />} rightIcon={<ThreeDCubeSphere />}>
          default
        </Button>
        <Button>Click</Button>
      </Group>
      <Link href="/">
        <ReplyIcon className="mt-4 h-6 w-6 cursor-pointer text-white" />
      </Link>
    </Layout>
  )
}

export default ButtonDemo
