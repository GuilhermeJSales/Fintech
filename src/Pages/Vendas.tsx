import { VendaItem } from '../Components/VendaItem'
import { useData } from '../Context/DataContext'

export function Vendas() {
  const { data } = useData()

  if (!data) return null
  return (
    <ul>
      {data.map((venda) => (
        <li key={venda.id}>
          <VendaItem venda={venda} />
        </li>
      ))}
    </ul>
  )
}
