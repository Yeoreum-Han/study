import { ComponentPropsWithoutRef } from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
    href?: string;
};

// type predicate   속성이 props에 있는지 확인하고 true면 AnchorProps이라고 단정.
function isAnchorProps(props: ButtonProps | AnchorProps) : props is AnchorProps{
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
    if (isAnchorProps(props)) {
        return (
            <a className="button" {...props}></a>

        );
    }
    return (
        <button className="button" {...props} />

    );
}