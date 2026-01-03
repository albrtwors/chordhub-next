import * as z from 'zod'

export const signData = z.object(
   { name:z.string().min(7).max(12).regex(/^[A-Za-z]/),
     email:z.email(),
     password:z.string().min(7).max(12).regex(/^[A-Za-z]/),

   }

)