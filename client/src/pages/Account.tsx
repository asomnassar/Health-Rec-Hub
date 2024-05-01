import { Box } from "@mui/material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import LoadingProfileAvatar from "../components/ProfileAvatar/LoadingProfileAvatar";
import ProfileAvatar from "../components/ProfileAvatar/ProfileAvatar";
import LoadingProfileDataBox from "../components/ProfileDataBox/LoadingProfileDataBox";
import ProfileDataBox from "../components/ProfileDataBox/ProfileDataBox";
import { PrimaryBox } from "../mui/PrimaryBox";
import { PrimaryContainer } from "../mui/PrimaryContiner";
import { getAccount } from "../store/accountSlice";
import { AppDispatch, RootState } from "../store/store";

const Account = () => {
  const { account, isLoading } = useSelector(
    (state: RootState) => state.account
  );
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getAccount({ id }));
  }, [dispatch, id]);

  return !isLoading && account ? (
    <PrimaryBox>
      <PrimaryContainer
        className={`!grid grid-cols-[auto,1fr] justify-stretch items-start gap-8`}
      >
        <ProfileAvatar avatar={account.avatar} username={account.username} />
        <Box className={`grid justify-stretch items-center gap-4`}>
          <ProfileDataBox data={account} />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  ) : (
    <PrimaryBox>
      <PrimaryContainer
        className={`!grid grid-cols-[auto,1fr] justify-stretch items-start gap-8`}
      >
        <LoadingProfileAvatar />
        <Box className={`grid justify-stretch items-center gap-4`}>
          <LoadingProfileDataBox />
        </Box>
      </PrimaryContainer>
    </PrimaryBox>
  );
};

export default Account;
