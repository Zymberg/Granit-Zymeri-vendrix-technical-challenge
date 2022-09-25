// Schemas
import { IVendrixResponseBody } from '../../schemas/api';
import { User } from '../../schemas/users';
// API
import FetchClient from '../FetchClient';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ******** Define Configuration ******** //
const {
  users: {
    getAll: { uri, defaultFetchOptions },
  },
} = VENDRIX_API;

type DataReturned = IVendrixResponseBody<User[]>;

// ---------------------------------------------------------------------------

// ***** Define API ***** //
export default function getAllUsers() {
  return FetchClient(uri(), {
    ...defaultFetchOptions,
  }).then((r) => r.data as DataReturned);
}
