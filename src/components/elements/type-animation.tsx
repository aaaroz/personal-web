import * as React from "react";
import { TypeAnimation as TypeAnimationComponent } from "react-type-animation";
import { Skeleton } from "../ui/skeleton";

interface TypeAnimationProps {
  sequence: string[];
  delay?: number;
}
export const TypeAnimation = ({
  sequence,
  delay = 1000,
}: TypeAnimationProps): React.ReactElement => {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const modifiedSequence: (string | number)[] = [];

  sequence.forEach((item, index) => {
    modifiedSequence.push(item);

    if (index < sequence.length) {
      modifiedSequence.push(delay);
    }
  });

  if (!isMounted)
    return <Skeleton className="w-40 text-transparent text-2xl">0</Skeleton>;
  return (
    <TypeAnimationComponent
      sequence={modifiedSequence}
      speed={10}
      deletionSpeed={70}
      repeat={Infinity}
      aria-label={sequence[0]}
    />
  );
};
