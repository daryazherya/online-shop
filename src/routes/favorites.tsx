import { createFileRoute } from '@tanstack/react-router'
import { Favorites } from '../pages/Favorites/Favorites'

export const Route = createFileRoute('/favorites')({
  component: () => <Favorites />
})