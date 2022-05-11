import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";


export default function SearchBar({setSearchValue}) {
    function handleSubmit(event){
        event.preventDefault()
        const form = event.target;
        const searchValue = form.search.value.trim().toLowerCase()
        setSearchValue(searchValue)
    }
  return (
    <form onSubmit={handleSubmit} className='search-bar'>
      <Input
        name="search"
        type="search"
        placeholderText="Enter course name or id..."
      />
      <Button buttonText="Search" />
    </form>
  );
}
