
import { useState } from 'react'
import Papa from 'papaparse'
export function CSV(){
    const [dados, setDados] = useState([])

    const lerDadosArquivo = (e) => {
      // e.preventDefault()
  
      const arquivo = e.target.files[0];
  
      if(arquivo){
  
        // usar biblioteca
         // npm i papaparse
         Papa.parse(arquivo, {
          header: true,
          encoding: "ISO-8859-1",
          // encoding: 'utf-8',
          dynamicTyping: true,
          complete: (results) => {
            console.log(results.data)
            setDados(results.data)
          },
          error: (err) => {
            alert('Erro ao ler o csv: ' , err)
          }
        })
      }
    }
    return(
        <div>
            <input type="file" accept='.csv' onChange={lerDadosArquivo} />
            <table border={1}>  
                <thead>
                <tr>
                    <th>Nome</th>
                    <th>E-mail</th>
                    <th>Telefone</th>
                    <th>Sexo</th>
                </tr>
                </thead>
                <tbody>                
                {dados.map((row, index) => (
                    <tr key={index}>
                    <td> {row.nome}     </td>
                    <td> {row.email}    </td>
                    <td> {row.telefone} </td>
                    <td> {row.sexo}     </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}