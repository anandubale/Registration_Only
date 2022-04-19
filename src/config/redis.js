import { createClient } from 'redis';

export const client = createClient();  //to create client at server 

const clientRedis = async () => {

  try { 
    
    await client.connect();
    console.log("Redis is connected");
  } catch (error) {
    console.log(error);
  }
 
}
export default clientRedis;

