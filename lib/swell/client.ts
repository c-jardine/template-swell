import * as client from 'swell-js';

const STORE_ID = process.env.NEXT_PUBLIC_SWELL_STORE_ID as string;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_SWELL_PUBLIC_KEY as string;

client.init(STORE_ID, PUBLIC_KEY, { useCamelCase: true });

export default client;
