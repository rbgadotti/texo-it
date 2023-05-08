import MultipleWinners from '../components/MultipleWinners';
import TopWinners from '../components/TopWinners';
import ProducersIntervalWins from '../components/ProducersIntervalWins';
import ListWinnersByYear from '../components/ListWinnersByYear';

const Index = () => {
  return (
    <div className='grid grid-cols-2 gap-5'>
      <MultipleWinners />
      <TopWinners />
      <ProducersIntervalWins />
      <ListWinnersByYear />
    </div>
  )
}

export default Index