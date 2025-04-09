import { Toaster } from 'sonner'

import Sidebar from './components/sidebar'
import Tasks from './components/Tasks'

function App() {
  return (
    <div className="flex">
      <Toaster
        toastOptions={{
          style: {
            color: '#35383E',
          },
        }}
      />
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default App
