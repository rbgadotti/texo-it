import { useEffect, useState } from "react"
import DataCard from "./DataCard"
import { ProducerIntervalWins } from "../interfaces/ProducerIntervalWins"



const ProducersIntervalWins = () => {

  const [producersMinWins, setProducersMinWins] = useState<ProducerIntervalWins[]>([])
  const [producersMaxWins, setProducersMaxWins] = useState<ProducerIntervalWins[]>([])

  const getData = async() => {
    const response = await fetch(
      "https://tools.texoit.com/backend-java/api/movies?projection=max-min-win-interval-for-producers"
    ).then(data => data.json())
    setProducersMinWins(response.min)
    setProducersMaxWins(response.max)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <DataCard title="Producers with longest and shortest interval between wins">
      <h3 className="text-2xl my-3">Maximum</h3>
      <table className="table-fixed w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">Producer</th>
            <th className="p-3 border border-slate-600">Interval</th>
            <th className="p-3 border border-slate-600">Previous Year</th>
            <th className="p-3 border border-slate-600">Following Year</th>
          </tr>
        </thead>
        <tbody>
          {producersMaxWins && producersMaxWins.map((item, i) => (
          <tr key={i} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{item.producer}</td>
            <td className="p-3 border border-slate-700">{item.interval}</td>
            <td className="p-3 border border-slate-700">{item.previousWin}</td>
            <td className="p-3 border border-slate-700">{item.followingWin}</td>
          </tr>
          ))}
        </tbody>
      </table>
      <h3 className="text-2xl my-3">Minimun</h3>
      <table className="table-fixed w-full border-[1px] text-left">
        <thead>
          <tr>
            <th className="p-3 border border-slate-600">Producer</th>
            <th className="p-3 border border-slate-600">Interval</th>
            <th className="p-3 border border-slate-600">Previous Year</th>
            <th className="p-3 border border-slate-600">Following Year</th>
          </tr>
        </thead>
        <tbody>
        {producersMinWins && producersMinWins.map((item, i) => (
          <tr key={i} className="even:bg-white odd:bg-slate-100">
            <td className="p-3 border border-slate-700">{item.producer}</td>
            <td className="p-3 border border-slate-700">{item.interval}</td>
            <td className="p-3 border border-slate-700">{item.previousWin}</td>
            <td className="p-3 border border-slate-700">{item.followingWin}</td>
          </tr>
          ))}
        </tbody>
      </table>
    </DataCard>
  )
}

export default ProducersIntervalWins