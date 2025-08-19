
import TodoApp from './components/todo'

function App() {
  return (
    <>
      <div className='flex flex-col  m-4 min-h-screen bg-gray-100'>
        <h1 className='text-4xl font-bold text-red-400 text-center mb-4'>React 19 features explorer</h1>
        <TodoApp />
      </div>
    </> 
  )
}

export default App
