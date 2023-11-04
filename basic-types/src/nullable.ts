{
  type SearchName = (value: string | null) => string;

  const searchName: SearchName = (value) => {
    if (value) {
      return "Searching";
    } else {
      return "There is nothing to search";
    }
  };

  console.log(searchName("Alif"));
  console.log(searchName(""));
  console.log(searchName(null));
  
}
