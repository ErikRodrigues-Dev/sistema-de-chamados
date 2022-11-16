import { useContext } from 'react';

import { AuthContext } from '../../contexts/auth'

export default function Dashboard(){

  const { singOut } = useContext(AuthContext);

  return(
    <div>
      <h1>PAGINA DASHBOARD</h1>
      <button onClick={ () => singOut()} > Sair </button>
    </div>
  )
}