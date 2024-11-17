const SideBar = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex h-full w-full flex-col bg-sidebar text-sidebar-foreground">
    {children}
  </div>;
};

export default SideBar;
