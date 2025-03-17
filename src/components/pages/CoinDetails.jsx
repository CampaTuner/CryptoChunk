
import React, { useState } from 'react'
import Chart from '../Chart/Chart'
import TopGainers from '../Chart/TopGainers'
import CoinDescription from '../Chart/CoinDescription'
function CoinDetails() {

  return (
    <div>
      <Chart />
      <TopGainers />
      <CoinDescription />
    </div>
  )
}

export default CoinDetails