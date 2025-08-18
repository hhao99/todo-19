
import TodoApp from './components/todo'

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
        <h1 className='text-4xl font-bold text-red-400 mb-4'>Vite + React</h1>
        <TodoApp />
      </div>
    </> 
  )
}

export default App
