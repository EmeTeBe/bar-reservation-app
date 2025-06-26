type Props = {
  label: string;
  name?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
  className?: string;
  required?: boolean;
};

export default function Select({ label, name, value, onChange, children, className, required }: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
      
      <select
        name={name}
        className={`py-2 text-4xl w-fit ${className}`}
        value={value}
        onChange={onChange}
        required={required}
      >
        {children}
      </select>
      {label}
    </label>
  );
}
