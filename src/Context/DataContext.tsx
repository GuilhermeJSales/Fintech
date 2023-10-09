import { PropsWithChildren, createContext, useContext, useState } from 'react'

import { useFetch } from '../Hooks/useFetch'

export interface VendasProps {
  id: string
  nome: string
  preco: number
  status: 'pago' | 'processando' | 'falha'
  pagamento: 'boleto' | 'cartao' | 'pix'
  parcelas: number | null
  data: string
}

interface DataContextProps {
  data: VendasProps[] | null
  loading: boolean
  error: string | null
  inicio: string
  final: string
  setInicio: React.Dispatch<React.SetStateAction<string>>
  setFinal: React.Dispatch<React.SetStateAction<string>>
}

const DataContext = createContext<DataContextProps | null>(null)

export const useData = () => {
  const context = useContext(DataContext)
  if (context === null)
    throw new Error('UseData precisa estar em DataContextProvider')
  return context
}

function getDate(n: number) {
  const date = new Date()
  date.setDate(date.getDate() - n)
  const dd = String(date.getDate()).padStart(2, '0')
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const yyyy = date.getFullYear()
  return `${yyyy}-${mm}-${dd}`
}

export const DataContextProvider = ({ children }: PropsWithChildren) => {
  const [inicio, setInicio] = useState(getDate(14))
  const [final, setFinal] = useState(getDate(0))

  const { data, loading, error } = useFetch<VendasProps[]>(
    `https://data.origamid.dev/vendas/?inicio=${inicio}&final=${final}`,
  )

  return (
    <DataContext.Provider
      value={{ data, loading, error, inicio, setInicio, final, setFinal }}
    >
      {children}
    </DataContext.Provider>
  )
}
