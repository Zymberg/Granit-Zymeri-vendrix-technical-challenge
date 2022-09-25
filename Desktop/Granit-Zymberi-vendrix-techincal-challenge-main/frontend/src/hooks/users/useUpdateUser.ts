import { useMutation, useQueryClient } from 'react-query';
// Schemas
import { UpdateUser } from '../../schemas/users';
// API
import updateUser from '../../api/users/updateUser';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ******** Define Configuration ******** //
const {
  users: {
    update: { mutationOptions },
  },
} = VENDRIX_API;

// ---------------------------------------------------------------------------

// ***** Define react-query Hook ***** //
/**
 *
 * @docs  https://tanstack.com/query/v4/docs/reference/useMutation
 */
export default function useUpdateUser(userId: string) {
  const queryClient = useQueryClient();

  return useMutation(
    (values: UpdateUser) => updateUser(userId, values),
    mutationOptions(queryClient)
  );
}
