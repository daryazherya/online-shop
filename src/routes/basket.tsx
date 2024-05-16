import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/basket')({
  component: () => <div>Hello /basket!</div>
})