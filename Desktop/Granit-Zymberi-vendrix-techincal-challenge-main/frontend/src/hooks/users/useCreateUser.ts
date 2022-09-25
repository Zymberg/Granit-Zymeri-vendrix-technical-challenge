import { useMutation, useQueryClient } from 'react-query';
// Schemas
import { CreateUser } from '../../schemas/users';
// API
import createUser from '../../api/users/createUser';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ******** Define Configuration ******** //
const {
  users: {
    create: { mutationOptions },
  },
} = VENDRIX_API;

// ---------------------------------------------------------------------------

// ***** Define react-query Hook ***** //
/**
 *
 * @docs  https://tanstack.com/query/v4/docs/reference/useMutation
 */
export default function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation(
    (values: CreateUser) => createUser(values),
    mutationOptions(queryClient)
  );
}
