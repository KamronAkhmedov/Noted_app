import Button from './Button'
import Plus from '../assets/plus.svg'

const Navbar = ({
  setIsCreating
}: {
  setIsCreating: (isActive: boolean) => void
}) => {
  return (
    <nav className='flex justify-between items-center py-7 border-b-gray-light border-b mb-12 gap-6 flex-wrap'>
      <h1 className='font-bold text-[48px] tracking-[3.4px] '>
        Noted <span className='text-primary'>.</span>
      </h1>
      <Button
        handleClick={() => setIsCreating(true)}
        text='New Note'
        icon={Plus}
        width='max-w-[152px] w-full'
        height='h-12'
      />
    </nav>
  )
}

export default Navbar