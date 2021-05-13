import Container from "./Container";

const LoadingSkeleton = () => {
  return (
    <Container>
      <div className="h-auto px-6 py-8 container mx-auto sm:w-8/12 lg:w-6/12 rounded-none sm:rounded-md">
        <div className="animate-pulse space-y-4">
          <div className="h-12 bg-gray-300 dark:bg-gray-600 w-1/2 mx-auto rounded-md" />
          <div className="h-6 bg-gray-300 dark:bg-gray-600 w-1/3 mx-auto rounded-md" />
          <div className="h-6 bg-gray-300 dark:bg-gray-600 w-1/3 mx-auto rounded-md" />
          <div className="h-6 bg-gray-300 dark:bg-gray-600 mx-auto rounded-md" />
        </div>
      </div>
    </Container>
  );
};

export default LoadingSkeleton;
