'use client'
import axios from 'axios'
import { AiFillGithub } from 'react-icons/ai'
import { FcGoogle } from 'react-icons/fc'
import { useCallback, useState } from 'react'
import { FieldValues, useForm } from 'react-hook-form'
import useRegisterModal from '@/app/hooks/useRegisterModal'
import Modal from './Modal'
import { Heading } from '../Heading'
import { Input } from '../inputs/Input'
import { toast } from 'react-hot-toast'
import { Button } from '../Button'
import { signIn } from 'next-auth/react'
import useLoginModal from '@/app/hooks/useLoginModal'

export function RegisterModal() {
  const registerModal = useRegisterModal()
  const loginModal = useLoginModal()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })
  // const onSubmit2: SubmitHandler<FieldValues> = (data) => {
  //   setIsLoading(true)
  //   axios
  //     .post('/api/register', data)
  //     .then(() => {
  //       registerModal.onClose()
  //     })
  //     .catch((error) => {
  //       console.log(error)
  //     })
  //     .finally(() => {
  //       setIsLoading(false)
  //     })
  // }
  function onSubmit(data: FieldValues) {
    setIsLoading(true)
    axios
      .post('/api/register', data)
      .then(() => {
        toast.success('Success!')
        registerModal.onClose()
        loginModal.onOpen()
      })
      .catch((_error) => {
        toast.error('Something went wrong.')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const toggle = useCallback(() => {
    registerModal.onClose()
    loginModal.onOpen()
  }, [loginModal, registerModal])

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Welcome to Airbnb" subtitle="Create an account!" />
      <Input
        id="email"
        label="Email"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="name"
        label="Name"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
      <Input
        id="password"
        label="Password"
        type="password"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  )

  const footerContent = (
    <div className="mt-3 flex flex-col gap-4">
      <hr />
      <Button
        outline
        label="Continue with Google"
        icon={FcGoogle}
        onClick={() => signIn('google')}
      />
      <Button
        outline
        label="Continue with Github"
        icon={AiFillGithub}
        onClick={() => signIn('github')}
      />
      <div className=" mt-4  flex items-center justify-center gap-2 font-light text-neutral-500">
        <p>Already have an account?</p>
        <p
          onClick={toggle}
          className="cursor-pointer text-neutral-800 hover:underline"
        >
          Log in
        </p>
      </div>
    </div>
  )

  return (
    <Modal
      disabled={isLoading}
      isOpen={registerModal.isOpen}
      title="Register"
      actionLabel="Continue"
      onClose={registerModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  )
}
