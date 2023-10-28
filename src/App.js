import Header from './components/header/Header'
import Auth from './pages/auth/Auth'
import Products from './components/products/Products'
import LIST from './dataItems'
import { useState } from 'react'

const App = () => {
  const [listItems, setListItems] = useState(LIST) // temporarily
  const [isAuthVisible, setIsAuthVisible] = useState(false)

  const handleVisible = boolean => setIsAuthVisible(boolean)

  return (
    <div className="App">
      <Header onVisible={handleVisible} />
      <h1 className="title">Main page</h1> {/* temporarily */}
      {isAuthVisible && <Auth onVisible={handleVisible} />}
      <Products listItems={listItems} />
    </div>
  )
}

export default App
