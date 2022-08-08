import { useMemo } from "react";
import { ILayoutProps } from "./types";
import MainLayout from '../MainLayout/MainLayout';

const Layout = ({ children }: ILayoutProps) => {

    const LayoutComponent = useMemo(() => {
        return MainLayout
    }, [])

    return (
        <LayoutComponent>{children}</LayoutComponent>
    )
}

export default Layout;