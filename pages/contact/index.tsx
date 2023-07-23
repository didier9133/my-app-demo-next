import Link from "next/link";
import MainLayout from "@/components/Layouts/MainLayouts";

const ContactPage = () => {
  return (
    <MainLayout>
      <div className="description">
        <p>
          Get started by editing&nbsp;
          <code className="code">pages/contact.tsx</code>
        </p>
      </div>

      <h2>
        <Link href={"/"}>ir al home</Link>
      </h2>
    </MainLayout>
  );
};

export default ContactPage;
