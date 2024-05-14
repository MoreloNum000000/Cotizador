import React from 'react'
import { moneyFormat } from '../../../Subcripciones/src/helpers'

export const Resultado = ({total, cantidad, plazo}) => {
  return (
    <div className="resultado">
      <h2>Cotización</h2>
      <p>La cantidad solicitada es: {(moneyFormat(Number(cantidad)))}</p>
      <p>A pagar en: {plazo} Meses</p>
      <p>Su pago mensual es de: {moneyFormat((total / plazo))}</p>
      <p>Total a pagar: {(moneyFormat(total))}</p>

    </div>

  )
}
