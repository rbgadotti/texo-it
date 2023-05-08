import classNames from 'classnames'
import { AiOutlineFastBackward, AiOutlineFastForward, AiOutlineCaretRight, AiOutlineCaretLeft } from 'react-icons/ai'

interface PaginationProps {
  pages: number,
  current: number,
  onChange?: (page:number) => void
}

const Pagination = (props: PaginationProps) => {
  const { pages, current, onChange } = props

  const handleChangePage = (page:number) => {
    if(page < 0 || page >= pages) return
    onChange && onChange(page)
  }

  const notAllowed = classNames(
    'cursor-not-allowed',
    'text-slate-400'
  )

  const allowed = classNames(
    'cursor-pointer',
    'hover:bg-sky-500',
    'hover:text-white'
  )

  const selectedPage = classNames(
    'bg-sky-500',
    'text-white'
  )

  return (
    <ul className='flex flex-row gap-2 mx-auto w-fit'>
      <button
        className={`${current === 0 ? notAllowed : allowed} px-3 py-2 rounded-lg`}
        onClick={() => handleChangePage(0)}>
          <AiOutlineFastBackward />
      </button>
      <button
        className={`${current === 0 ? notAllowed : allowed} px-3 py-2 rounded-lg`}
        onClick={() => handleChangePage(current - 1)}>
          <AiOutlineCaretLeft />
      </button>
      {[...Array(pages)].map((_item, i) =>
        <button
          key={i}
          className={`${i === current ? selectedPage : allowed} px-3 py-2 hover:bg-sky-500 hover:text-white rounded-lg cursor-pointer`}
          onClick={() => handleChangePage(i)}>
          {i + 1}
        </button>
      )}
      <button
        className={`${current === (pages - 1) ? notAllowed : allowed} px-3 py-2 rounded-lg`}
        onClick={() => handleChangePage(current + 1)}>
          <AiOutlineCaretRight />
      </button>
      <button
        className={`${current === (pages - 1) ? notAllowed : allowed} px-3 py-2 rounded-lg`}
        onClick={() => handleChangePage(pages - 1)}>
          <AiOutlineFastForward />
      </button>
    </ul>
  )
}

export default Pagination