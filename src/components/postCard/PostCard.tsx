import { formatDate } from '@/lib/formatDate'
import type { Post } from '@/types/post'

export const PostCard = ({ post }: { post: Post }) => {
  const imageUrl = `https://www.nytimes.com/${post.multimedia[0]?.url}`

  return (
    <a
      className='grid gap-3 grid-cols-[32%_68%]'
      href='https://www.nytimes.com'
    >
      <div className='mt-8'>
        <img src={imageUrl || '/assets/news_preview.jpeg'} alt='preview' />
      </div>
      <div>
        <p className='font-semibold text-blue-primary pb-2'>{post.source}</p>
        <p className='font-regular leading-[137%] text-base pb-2'>
          {post.abstract}
        </p>
        <p className='text-sm text-grey-darken'>{formatDate(post.pub_date)}</p>
      </div>
    </a>
  )
}
