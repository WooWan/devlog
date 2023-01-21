import { useQuery } from "@tanstack/react-query";
import fetchBreedList from "./fetchBreedList";

export default function useBreedList(animal) {
  const results = useQuery(["breeds", animal], fetchBreedList);
  console.log(results.data);
  return [results?.data?.breeds ?? [], results.status];
}
