import MainLayout from "@/components/Layouts/MainLayouts";
import Link from "next/link";

const PricingPage = () => {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/pricing.tsx</code>
        </p>
      </div>

      <h2>
        <Link href={"/"}>ir al home</Link>
      </h2>
    </MainLayout>
  );
};

export default PricingPage;
