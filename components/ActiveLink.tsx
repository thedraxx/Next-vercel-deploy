import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface Props {
    href: string;
    text: string;
}

const style:CSSProperties={
    color: "red",
    textDecoration:'underline',
}

const ActiveLink = ({ href, text }: Props) => {

const {asPath} = useRouter()

    return (
        <Link href={href}>
            <p style={ asPath === href ? style : undefined}>
                {text}
            </p>
        </Link>
    )
}

export default ActiveLink