import { useCallback, useEffect, useState } from "react"
import DataCard from "./DataCard"
import { BiSearchAlt2 } from "react-icons/bi"
import { MovieWinner } from "../interfaces/MovieWinner"

const currentYear = new Date().getFullYear() 

const ListWinnersByYear = () => {

  const [year, setYear] = useState<number>(currentYear)
  const [winnersList, setWinnersList] = useState<MovieWinner[]>([])

  const getData = useCallback(async() => {
    const response = await fetch(
      `https://tools.texoit.com/backend-java/api/movies?winner=true&year=${year}`
    ).then(data => data.json())
    setWinnersList(response)
  }, [year])

  useEffect(() => {
    getData()
  }, [getData])

  return (
    <DataCard title="List movie winners by year">
      <div className="flex flex-row gap-1 mb-4">
        <input
          type="number"
          placeholder="Search by year"
          className="border-[1px] w-full border-slate-300 rounded-lg px-3 py-1"
          value={year}
          onChange={e => setYear(parseInt(e.target.value))}
        />
        <button className="bg-sky-500 p-2 rounded-lg text-white"><BiSearchAlt2 /></button>
      </div>
      <table className="table-fixed w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">Id</th>
            <th className="p-3 border border-slate-600">Year</th>
            <th className="p-3 border border-slate-600">Title</th>
          </tr>
        </thead>
        <tbody>
          {winnersList && winnersList.map(item => (
          <tr key={item.id} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{item.id}</td>
            <td className="p-3 border border-slate-700">{item.year}</td>
            <td className="p-3 border border-slate-700">{item.title}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </DataCard>
  )
}

export default ListWinnersByYear