import './Input.css'
export default function Input({
  labelText,
  placeholderText,
  onChange,
  ...props
}) {
  return (
    <label>
      {labelText}
      <input onChange={onChange} placeholder={placeholderText} {...props} className='input'/>
    </label>
  );
}
