import { useState } from 'react'
import Link from 'next/link'
import { ReplyIcon } from '@heroicons/react/solid'
import {
  Center,
  Container,
  MultiSelect,
  Text,
  RadioGroup,
  Radio,
  TransferList,
  TransferListData,
} from '@mantine/core'
import { Layout } from 'src/components/Layout'

const initialValues: TransferListData = [
  [
    { value: 'c', label: 'C' },
    { value: 'cpp', label: 'C++' },
    { value: 'rust', label: 'Rust' },
    { value: 'py', label: 'Python' },
    { value: 'js', label: 'JavaScript' },
    { value: 'go', label: 'Golang' },
  ],
  [],
]

const MultiSelectDemo = () => {
  const [radioValue, setRadioValue] = useState<string>('React')
  const [selectValue, setSelectValue] = useState<string[]>([])
  const [transferValue, setTransferValue] =
    useState<TransferListData>(initialValues)
  console.log(transferValue)
  return (
    <Layout title="Multi Select">
      <Container>
        <Text>🚀What is your most favorite frontend library ?</Text>
        <Center>
          <RadioGroup
            my="lg"
            value={radioValue}
            onChange={setRadioValue}
            required
          >
            <Radio value="react" label="React" />
            <Radio value="svelte" label="Svelte" />
            <Radio value="angular" label="Angular" />
            <Radio value="vue" label="Vue" />
          </RadioGroup>
        </Center>
        <Text>🚀What is your most favorite React framework ?</Text>
        <MultiSelect
          my="lg"
          value={selectValue}
          onChange={setSelectValue}
          data={['Next.js', 'Remix', 'Gatsby.js']}
          placeholder="Select your favorite framework"
          clearable
        />
        <TransferList
          className="text-center"
          my="lg"
          value={transferValue}
          onChange={setTransferValue}
          searchPlaceholder="Search..."
          nothingFound="..."
          titles={['w/o GC', 'w GC']}
          breakpoint="sm"
        />
      </Container>
      <Center>
        <Link href="/">
          <ReplyIcon className="w-6 h-6 mt-4 text-white cursor-pointer" />
        </Link>
      </Center>
    </Layout>
  )
}

export default MultiSelectDemo
