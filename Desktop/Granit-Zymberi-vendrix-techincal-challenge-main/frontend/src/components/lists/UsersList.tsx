import { styled } from '@mui/system';
// Types/Interfaces
import { User } from '../../schemas/users';
// Components
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  List,
  ListItem,
  Typography,
} from '@mui/material';
// --------------------------------------------------------------
// --------------------------------------------------------------

/**
 * ! !!!!!!! ATTENTION !!!!!!!!
 * The below list is in a base state.
 * Your task is to improve the UX/UI to the best of your ability.
 *
 * TODO: Style/rearrange the list to maximize UI/UX
 *
 * ! !!!!!!!!!!!!!!!!!!!!!!!!!!
 */

// ***** Define styles ***** //
const ListItemRootStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  borderRadius: 0,
  borderColor: theme.palette.common.black,
}));

// ----------------------------------------------------------------

// ***** Define List Item ***** //
interface UsersListItemProps {
  user: User;
}
function UsersListItem({ user }: UsersListItemProps) {
  return (
    <ListItemRootStyle>
      <CardContent>
        <Grid
          container
          key={user._id}
          spacing={2}
          justifyContent='center'
          alignItems='center'
        >
          {/* Given Name */}
          <Grid item lg={3}>
            <Typography>{user.name?.givenName}</Typography>
          </Grid>

          {/* Family Name */}
          <Grid item lg={3}>
            <Typography>{user.name?.familyName}</Typography>
          </Grid>

          {/* Role */}
          <Grid item lg={3}>
            <Typography>{user.role}</Typography>
          </Grid>

          {/* Email */}
          <Grid item lg={3}>
            <Typography>{user.email}</Typography>
          </Grid>
        </Grid>
      </CardContent>
    </ListItemRootStyle>
  );
}

// ----------------------------------------------------------------
// ----------------------------------------------------------------

// ***** Define styles ***** //
const ListRootStyle = styled(List)(({ theme }) => ({
  width: '100%',
  bgcolor: 'background.paper',
  position: 'relative',
  '& ul': { padding: 0 },
}));

// ----------------------------------------------------------------

interface UsersListProps {
  users: User[];
}

export default function UsersList({ users }: UsersListProps) {
  return (
    <Box>
      <Container sx={{ p: 1 }}>
        <Typography variant='h4'>Users</Typography>
      </Container>

      {users.length ? (
        <ListRootStyle>
          {users.map((user) => (
            <ListItem key={user._id} children={<UsersListItem user={user} />} />
          ))}
        </ListRootStyle>
      ) : (
        <Typography>{'No users'}</Typography>
      )}
    </Box>
  );
}
