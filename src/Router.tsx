import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Checkout } from './pages/Checkout'
import { Home } from './pages/Home/index'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/checkout" element={<Checkout />} />
      </Route>
    </Routes>
  )
}
