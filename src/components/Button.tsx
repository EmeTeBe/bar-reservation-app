type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
};

export default function Button({
  children,
  onClick,
  type = "button",
  className = "",
}: Props) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-4 py-2 rounded-full hover:opacity-90 transition ${className}`}
    >
      {children}
    </button>
  );
}
