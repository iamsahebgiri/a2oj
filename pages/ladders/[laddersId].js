import { useRouter } from "next/router";
import Container from "../../components/Container";
import Heading from "../../components/Heading";
import ladders from "../../data/ladders.json";
import useLocalStorage from "../../hooks/useLocalStorage";
import useUser from "../../hooks/useUser";

function Table({ problemSet }) {
  return (
    <div>
      <table className="mx-auto max-w-2xl w-full rounded-none sm:rounded-md bg-white dark:bg-gray-700 shadow divide-y divide-gray-200 dark:divide-gray-600 overflow-hidden">
        <thead className="bg-gray-100 dark:bg-gray-600">
          <tr className="text-gray-600 dark:text-gray-200 text-left font-semibold text-sm uppercase">
            <th className="py-4 px-5">Serial</th>
            <th className="py-4 px-5">Problem</th>
            <th className="py-4 px-5">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
          {problemSet.map((problem) => {
            return (
              <tr key={problem[0]}>
                <td className="px-6 py-3 font-medium text-gray-900 dark:text-gray-200">
                  {problem[0]}
                </td>
                <td className="py-3 px-2 text-gray-900 dark:text-gray-200">
                  <a
                    href={`https://codeforces.com/problemset/problem/${problem[2]}/${problem[3]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-800 dark:hover:text-purple-300 focus:ring-2 dark:focus-within:ring-offset-gray-700 focus:outline-none rounded px-1 focus-visible:ring-purple-500 focus:ring-offset-2"
                  >
                    {problem[1]}
                  </a>
                </td>
                <td className="px-2 py-3">
                  {problem[4] ? (
                    <span className="text-green-800 bg-green-200 py-1 px-3 font-medium rounded-full">
                      Solved
                    </span>
                  ) : (
                    <span className="text-red-800 bg-red-200 py-1 px-3 font-medium rounded-full">
                      Unolved
                    </span>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

const LaddersPage = () => {
  const router = useRouter();
  const [handle] = useLocalStorage("handle");
  const { user: submissions, isLoading } = useUser(handle);

  let localProblemSet = [];
  let solved = 0;

  if (isLoading) return "Loading...";

  if (!isLoading) {
    const { laddersId } = router.query;
    const allProblems = ladders[laddersId];
    for (let i = 0; i < allProblems.length; i++) {
      const problem = allProblems[i];
      let flag = false;
      for (let j = 0; j < submissions?.result.length; j++) {
        const submittedProblem = submissions?.result[j];
        if (
          submittedProblem.problem.contestId === parseInt(problem[2]) &&
          submittedProblem.problem.index === problem[3] &&
          submittedProblem.verdict === "OK"
        ) {
          flag = true;
          localProblemSet.push([...problem, true]);
          solved += 1;
          break;
        }
      }
      if (!flag) {
        localProblemSet.push([...problem, false]);
      }
    }
  }

  return (
    <Container>
      <section>
        <div className="pb-6 mx-auto">
          <Heading size="sm">Division 2 B</Heading>
          <span className="block text-center text-sm font-medium text-gray-700 dark:text-gray-200">
            {handle}
          </span>
          <span className="block mt-2 text-center font-medium text-gray-700 dark:text-gray-200">
            {solved} out of 100
          </span>
          <div className="mt-6 h-2 bg-gray-200 dark:bg-gray-600 container mx-auto sm:w-8/12 lg:w-6/12 rounded-none sm:rounded-full">
            <div
              style={{ width: `${solved}%` }}
              className="h-2 bg-green-500 rounded-none sm:rounded-full"
            ></div>
          </div>
        </div>
        <Table problemSet={localProblemSet} />
      </section>
    </Container>
  );
};

export default LaddersPage;
