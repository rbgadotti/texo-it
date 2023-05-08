interface DataCardProps extends React.ComponentProps<"div"> {
  title: string
}

const DataCard = (props: DataCardProps) => {
  const { title, children } = props

  return (
    <div className="flex flex-col p-5 border-2 border-slate-300 shadow rounded-md">
      <h2 className="text-xl font-bold my-3">{title}</h2>
      <div>
        {children}
      </div>
    </div>
  )
}

export default DataCard