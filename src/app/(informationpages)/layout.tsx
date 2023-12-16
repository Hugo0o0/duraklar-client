import Navigation from "@/Layout/Navigation";

const InformationPageLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navigation />
      <div>{children}</div>
    </>
  );
};

export default InformationPageLayout;
