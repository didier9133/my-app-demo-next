import Link from "next/link";
import { useRouter } from "next/router";
import { CSSProperties } from "react";

interface Props {
  text: string;
  href: string;
}

const style: CSSProperties = {
  color: "#0070f3",
  textDecoration: "underline",
};

const ActiveLink = ({ text, href }: Props) => {
  const { route } = useRouter();
  return (
    <>
      <Link style={route === href ? style : {}} href={href}>
        {text}
      </Link>
    </>
  );
};

export default ActiveLink;
