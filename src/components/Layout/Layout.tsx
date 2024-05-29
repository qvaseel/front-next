interface ILayout {
  children: React.ReactNode;
  id: string;
}

const Layout = ({ children, id }: ILayout) => {
  return (
    <div
      id={id}
      className="px-10 relative max-w-7xl mx-auto my-0 w-full flex flex-col gap-[52px]"
    >
      {children}
    </div>
  );
};

export default Layout;
