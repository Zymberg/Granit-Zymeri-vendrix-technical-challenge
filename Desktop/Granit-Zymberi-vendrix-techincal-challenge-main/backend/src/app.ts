import { GraphQLClient, gql } from 'graphql-request'
import { valueToString } from './../node_modules/@sinonjs/commons/types/index.d';
import express, { NextFunction, Response, Request } from 'express';
import { createClient } from 'redis';


// -------------------------------------------------------------
// -------------------------------------------------------------
import dotenv from 'dotenv';

dotenv.config({ path: './.env' });
const app = express();
// eslint-disable-next-line @typescript-eslint/no-var-requires
const cors = require('cors')
app.use(express.json());
app.use(cors());
app.options('*', cors());
let redisClient: any;

(async () => {
  redisClient = createClient();

  redisClient.on('error', (error: unknown) =>
    console.error(`Error : ${error}`)
  );

  await redisClient.connect();
})();

app.use('/api/users', async (req: Request, res: Response, next: NextFunction) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
  res.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
  res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");


  if (req.method === 'OPTIONS') {
    return res.status(204).send('');
  } else if (req.method === 'GET') {
    const cacheResults = await redisClient.get('users');
    if (cacheResults) {
      console.log('cached users', { data: JSON.parse(cacheResults) });
      return res.status(200).json({
        data: JSON.parse(cacheResults),
      });
    } else {
      console.log('no cached users');
      return res.status(200).json({
        data: [],
      });
    }
  } else {

    const cacheResults = await redisClient.get('users');
    if (cacheResults) {
      await redisClient.set(
        'users',
        JSON.stringify([...JSON.parse(cacheResults), req.body])
      );
      const updatedData = await redisClient.get('users');

      console.log('updated cached users', { data: req.body });
      return res.status(200).json({
        data: JSON.parse(updatedData),
      });
    } else {
      await redisClient.set('users', JSON.stringify([req.body]));
      const updatedData = await redisClient.get('users');

      console.log('initiated users', { data: JSON.parse(updatedData) });
      return res.status(200).json({
        data: JSON.parse(updatedData),
      });
    }
  }
  next();
});
/**
 * Second Phase Stub Out
 *
 * TODO: implement endpoint
 */
// import test from './graphql/GetPaymentCardById.graphql';
app.use(
  '/cards/:cardId',
  async (req: Request, res: Response, next: NextFunction) => {
    const apiKey = process.env.API_KEY || ""
    if(req.method === "GET"){
      const url = req.protocol + '://' + req.get('host') + req.originalUrl;
      const queryParam = url.substring(url.lastIndexOf('/') + 1)
      const endpoint = 'https://api.us.test.highnoteplatform.com/graphql';
      const graphQLClient = new GraphQLClient(endpoint, {
        method: 'GET',
        jsonSerializer: {
          parse: JSON.parse,
          stringify: JSON.stringify,
        },
        headers: {
          authorization: 'Basic ' + Buffer.from(apiKey).toString('base64'),
        },
      })
      const variables = {
        "paymentCardId" : queryParam
      }
      const mutation = gql`
      query GetPaymetCardById($paymentCardId: ID!) {
        node(id: $paymentCardId) {
          ... on PaymentCard {
            id
            bin
            last4
            expirationDate
            network
            status
            formFactor
            restrictedDetails {
              ... on PaymentCardRestrictedDetails {
                number
                cvv
              }
              ... on AccessDeniedError {
                message
              }
            }
            physicalPaymentCardOrders {
              id
              paymentCardShipment {
                courier {
                  method
                  signatureRequiredOnDelivery
                  tracking {
                    trackingNumber
                    actualShipDateLocal
                  }
                }
                requestedShipDate
                deliveryDetails {
                  name {
                    middleName
                    givenName
                    familyName
                    suffix
                    title
                  }
                  companyName
                  address {
                    streetAddress
                    extendedAddress
                    postalCode
                    region
                    locality
                    countryCodeAlpha3
                  }
                }
                senderDetails {
                  name {
                    givenName
                    middleName
                    familyName
                    suffix
                    title
                  }
                  companyName
                  address {
                    streetAddress
                    extendedAddress
                    postalCode
                    region
                    locality
                    countryCodeAlpha3
                  }
                }
              }
              orderState {
                status
              }
              cardPersonalization {
                textLines {
                  line1
                  line2
                }
              }
              createdAt
              updatedAt
              stateHistory {
                previousStatus
                newStatus
                createdAt
              }
            }
          }
        }
      }
      
      `
      const response = await graphQLClient.request(mutation, variables)
      return res.status(200).json({
        data : response
      })
    }
    next(); 
  }
);

export default app;
