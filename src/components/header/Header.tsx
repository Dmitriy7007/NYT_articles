import { Burger } from '../burger/Burger'

export const Header = () => {
  return (
    <div className='flex px-5'>
      <div className='flex justify-center items-center h-18'>
        <Burger />
      </div>
      <h1 className='w-full flex justify-center items-center h-18 font-bold text-2xl tracking-widest'>
        BESIDER
      </h1>
    </div>
  )
}
