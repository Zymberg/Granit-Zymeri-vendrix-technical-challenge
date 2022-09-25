// Schemas
import { QueryClient } from 'react-query';
import { User } from './schemas/users';
// ----------------------------------------------------------------------
// ----------------------------------------------------------------------

/**
 * @docs  "react-query" query options: https://tanstack.com/query/v4/docs/reference/useQuery?from=reactQueryV3&original=https://react-query-v3.tanstack.com/reference/useQuery#:~:text=applies%20linear%20backoff.-,staleTime,-%3A%20number%20%7C%20Infinity
 * @docs  "react-query" mutation options: https://tanstack.com/query/v4/docs/reference/useMutation#:~:text=for%20more%20information.-,onMutate,-%3A%20(variables%3A%20TVariables)%20%3D%3E%20Promise
 */
export const VENDRIX_API = {
  users: {
    // Queries
    getAll: {
      uri: () => `http://localhost:8085/api/users` as const,
      defaultFetchOptions: { method: 'GET' as const },

      queryKey: () => `users` as const,
      queryOptions: {
        staleTime: 60000, // 1 minute
        refetchInterval: 120000, // 2 minutes
        refetchIntervalInBackground: true,
      },
    },

    // Mutations
    create: {
      uri: () => `http://localhost:8085/api/users` as const,
      defaultFetchOptions: { method: 'POST' as const },

      mutationOptions: <TData extends User>(queryClient: QueryClient) => ({
        onMutate: async (newData: TData) => {
          console.log('React query "onMutate" callback', { newData });
        },
        onError: (error: Error, _variables: TData, rollback: any) => {
          if (rollback) {
            rollback();
          }
        },
        onSettled: () => {
          queryClient.refetchQueries(VENDRIX_API.users.getAll.queryKey());
          console.log('Successfully created user');
        },
      }),
    },

    update: {
      uri: (id: string) => `api/users/${id}` as const,
      defaultFetchOptions: { method: 'PATCH' as const },

      mutationOptions: <TData extends Partial<User>>(
        queryClient: QueryClient
      ) => ({
        onMutate: async (newData: TData) => {
          console.log('React query "onMutate" callback', { newData });
        },
        onError: (error: Error, _variables: TData, rollback: any) => {
          if (rollback) {
            rollback();
          }
        },
        onSettled: () => {
          queryClient.refetchQueries(VENDRIX_API.users.getAll.queryKey());
          console.log('Successfully created user');
        },
      }),
    },
  },
};
