import { useRouter } from 'next/router';
import Container from '../../components/Container';
import LoadingSkeleton from '../../components/LoadingSkeleton';
import ladders from '../../data/ladders.json';
import useLocalStorage from '../../hooks/useLocalStorage';
import useUser from '../../hooks/useUser';

function Table({ problemSet }) {
  return (
    <div>
      <table className="mx-auto max-w-2xl w-full rounded-none sm:rounded-md bg-white dark:bg-gray-700 shadow-sm divide-y divide-gray-200 dark:divide-gray-600 overflow-hidden table-auto">
        <thead className="bg-gray-100 dark:bg-gray-600">
          <tr className="text-gray-600 dark:text-gray-200 text-left font-semibold text-sm uppercase">
            <th className="py-4 px-5">Serial</th>
            <th className="py-4 px-5">Problem</th>
            <th className="py-4 px-5">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 dark:divide-gray-600">
          {problemSet.map((problem) => {
            return (
              <tr key={problem[0]}>
                <td className="py-4 px-5 font-medium text-gray-900 dark:text-gray-200">
                  {problem[0]}
                </td>
                <td className="py-4 px-5 text-gray-900 dark:text-gray-200">
                  <a
                    href={`https://codeforces.com/problemset/problem/${problem[2]}/${problem[3]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:ring-2 hover:ring-purple-500 dark:hover:ring-offset-transparent focus:ring-2 focus:outline-none rounded px-1 focus:ring-purple-500"
                  >
                    {problem[1]}
                  </a>
                </td>
                <td className="py-4 px-5">
                  {problem[4] ? (
                    <span className="text-green-800 bg-green-200 py-1 px-3 font-medium text-sm rounded-full">
                      Solved
                    </span>
                  ) : (
                    <span className="text-red-800 bg-red-200 py-1 px-3 font-medium text-sm  rounded-full">
                      Unsolved
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
  const [handle] = useLocalStorage('handle');
  const [laddersName] = useLocalStorage('laddersName');
  const [user] = useLocalStorage('user');
  const { user: submissions, isLoading } = useUser(handle);
  const { laddersId } = router.query;

  let localProblemSet = [];
  let solved = 0;

  if (isLoading) return <LoadingSkeleton />;

  if (!isLoading) {
    const allProblems = ladders[laddersId];
    for (let i = 0; i < allProblems.length; i++) {
      const problem = allProblems[i];
      let flag = false;
      for (let j = 0; j < submissions?.result.length; j++) {
        const submittedProblem = submissions?.result[j];
        if (
          submittedProblem.problem.contestId === parseInt(problem[2]) &&
          submittedProblem.problem.index === problem[3] &&
          submittedProblem.verdict === 'OK'
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
        <div className="bg-white dark:bg-gray-700 p-6 mx-auto max-w-2xl mb-4 rounded-none sm:rounded-md shadow-sm">
          <div className="flex justify-between">
          <h2 className="font-semibold text-xl text-gray-700 dark:text-gray-100">{laddersName} ({solved})</h2>
            <span className="block font-medium text-gray-600 dark:text-gray-200">
              {handle}
            </span>
          </div>
          <div className="mt-4 h-1 bg-gray-200 dark:bg-gray-600 container rounded-none sm:rounded-full">
            <div
              style={{ width: `${solved}%` }}
              className="h-1 bg-purple-500 rounded-none sm:rounded-full"
            ></div>
          </div>
        </div>
        <Table problemSet={localProblemSet} />
      </section>
    </Container>
  );
};

export default LaddersPage;
