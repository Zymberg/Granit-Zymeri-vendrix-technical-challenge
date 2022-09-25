import { useQuery } from 'react-query';
// API
import getAllUsers from '../../api/users/getAllUsers';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ***** Define Configuration ***** //
const {
  users: {
    getAll: { queryKey, queryOptions },
  },
} = VENDRIX_API;

// --------------------------------------------------------------

// ***** Define react-query Hook ***** //
/**
 *
 * @docs  https://tanstack.com/query/v4/docs/reference/useQuery
 */
export default function useGetAllUsers() {
  return useQuery(queryKey(), () => getAllUsers(), queryOptions);
}
