import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/router-devtools'
import { NavPanel } from '../components/NavPanel'

export const Route = createRootRoute({
    component: Root
})

function Root() {

    return (
        <>
            <NavPanel />
            <hr />
            <Outlet />
            <TanStackRouterDevtools />
        </>
)}