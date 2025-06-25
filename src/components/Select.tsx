type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  children: React.ReactNode;
};

export default function Select({ label, value, onChange, children }: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
      {label}
      <select
        className="rounded-md border border-gray-300 p-2 text-lg"
        value={value}
        onChange={onChange}
      >
        {children}
      </select>
    </label>
  );
}
