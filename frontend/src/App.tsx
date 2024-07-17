import AdorerTable from './components/AdorerTable'
import PrimarySearchAppBar from './components/PrimarySearchAppBar';
import Typography from '@mui/material/Typography'
import './App.css'

function App() {

  return (
    <>
      <PrimarySearchAppBar />
      <main>
        <Typography variant="h2" gutterBottom>
          Adorers this Week
        </Typography>
        <div className="card">
          <AdorerTable />
        </div>
      </main>
    </>
  )
}

export default App
