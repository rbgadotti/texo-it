import React, { useCallback, useEffect, useState } from 'react';
import DataCard from '../components/DataCard';
import { MovieWinner } from "../interfaces/MovieWinner"
import Pagination from '../components/Pagination';

type filterParams = Record<string, string>

const DEFAULT_PAGE_SIZE = 15

const List = () => {

  const [year, setYear] = useState<number | null>(null)
  const [isWinner, setIsWinner] = useState<boolean>(true)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [movies, setMovies] = useState<MovieWinner[]>([])

  const getData = useCallback(async() => {

    let params:filterParams = {
      winner: isWinner ? "true" : "false",
      page: "" + page,
      size: "" + DEFAULT_PAGE_SIZE
    }

    if(year){
      params["year"] = "" + year
    }

    const qs = new URLSearchParams(params).toString()

    const response = await fetch(
      `https://tools.texoit.com/backend-java/api/movies?${qs}`
    ).then(data => data.json())
    console.log(response)
    setMovies(response.content)
    setTotalPages(response.totalPages)

  }, [page, year, isWinner])

  useEffect(() => {
    getData()
  }, [getData])

  const handleInputYearChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value
    if(value.length === 4){
      setYear(parseInt(e.currentTarget.value))
    }else{
      setYear(null)
    }
  }

  const handlePageChange = (page:number) => {
    setPage(page)
  }

  return (<>
      <DataCard title="List movies">
      <table className="table-fixed w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">ID</th>
            <th className="p-3 border border-slate-600">
              Year
              <input
                type="number"
                placeholder="Filter by year"
                className="border-[1px] w-full border-slate-300 rounded-lg px-3 py-1"
                value={year ? year : ''}
                onChange={handleInputYearChange}
              />
            </th>
            <th className="p-3 border border-slate-600">Title</th>
            <th className="p-3 border border-slate-600">
              Winner
              <select
                placeholder='Yes/No'
                className="border-[1px] w-full border-slate-300 rounded-lg px-3 py-1"
                value={isWinner ? 'yes' : 'no'}
                onChange={e => setIsWinner(e.target.value === 'Yes' ? true : false)}
              >
                <option value="yes">Yes</option>
                <option value="no">No</option>
              </select>
            </th>
          </tr>
        </thead>
        <tbody> 
          {movies && movies.map(item => (
          <tr key={item.id} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{item.id}</td>
            <td className="p-3 border border-slate-700">{item.year}</td>
            <td className="p-3 border border-slate-700">{item.title}</td>
            <td className="p-3 border border-slate-700">{item.winner ? 'Yes' : 'No'}</td>
          </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className='p-3 border border-slate-700'>
              <Pagination pages={totalPages} current={page} onChange={handlePageChange} />
            </td>
          </tr>
        </tfoot>
      </table>
      </DataCard>
  </>)
}

export default List