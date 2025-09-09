export const Loader = ({
  loaderRef,
}: {
  loaderRef: React.RefObject<HTMLDivElement>
}) => {
  return (
    <div ref={loaderRef} className='flex justify-center py-4'>
      <img
        src='/assets/loader.svg'
        alt='Loading...'
        className='w-9 h-9 animate-spin'
      />
    </div>
  )
}
