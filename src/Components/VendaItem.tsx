import { NavLink } from 'react-router-dom'
import { VendasProps } from '../Context/DataContext'

export function VendaItem({ venda }: { venda: VendasProps }) {
  return (
    <div className="venda box">
      <NavLink to={`/vendas/${venda.id}`} style={{ fontFamily: 'monospace' }}>
        {venda.id}
      </NavLink>
      <div>{venda.nome}</div>
      <div>
        {venda.preco.toLocaleString('pt-br', {
          style: 'currency',
          currency: 'BRL',
        })}
      </div>
    </div>
  )
}
