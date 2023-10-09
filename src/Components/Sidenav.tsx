import resumo from '../assets/icons/resumo.svg'
import vendas from '../assets/icons/vendas.svg'
import webhooks from '../assets/icons/webhooks.svg'
import configuracoes from '../assets/icons/configuracoes.svg'
import contato from '../assets/icons/contato.svg'
import sair from '../assets/icons/sair.svg'
import { FintechSvg } from '../assets/FintechSVG'
import { NavLink } from 'react-router-dom'

export function Sidenav() {
  return (
    <nav className="sidenav box bg-3">
      <FintechSvg title="Fintech Logo" />
      <ul>
        <li>
          <span>
            <img src={resumo} alt="" />
          </span>
          <NavLink to="/">Resumo</NavLink>
        </li>

        <li>
          <span>
            <img src={vendas} alt="" />
          </span>
          <NavLink to="/vendas">Vendas</NavLink>
        </li>

        <li>
          <span>
            <img src={webhooks} alt="" />
          </span>
          <a>Webhooks</a>
        </li>

        <li>
          <span>
            <img src={configuracoes} alt="" />
          </span>
          <a>Configurações</a>
        </li>

        <li>
          <span>
            <img src={contato} alt="" />
          </span>
          <a>Contato</a>
        </li>

        <li>
          <span>
            <img src={sair} alt="" />
          </span>
          <a>Sair</a>
        </li>
      </ul>
    </nav>
  )
}
