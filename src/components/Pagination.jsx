const MAX_ITEMS = 10
const MAX_LEFT = (MAX_ITEMS -1) / 2

export function Pagination({ limit, total, offset}){
  const current = offset ? (offset / limit) + 1 : 1
  const pages = Math.ceil(total / limit)
  const first = Math.max(current - MAX_LEFT, 1)


  return (
    <ul>

    </ul>
  )
}