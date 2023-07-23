import MainLayout from "@/components/Layouts/MainLayouts";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/index.tsx</code>
        </p>
        <div>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{" "}
            <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="vercelLogo"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>

      <div className="center">
        <Image
          className="logo"
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </div>

      <h2>
        <Link href={"/about"}>ir al about</Link>
      </h2>
    </MainLayout>
  );
}
