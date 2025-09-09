import { footerLinks } from '@/consts/consts'

export const Footer = () => {
  return (
    <footer className='fixed bottom-0 left-0 w-full pt-7 shadow-md h-[188px] px-15 bg-white flex flex-col items-center'>
      <nav aria-label='Footer navigation'>
        <ul className='flex gap-5 text-xs justify-center mb-[27px]'>
          {footerLinks.map(link => (
            <li key={link.id} className='cursor-pointer'>
              <a href={link.href}>{link.title}</a>
            </li>
          ))}
        </ul>
      </nav>

      <div className='flex flex-col items-center'>
        <p className='text-xs mb-5'>Powered by</p>
        <img
          src='/assets/footer_img.png'
          alt='NY Times logo'
          className='mb-2'
        />
        <small className='text-xs'>© 2023 Besider. Inspired by Insider</small>
      </div>
    </footer>
  )
}
