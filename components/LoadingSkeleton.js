import Container from './Container';

const LoadingSkeleton = () => {
  return (
    <Container>

      <section>
        <div className="bg-white dark:bg-gray-700 p-6 mx-auto max-w-2xl mb-4 rounded-none sm:rounded-md shadow-sm">
          <div className="animate-pulse px-6 py-5 container mx-auto bg-gray-200 dark:bg-gray-600  max-w-2xl rounded-none sm:rounded-md"></div>
          <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-600 container rounded-none sm:rounded-full"></div>
        </div>
      </section>
      <section>
        <div>
          <table className="mx-auto max-w-2xl w-full rounded-none sm:rounded-md bg-white dark:bg-gray-700 shadow-sm divide-y divide-gray-200 dark:divide-gray-600 overflow-hidden table-auto">
            <thead className="bg-gray-100 dark:bg-gray-600">
              <tr className="text-gray-600 dark:text-gray-200 text-left font-semibold text-sm uppercase">
                <th className="py-4 px-5">
                  <div className="animate-pulse px-2 py-2 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </th>
                <th className="py-4 px-5">
                  <div className="animate-pulse px-2 py-2 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </th>
                <th className="py-4 px-5">
                  <div className="animate-pulse px-2 py-2 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 dark:divide-gray-600">
              <tr>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
              </tr>
              <tr>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
                <td className="py-4 px-5">
                  <div className="animate-pulse px-2 py-1 bg-gray-300 dark:bg-gray-600 sm:rounded-md"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </Container>
  );
};

export default LoadingSkeleton;
