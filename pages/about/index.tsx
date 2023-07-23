import LigthLayout from "@/components/Layouts/LigthLayout";
import MainLayout from "@/components/Layouts/MainLayouts";
import Link from "next/link";
import { ReactNode } from "react";

const AboutPage = () => {
  return (
    <>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/about.tsx</code>
        </p>
      </div>

      <h2>
        <Link href={"/"}>ir al home</Link>
      </h2>
    </>
  );
};

AboutPage.getLayout = function getLayout(page: ReactNode) {
  return (
    <MainLayout>
      <LigthLayout>{page}</LigthLayout>
    </MainLayout>
  );
};

export default AboutPage;
