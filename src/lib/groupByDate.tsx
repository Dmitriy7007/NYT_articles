import type { Post } from '@/types/post'

export const groupByDate = (news: Post[]) => {
  const sorted = [...news].sort(
    (a, b) => new Date(b.pub_date).getTime() - new Date(a.pub_date).getTime()
  )

  return sorted.reduce<Record<string, Post[]>>((acc, item) => {
    const dateKey = new Date(item.pub_date).toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })

    if (!acc[dateKey]) acc[dateKey] = []
    acc[dateKey].push(item)

    return acc
  }, {})
}
