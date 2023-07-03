"use client";

import { useRouter } from "next/navigation";
import Heading from "./Heading";
import Button from "./Button";

interface EmptyStatesProps {
  title?: string;
  subtitle?: string;
  showReset?: boolean;
}
const EmptyState: React.FC<EmptyStatesProps> = ({
  title = "No Exact Mathches",
  subtitle = "Try Changing Or Removing one of your Filters",
  showReset,
}) => {
  const router = useRouter();
  return (
    <div className="h-[59vh] flex flex-col gap-2 justify-center items-center">
      <Heading center title={title} subtitle={subtitle} />
      <div className="w-48 mt-4">
        {showReset && (
          <Button
            outline
            label="Remove All Filters"
            onClick={() => router.push("/")}
          />
        )}
      </div>
    </div>
  );
};

export default EmptyState;
