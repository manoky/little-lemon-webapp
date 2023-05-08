import { Route, Routes } from 'react-router-dom'
import { Main } from './Main'

export const RootRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/booking" element={<div>Book now</div>} />
    </Routes>
  )
}
