import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Forms from "../forms/Forms";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { AppDispatch, RootState } from "../store/store";
import { getTestResults } from "../store/testResultsSlice";
import TestResultsTable from "../tables/TestResults/TestResultsTable";

const TestResults = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { testResults, isLoading } = useSelector(
    (state: RootState) => state.testResults
  );

  console.log(testResults);

  useEffect(() => {
    dispatch(getTestResults({ page: 1 }));
  }, [dispatch]);
  return (
    <PrimaryBox>
      <PrimaryContainer className="!grid justify-stretch items-center gap-4">
        <Forms type={"searchForPrescriptions"} />
        <TestResultsTable data={testResults} isLoading={isLoading} />
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default TestResults;
