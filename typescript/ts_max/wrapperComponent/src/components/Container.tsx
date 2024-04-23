import { type ReactNode, type ElementType, type ComponentPropsWithoutRef } from "react";

// ElementType을 받을 건데 어떤게 올 지는 몰라서 제네릭.
type ContainerProps<T extends ElementType> = {
    as?: T;
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export default function Container<C extends ElementType>({as, children, ...props}: ContainerProps<C>) {
    const Component = as || 'div';
    // {as: Component} : ContainerProps
    return <Component {...props}>{children}</Component>
}