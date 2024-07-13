import { Helmet } from "react-helmet-async";

function HelmetHeader({ title, description }: { title: string; description: string }) {
  return (
    <Helmet>
      <title>{title} | PPN ADMIN</title>
      <meta name="description" content={description || ""} />
    </Helmet>
  );
}

export default HelmetHeader;
