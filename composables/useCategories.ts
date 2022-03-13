import CategoryDTO from "@/definitions/CategoryDTO";
import CategoryModel from "@/definitions/CategoryModel";

function useCategories() {
  const { fetchData } = useSanity();

  const query = `*[_type == "category"  ]
    {
        title ,
        "slug": slug.current,
        "color": color.hex,
    }`;

  const categories = useState("categories", (): CategoryModel[] => null);

  async function fetchCategories(): Promise<void> {
    const { data } = await fetchData<CategoryDTO[]>("fetchCategories", query);

    categories.value = data.value.map((d) => new CategoryModel(d));
  }

  return { fetchCategories, categories };
}

export default useCategories;
