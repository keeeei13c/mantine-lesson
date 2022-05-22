import { useState } from 'react'
import * as Yup from 'yup'
import { ShieldCheckIcon } from '@heroicons/react/solid'
import { ExclamationCircleIcon } from '@heroicons/react/solid'
import { useForm, yupResolver } from '@mantine/form'
import {
  Anchor,
  NumberInput,
  TextInput,
  Button,
  Group,
  PasswordInput,
  Alert,
} from '@mantine/core'
import { supabase } from 'src/utils/supabase'
import { Layout } from './Layout'
import { Form } from 'src/types'

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('No email provided'),
  password: Yup.string()
    .required('No password provided')
    .min(8, 'Password should be min 8 characters')
    .matches(/[a-z]/, 'One lowercase character')
    .matches(/[A-Z]/, 'One uppercase character')
    .matches(/[@$!%*#?&]/, 'One special character'),
  age: Yup.number().min(15, 'You must be 18 years or older to use this site'),
})
export const Auth = () => {
  const [isRegister, setIsRegister] = useState<boolean>(false)
  const [error, setError] = useState('')
  const form = useForm<Form>({
    schema: yupResolver(schema),
    initialValues: {
      email: '',
      password: '',
      age: 15,
    },
  })
  const handleSubmit = async () => {
    if (isRegister) {
      const { error } = await supabase.auth.signUp({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    } else {
      const { error } = await supabase.auth.signIn({
        email: form.values.email,
        password: form.values.password,
      })
      if (error) {
        setError(error.message)
      }
      form.reset()
    }
    console.log(error)
  }

  return (
    <Layout title="Auth">
      <Group direction="column" position="center">
        <ShieldCheckIcon className="w-16 h-16 text-blue-500" />
        {error && (
          <Alert
            mt="md"
            icon={<ExclamationCircleIcon className="text-pink-500" />}
            title="Authentication Error"
            color="red"
            radius="md"
          >
            {error}
          </Alert>
        )}
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            mt="md"
            id="email"
            label="Email"
            placeholder="example@gmail.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            mt="md"
            id="password"
            label="Password"
            placeholder="password"
            description="Must include one upper + lower char + special char"
            required
            {...form.getInputProps('password')}
          />
          {isRegister && (
            <NumberInput
              mt="md"
              id="age"
              label="Age"
              placeholder="Your age"
              required
              {...form.getInputProps('age')}
            />
          )}

          <Group mt="lg" position="apart">
            <Anchor
              component="button"
              type="button"
              color="gray"
              onClick={() => {
                setIsRegister(!isRegister)
                setError('')
              }}
              size="sm"
            >
              {isRegister
                ? 'Have an account ? Login'
                : "Don't have an account ? Register"}
            </Anchor>
            <Button type="submit">{isRegister ? 'Register' : 'Login'}</Button>
          </Group>
        </form>
      </Group>
    </Layout>
  )
}
