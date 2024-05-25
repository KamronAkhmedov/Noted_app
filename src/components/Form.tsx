import React from 'react'
import Input from './Input'
import Button from './Button'

export default function Form({
  handleSubmit,
  handleChange,
  form,
  type,
  setIsActive
}: {
  handleSubmit: (e: React.FormEvent) => void
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void,
  form: { title: string, text: string },
  type: 'create' | 'edit'
  setIsActive: (isActive: boolean) => void
}) {
  return (
    <form onSubmit={handleSubmit} className='flex flex-col text-black'>
      <h2 className='capitalize text-4xl font-bold text-white tracking-[2.88px]'>
        {type} note
      </h2>
      <hr className='w-full max-w-[188px] border-primary mt-2 pb-7' />
      <div className='flex flex-col gap-5 mb-5'>
        <Input
          handleChange={handleChange}
          name='title'
          value={form.title}
        />
        <Input
          isTextArea={true}
          handleChange={handleChange}
          name='text'
          value={form.text}
        />
      </div>
      <div className='flex gap-5 flex-col md:flex-row'>
        <Button
          type='submit'
          text='Confirm'
        />
        <Button
          handleClick={() => setIsActive(false)}
          text='Cansel'
          color='border-red border-2 hover:bg-white/5'
        />
      </div>
    </form>
  )
}
