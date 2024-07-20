import { Card, CardBody, Skeleton, SkeletonText } from "@chakra-ui/react";

const SkeletonLoader = () => {
  return (
    <Card>
      <Skeleton height={300} />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  );
};

export default SkeletonLoader;
