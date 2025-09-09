import { Footer } from './components/footer/Footer'
import { Header } from './components/header/Header'
import { PostsList } from './components/postsList/PostsList'

function App() {
  return (
    <div className='flex flex-col h-screen'>
      <Header />
      <div className='flex-1 overflow-y-auto'>
        <PostsList />
      </div>
      <Footer />
    </div>
  )
}

export default App
