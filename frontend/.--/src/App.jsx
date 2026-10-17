import { useState } from 'react'

function App() {
  const [message, setMessage] = useState("Backend ki connect kaledu...")

  const callBackend = async () => {
    try {
      const res = await fetch("http://localhost:8000/api/hello")
      const data = await res.json()
      setMessage(data.message)
    } catch (err) {
      setMessage("Backend run avvatledu! Error: " + err.message)
    }
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>My Full Stack App is Live!</h1>
      <button onClick={callBackend} style={{ padding: '15px 30px', fontSize: '20px', background: 'black', color: 'white', cursor: 'pointer' }}>
        Call Backend
      </button>
      <h2 style={{ marginTop: '30px', color: 'green' }}>{message}</h2>
    </div>
  )
}

export default App