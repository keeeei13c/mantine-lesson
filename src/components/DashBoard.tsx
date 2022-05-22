import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { NextLink } from '@mantine/next'

import { ActionIcon, Center, Menu } from '@mantine/core'
import { Settings } from 'tabler-icons-react'
import { supabase } from 'src/utils/supabase'
import { Layout } from './Layout'
export const DashBoard = () => {
  const signOut = () => {
    supabase.auth.signOut()
  }
  return (
    <Layout title="DashBoard">
      <Center>
        <ShieldCheckIcon className="mb-4 text-teal-500 h-14" />
      </Center>
      <Center>
        <Menu trigger="hover" size="xl">
          <Menu.Label>UI Components</Menu.Label>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/button"
          >
            Button
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/grid"
          >
            Grid
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/group"
          >
            Group
          </Menu.Item>
          <Menu.Item
            icon={<Settings size={16} />}
            component={NextLink}
            href="/multi-select"
          >
            Multi Select
          </Menu.Item>
        </Menu>
      </Center>
      <Center>
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
