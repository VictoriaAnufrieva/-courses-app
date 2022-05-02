
export default function Button({ buttonText, onClick }) {
    return (
        <button className='btn' onClick={onClick}>{buttonText}</button>
    )
}