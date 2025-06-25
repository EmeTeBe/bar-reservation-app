type Props = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
};

export default function Input({
  label,
  value,
  onChange,
  placeholder = "",
  type = "text",
}: Props) {
  return (
    <label className="flex flex-col gap-1 text-sm font-semibold text-gray-700">
      {label}
      <input
        type={type}
        className="rounded-md border border-gray-300 p-2 text-lg"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </label>
  );
}
