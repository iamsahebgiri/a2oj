import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function useUser(handle) {
  const { data, error } = useSWR(
    `https://codeforces.com/api/user.status?handle=${handle}`,
    fetcher
  );

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useUser;
