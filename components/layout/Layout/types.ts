import type { ReactNode } from "react";

export enum LayoutsType {
    MainLayout = 'main',
}

export interface ILayoutProps {
    children: ReactNode;
    layout?: LayoutsType
}