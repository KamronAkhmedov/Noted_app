import React from 'react'

export default function Modal({
  children,
  setIsActive,
  isDelete
}: {
  children: React.ReactNode,
  setIsActive: (isActive: boolean) => void,
  isDelete?: boolean
}) {
  return (
    <div className='fixed inset-0 bg-dark/50  z-40'>
      <div className='w-full h-full flex items-center justify-center px-6'>
        <article className={`max-w-screen-sm bg-gray mx-auto relative z-50 rounded-xl border-gray-light border-2 ${isDelete ? 'p-6' : 'w-full p-6 md:p-11'}`}>
          {children}
        </article>
      </div>
      <div className='absolute inset-0' onClick={() => setIsActive(false)} />
    </div>
  )
}

