import * as jwt from 'jsonwebtoken';
import { serialize } from 'cookie';

const secretKey = process.env.JWT_SECRET || 'your-very-secure-secret'; // Use a strong, environment-specific secret

export const signToken = async ({name,email,id}:any)=>{
    const token = jwt.sign({
		exp: Math.floor(Date.now()/1000) + 60 *60 *24 * 7,
		name:name,
        id:id,
		email:email,
	}, secretKey) 
	
    const serializedToken = serialize('jwtAuthToken', token, {
		httpOnly: true,
		secure: process.env.NODE_ENV === 'production',
		sameSite:'strict', //va otra si es backend externo,
		maxAge: 1000 * 60 * 60 *24 * 30,
		path:'/'
		 
	})
    
	return serializedToken
	
}
