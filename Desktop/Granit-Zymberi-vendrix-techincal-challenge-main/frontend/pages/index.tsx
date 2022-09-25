import type { GetServerSideProps, NextPage } from 'next';
import Image from 'next/image';
import { dehydrate, QueryClient } from 'react-query';
// API
import getAllUsersAPI from '../src/api/users/getAllUsers';
// Hooks
import useGetAllUsers from '../src/hooks/users/useGetAllUsers';
// Assets
import logo from '../public/logos/logo_single.png';
// Components
import {
  Container,
  Typography,
  Stack,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import UserCreateUpdateForm from '../src/components/forms/UserCreateUpdateForm';
import UsersList from '../src/components/lists/UsersList';
// Config
import { VENDRIX_API } from '../src/config';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

const {
  users: { getAll },
} = VENDRIX_API;

// ----------------------------------------------------------------------

// ***** Prefetch data to page ***** //
// * Server Side Rendering * //
export const getServerSideProps: GetServerSideProps = async () => {
  // Init React query

  const queryClient = new QueryClient();

  // Prefetch data
  
  await queryClient.prefetchQuery(getAll.queryKey(), () => getAllUsersAPI());

  // Return hydrated query as props
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

const Home: NextPage = () => {
  // HOOKS

  const allUsersQuery = useGetAllUsers();
  console.log("USers: " + allUsersQuery.data?.data)

  return (
    <Container maxWidth='lg'>
      <Stack spacing={4} sx={{ m: 2 }}>
        <Card
          elevation={24}
          sx={{ background: (theme) => theme.palette.primary.lightest, p: 3 }}
        >
          <Stack direction='row' justifyContent='center'>
            <Typography variant='h3' sx={{ pr: 4 }}>
              Vendrix Technical Challenge - Frontend
            </Typography>
            <Image src={logo} alt='Vendrix logo' width={50} height={50} />
          </Stack>
        </Card>

        <Divider />

        {/* FORM */}
        <Card
          elevation={10}
          sx={{ background: (theme) => theme.palette.background.neutral }}
        >
          <CardContent>
            <UserCreateUpdateForm />
          </CardContent>
        </Card>

        <Divider />

        {/* USERS LIST */}
        <Card
          elevation={10}
          sx={{ background: (theme) => theme.palette.background.neutral }}
        >
          <CardContent>
            
            {allUsersQuery?.data?.data ? (
              <UsersList users={allUsersQuery.data.data} />
            ) : null}
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
};

export default Home;
