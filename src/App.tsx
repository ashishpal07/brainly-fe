import './App.css'
import { Button } from './components/ui/Button'
import { Card } from './components/ui/Card'
import { PlusIcon } from './icons/PlusIcon'
import { ShareIcon } from './icons/ShareIcon'

function App() {
  return (
    <>
    <Button startIcon={<PlusIcon size={"md"} />} variant='primary' text='Share Brain' size='sm' />
    <Button startIcon={<ShareIcon size={"md"} />} variant='secondary' text='Add Content' size='sm' />
    <Card />
    </>
  )
}

export default App
