export const formatCountryListForState = (
  list: { id: number; name: string; paths: string[] }[]
) => {
  return list.map((item) => ({ id: item.id, name: item.name }));
};
