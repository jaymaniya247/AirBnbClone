import countries from "world-countries";

const formettedCountries = countries.map((country) => ({
  value: country.cca2,
  label: country.name.common,
  flag: country.flag,
  latlng: country.latlng,
  region: country.region,
}));

// console.log(countries);
const useCountries = () => {
  const getAll = () => formettedCountries;

  const getByValue = (value: string) => {
    return formettedCountries.find((country) => country.value === value);
  };

  return {
    getAll,
    getByValue,
  };
};

export default useCountries;
