import { HiXCircle } from "react-icons/hi";
import { useRouter } from "next/router";
import { useState } from "react";
import Container from "../components/Container";
import Header from "../components/Header";
import InputField from "../components/InputField";
import SelectField from "../components/SelectField";
import useLocalStorage from "../hooks/useLocalStorage";

const divisions = [
  { name: "Division 2 A", code: "div_2a" },
  { name: "Division 2 B", code: "div_2b" },
  { name: "Division 2 C", code: "div_2c" },
  { name: "Division 2 D", code: "div_2d" },
  { name: "Division 2 E", code: "div_2e" },
  { name: "Division 1 D", code: "div_1d" },
  { name: "Division 1 E", code: "div_1e" },
];

const ratings = [
  { name: "Codeforces Rating < 1300", code: "rating_1" },
  { name: "1300 <= Codeforces Rating <= 1399", code: "rating_2" },
  { name: "1400 <= Codeforces Rating <= 1499", code: "rating_3" },
  { name: "1500 <= Codeforces Rating <= 1599", code: "rating_4" },
  { name: "1600 <= Codeforces Rating <= 1699", code: "rating_5" },
  { name: "1700 <= Codeforces Rating <= 1799", code: "rating_6" },
  { name: "1800 <= Codeforces Rating <= 1899", code: "rating_7" },
  { name: "1900 <= Codeforces Rating <= 1999", code: "rating_8" },
  { name: "2000 <= Codeforces Rating <= 2099", code: "rating_9" },
  { name: "2100 <= Codeforces Rating <= 2199", code: "rating_10" },
  { name: "Codeforces Rating >= 2200", code: "rating_11" },
];

const laddersType = [{ name: "Division" }, { name: "Rating" }];

function IndexPage() {
  const [handle, setHandle] = useLocalStorage("handle", "");
  const [selectedLadder, setSelectedLadder] = useState(laddersType[0]);
  const [selectedDivision, setSelectedDivision] = useState(divisions[0]);
  const [selectedRating, setSelectedRating] = useState(ratings[0]);

  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const router = useRouter();

  const onSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    let ladder =
      selectedLadder.name === "Division"
        ? selectedDivision.code
        : selectedRating.code;

    fetch(`https://codeforces.com/api/user.info?handles=${handle}`)
      .then((res) => res.json())
      .then((res) => {
        if (res.status === "OK") {
          router.push(`ladders/${ladder}`);
        }

        if (res.status === "FAILED") {
          setError(res.comment);
        }
      })
      .catch((err) => {
        setError(err.response);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <Container>
      <Header />
      <main className="py-8">
        <div className="bg-white dark:bg-gray-700 shadow h-auto px-6 py-8 container mx-auto sm:w-8/12 lg:w-6/12 rounded-none sm:rounded-md">
          {error !== null ? (
            <div className="px-4 py-3 bg-red-200 mb-4 rounded-md">
              <div className="flex items-center">
                <HiXCircle className="h-5 w-5 text-red-500 mr-2" />
                <p className="font-medium text-red-800">
                  Something went wrong!
                </p>
              </div>
              <p className="text-sm ml-7 text-red-700">{error}</p>
            </div>
          ) : null}
          <form onSubmit={onSubmit}>
            <div className="space-y-3">
              <InputField
                value={handle}
                onChange={(e) => setHandle(e.target.value)}
              />
              <SelectField
                label="Ladders type"
                data={laddersType}
                selected={selectedLadder}
                setSelected={setSelectedLadder}
              />
              {selectedLadder?.name === "Division" ? (
                <SelectField
                  label="By division"
                  data={divisions}
                  selected={selectedDivision}
                  setSelected={setSelectedDivision}
                />
              ) : (
                <SelectField
                  label="By rating"
                  data={ratings}
                  selected={selectedRating}
                  setSelected={setSelectedRating}
                />
              )}
            </div>

            <div className="mt-6">
              <button
                type="submit"
                className="w-full focus:outline-none sm:w-auto inline-flex items-center justify-center text-white font-medium leading-none bg-purple-600 dark:bg-purple-500 active:bg-purple-700 focus-visible:ring-2 focus-visible:ring-purple-500 dark:focus-within:ring-offset-gray-800 focus:ring-offset-2 rounded-lg shadow-sm hover:shadow-lg py-3 px-5 border border-transparent"
              >
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Loading
                  </>
                ) : (
                  "View ladder"
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </Container>
  );
}

export default IndexPage;
