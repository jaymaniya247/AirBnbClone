"use client";

import Container from "../Container";

import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import { FaSkiing } from "react-icons/fa";
import { BsSnow } from "react-icons/bs";
import { IoDiamond } from "react-icons/io5";
import {
  GiBarn,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiWindmill,
} from "react-icons/gi";
import { MdOutlineVilla } from "react-icons/md";
import CategoryBox from "./CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";

export const categories = [
  {
    label: "Beach",
    icon: TbBeach,
    description: "this property is close to the beach",
  },
  {
    label: "Widmill",
    icon: GiWindmill,
    description: "this property has windmills",
  },
  {
    label: "Modern",
    icon: MdOutlineVilla,
    description: "this property is So Modern",
  },
  {
    label: "Countryside",
    icon: TbMountain,
    description: "this property is Countryside",
  },
  {
    label: "Pools",
    icon: TbPool,
    description: "this property Has a pool",
  },
  {
    label: "Islands",
    icon: GiIsland,
    description: "this property is on Island",
  },
  {
    label: "Lake",
    icon: GiBoatFishing,
    description: "this property is near lake",
  },
  {
    label: "Skiing",
    icon: FaSkiing,
    description: "this property has Skiing activities",
  },
  {
    label: "Castle",
    icon: GiCastle,
    description: "this property is in a castle",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "this property has Camping activities",
  },
  {
    label: "Arctic",
    icon: BsSnow,
    description: "this property has Camping activities",
  },
  {
    label: "Cave",
    icon: GiCaveEntrance,
    description: "this property has Camping activities",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "this property has Camping activities",
  },
  {
    label: "Barns",
    icon: GiBarn,
    description: "this property has Camping activities",
  },
  {
    label: "Lux",
    icon: IoDiamond,
    description: "this property has Camping activities",
  },
];

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathName = usePathname();

  const isMainPage = pathName === "/";

  if (!isMainPage) {
    return null;
  }
  return (
    <Container>
      <div className="pt-4 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((cat) => (
          <CategoryBox
            key={cat.label}
            label={cat.label}
            selected={category === cat.label}
            icon={cat.icon}
          />
        ))}
      </div>
    </Container>
  );
};

export default Categories;
