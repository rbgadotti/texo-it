import { useEffect, useState } from "react"
import DataCard from "./DataCard"
import { WinnerStudio } from "../interfaces/WinnerStudio"

interface TopWinnersProps {
  showCount?: number
}

const TopWinners = (props:TopWinnersProps) => {

  const { showCount = 3 } = props

  const [winnersList, setWinnersList] = useState<WinnerStudio[]>([])

  const getData = async() => {
    const response = await fetch(
      "https://tools.texoit.com/backend-java/api/movies?projection=studios-with-win-count"
    ).then(data => data.json())
    setWinnersList(response.studios)
  }

  useEffect(() => {
    setWinnersList(data => data.sort((itemA, itemB) => itemA.winCount - itemB.winCount))
  }, [winnersList])

  useEffect(() => {
    getData()
  }, [])

  return (
    <DataCard title="Top 3 studios with winners">
      <table className="table-auto w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">Name</th>
            <th className="p-3 border border-slate-600">Win Count</th>
          </tr>
        </thead>
        <tbody>
          {winnersList && winnersList.slice(0, showCount).map((winner, i) => (
          <tr key={i} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{winner.name}</td>
            <td className="p-3 border border-slate-700">{winner.winCount}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </DataCard>
  )
}

export default TopWinners