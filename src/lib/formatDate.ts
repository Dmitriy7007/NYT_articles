export const formatDate = (dateStr: string) => {
  const d = new Date(dateStr)

  let formatted = d.toLocaleString('en-US', {
    month: 'short',
    day: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })

  formatted = formatted.replace(/(\d{1,2}):(\d{2})/, '$1.$2')

  return formatted
}
