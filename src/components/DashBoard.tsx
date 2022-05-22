import { ShieldCheckIcon } from '@heroicons/react/solid'
import { LogoutIcon } from '@heroicons/react/outline'
import { ActionIcon, Center, Menu } from '@mantine/core'
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
        <ActionIcon my="md" size="lg" onClick={signOut}>
          <LogoutIcon />
        </ActionIcon>
      </Center>
    </Layout>
  )
}
