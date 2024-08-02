import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { hideSelectionModal, selectSelectedCurrency, selectSelectionModalState, showSelectionModal } from "./currencySlice"

function Currency() {
  const dispatch = useDispatch()
  const selectionModal = useSelector(selectSelectionModalState)
  const selectedCurrency = useSelector(selectSelectedCurrency)
  

  
  return (
    <div className="container">
      <div className="row">
        <h1>BTC</h1>
        <button className="change-symbol-btn" onClick={()=>dispatch(showSelectionModal())}>Change Symbol</button>
      </div>
      <table className="styled-table">
        <thead>
          <tr>
            <th rowSpan={2}>Rate</th>
            <th rowSpan={2}>Volume</th>
            <th rowSpan={2}>Cap</th>
            <th colSpan={6}>Delta</th>
          </tr>
          <tr>
            <td>Hour</td>
            <td>Day</td>
            <td>Week</td>
            <td>Month</td>
            <td>Quater</td>
            <td>Year</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>2023-08-01 12:00:00</td>
            <td>2023-08-01 12:00:00</td>
            <td>2023-08-01 12:00:00</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
          </tr>
          <tr>
            <td>2023-08-01 12:00:00</td>
            <td>2023-08-01 12:00:00</td>
            <td>2023-08-01 12:00:00</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
            <td>$30,000</td>
          </tr>
        </tbody>
      </table>

      {selectionModal && (
        <div id="currencyModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={()=>dispatch(hideSelectionModal())}>&times;</span>
            <h2>Select Currency</h2>
            <div className="currency-list">
              <div className="currency-list">
                <div className="currency-item">Bitcoin (BTC)</div>
                <div className="currency-item">Ethereum (ETH)</div>
                <div className="currency-item">Litecoin (LTC)</div>
                <div className="currency-item">Ripple (XRP)</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Currency
