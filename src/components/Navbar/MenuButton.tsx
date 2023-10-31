const MenuButton = ({ label }: { label: string }) => {
  return (
    <div className="group relative cursor-pointer  overflow-hidden text-4xl uppercase leading-6">
      <span className="inline-block translate-y-0 p-1 transition duration-500 ease-out group-hover:-translate-y-[200%]">
        {label}
      </span>
      <span className="absolute left-0 translate-y-[200%] rotate-12 p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {label}
      </span>
    </div>
  );
};

export default MenuButton;
