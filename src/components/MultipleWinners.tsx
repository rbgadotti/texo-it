import { useEffect, useState } from "react"
import DataCard from "./DataCard"
import { MultipleWinner } from "../interfaces/MultipleWinner"

interface MultipleWinnersProps {
  showCount?: number
}

const MultipleWinners = (props:MultipleWinnersProps) => {

  const { showCount = 3 } = props

  const [multipleWinnersList, setMultipleWinnersList] = useState<MultipleWinner[]>([])

  const getData = async() => {
    const response = await fetch(
      "https://tools.texoit.com/backend-java/api/movies?projection=years-with-multiple-winners"
    ).then(data => data.json())
    setMultipleWinnersList(response.years)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <DataCard title="List years with multiple winners">
      <table className="table-auto w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">Year</th>
            <th className="p-3 border border-slate-600">Win Count</th>
          </tr>
        </thead>
        <tbody>
          {multipleWinnersList && multipleWinnersList.slice(0, showCount).map((item, i) => (
          <tr key={i} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{item.year}</td>
            <td className="p-3 border border-slate-700">{item.winnerCount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </DataCard>
  )
}

export default MultipleWinners