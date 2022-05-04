export default function Input({
  labelText,
  placeholderText,
  onChange,
  ...props
}) {
  return (
    <label>
      {labelText}
      <input onChange={onChange} placeholder={placeholderText} {...props} />
    </label>
  );
}
