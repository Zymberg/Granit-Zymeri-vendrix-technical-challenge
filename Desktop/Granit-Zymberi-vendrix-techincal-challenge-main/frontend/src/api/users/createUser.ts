// Schemas
import { IVendrixResponseBody } from '../../schemas/api';
import { CreateUser, User } from '../../schemas/users';
// API
import FetchClient from '../FetchClient';
// Config
import { VENDRIX_API } from '../../config';
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------

// ******** Define Configuration ******** //
const {
  users: {
    create: { uri, defaultFetchOptions },
  },
} = VENDRIX_API;

type DataReturned = IVendrixResponseBody<User>;

// ---------------------------------------------------------------------------

// ***** Define API ***** //
export default function createUser(data: CreateUser) {
  return FetchClient(uri(), {
    ...defaultFetchOptions,
    data,
  }).then((r) =>{
    console.log("sentData" + data.name.familyName)
    r.data as DataReturned
  } );
}
