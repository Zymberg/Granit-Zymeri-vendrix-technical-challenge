// Schemas
import { IVendrixResponseBody } from '../../schemas/api';
import { UpdateUser, User } from '../../schemas/users';
// API
import FetchClient from '../FetchClient';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ******** Define Configuration ******** //
const {
  users: {
    update: { uri, defaultFetchOptions },
  },
} = VENDRIX_API;

type DataReturned = IVendrixResponseBody<User>;

// ---------------------------------------------------------------------------

// ***** Define API ***** //
export default function updateUser(id: string, data: UpdateUser) {
  return FetchClient(uri(id), {
    ...defaultFetchOptions,
    data,
  }).then((r) => r.data as DataReturned);
}
