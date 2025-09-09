import { useGetPostsQuery } from '@/services/nytApi'
import { PostCard } from '../postCard/PostCard'
import { groupByDate } from '@/lib/groupByDate'
import { Separator } from '@radix-ui/react-separator'
import { useEffect, useRef, useState } from 'react'
import { Loader } from '../loader/loader'

export function PostsList() {
  const { data, error, isLoading } = useGetPostsQuery(
    { year: 2025, month: 5 },
    { pollingInterval: 30000 }
  )

  const [visibleCount, setVisibleCount] = useState(5)
  const loaderRef = useRef<HTMLDivElement>(null)

  const posts = data?.response.docs || []
  const grouped = groupByDate(posts)

  useEffect(() => {
    if (!loaderRef.current) return
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting && visibleCount < posts.length) {
          setTimeout(() => {
            setVisibleCount(prev => prev + 5)
          }, 1000)
        }
      },
      {
        threshold: 0.1,
      }
    )
    observer.observe(loaderRef.current)
    return () => observer.disconnect()
  }, [visibleCount, posts.length])

  if (isLoading)
    return (
      <div className='flex justify-center items-center h-full'>
        <Loader loaderRef={loaderRef as React.RefObject<HTMLDivElement>} />
      </div>
    )
  if (error) return <p>Error loading news</p>

  let remaining = visibleCount

  return (
    <div className='px-5 pt-[11px] pb-52'>
      {Object.entries(grouped).map(([date, items]) => {
        if (remaining <= 0) return null

        const toShow = items.slice(0, remaining)
        remaining -= toShow.length

        return (
          <div key={date} className='mb-8'>
            <h2 className='text-lg font-bold mb-[11px]'>News for {date}</h2>
            <ul>
              {toShow.map(item => (
                <li key={item._id}>
                  <PostCard post={item} />
                  <Separator className='bg-grey-light my-4 h-[1px]' />
                </li>
              ))}
            </ul>
          </div>
        )
      })}

      {visibleCount < posts.length && (
        <Loader loaderRef={loaderRef as React.RefObject<HTMLDivElement>} />
      )}
    </div>
  )
}
