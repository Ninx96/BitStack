import React from "react"
import { useDispatch, useSelector } from "react-redux"
import {
  getCryptosAsync,
  getCryptoStatsAsync,
  hideSelectionModal,
  selectCrypto,
  selectCryptos,
  selectCryptoStats,
  selectSelectedCrypto,
  selectSelectionModalState,
  showSelectionModal,
} from "./currencySlice"

function Currency() {
  const dispatch = useDispatch()
  const selectionModal = useSelector(selectSelectionModalState)
  const selectedCrypto = useSelector(selectSelectedCrypto)
  const cryptos = useSelector(selectCryptos)
  const cryptoStats = useSelector(selectCryptoStats)

  React.useEffect(() => {
    if (!cryptos.length) {
      dispatch(getCryptosAsync() as any)
    }
    if (selectedCrypto) {
      dispatch(getCryptoStatsAsync(selectedCrypto) as any)
      let intervalId = setInterval(() => dispatch(getCryptoStatsAsync(selectedCrypto) as any), 5 * 60000)
      return () => clearInterval(intervalId)
    }
  }, [selectedCrypto])

  return (
    <div className="container">
      <div className="row">
        <div className="row">
          <img src={cryptoStats?._id?.webp64} alt="crypto logo" />
          <div style={{ marginLeft: "10px", display: "flex", flexDirection: "column", alignItems: "start" }}>
            <p style={{ fontSize: "20px", fontWeight: "bolder", marginBlockEnd: 0 }}>{cryptoStats?._id?.name}</p>
            <p style={{ fontSize: "13px", marginBlockStart: 0, color: "grey" }}>{cryptoStats?._id?.code}</p>
          </div>
        </div>
        <button className="change-symbol-btn" onClick={() => dispatch(showSelectionModal())}>
          Change Crypto
        </button>
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
            <td>Quarter</td>
            <td>Year</td>
          </tr>
        </thead>
        <tbody>
          {cryptoStats?.stats.map((row: any) => (
            <tr>
              <td>{row?.rate}</td>
              <td>{row?.volume}</td>
              <td>{row?.cap}</td>
              <td>{row?.delta.hour}</td>
              <td>{row?.delta.day}</td>
              <td>{row?.delta.week}</td>
              <td>{row?.delta.month}</td>
              <td>{row?.delta.quarter}</td>
              <td>{row?.delta.year}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectionModal && (
        <div id="currencyModal" className="modal">
          <div className="modal-content">
            <span className="close" onClick={() => dispatch(hideSelectionModal())}>
              &times;
            </span>
            <h2>Select Currency</h2>
            <div className="currency-list">
              <div className="currency-list">
                {cryptos.map((cryptoCode) => (
                  <div
                    id={cryptoCode}
                    className="currency-item"
                    onClick={() => {
                      dispatch(selectCrypto(cryptoCode))
                      dispatch(hideSelectionModal())
                    }}
                  >
                    {cryptoCode}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Currency
