export const formatCountryListForState = (
  list: { id: number; name: string; paths: string[] }[]
) => {
  return list.map((item) => ({ id: item.id, name: item.name }));
};

export const formatTime = (time: number): string => {
  return new Date(time * 1000).toISOString().substring(14, 19)
}