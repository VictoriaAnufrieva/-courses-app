import Button from "../../../../common/Button/Button";
import Input from "../../../../common/Input/Input";

export default function SearchBar() {
  return (
    <form>
      <Input
        name="search"
        type="search"
        placeholderText="Enter course name or id..."
      />
      <Button buttonText="Search" />
    </form>
  );
}
