// import { ReactNode } from "react";

import { type PropsWithChildren } from "react";

// interface HeaderProps {
//     image: Image;
//     children: ReactNode;
// }
interface Image {
    src: string;
    alt: string;
}

type HeaderProps = PropsWithChildren<{image: Image}>;

export default function Header({ image, children }: HeaderProps) {
    return (
        <header>
            {/* <img src={image.src} alt={image.alt} /> */}
            <img {...image} />
            {children}
        </header>
    );
};