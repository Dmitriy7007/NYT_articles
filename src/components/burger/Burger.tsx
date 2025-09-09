import { burgerLinks } from '@/consts/consts'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet'

export const Burger = () => {
  const burgerLines = Array(3).fill(0)

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button
          className='w-[20px] h-[16px] flex flex-col justify-between'
          aria-label='Open menu'
        >
          {burgerLines.map((_, index) => (
            <span key={index} className='block h-[2px] w-full bg-black'></span>
          ))}
        </button>
      </SheetTrigger>

      <SheetContent
        className='w-full h-full bg-white border-none p-6 sm:max-w-full'
        side='left'
      >
        <SheetHeader className='hidden'>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <nav aria-label='Main menu' className='mt-[121px]'>
          <ul className='flex flex-col gap-4 text-lg'>
            {burgerLinks.map(link => (
              <li
                key={link.id}
                className='cursor-pointer font-bold text-2xl tracking-widest pb-7'
              >
                <a href={link.href}>{link.title}</a>
              </li>
            ))}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
