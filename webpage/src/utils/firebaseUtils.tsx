
import {

	signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '../config/firebase.config';

// Login the user
const logIn = (email: string, password: string) => {
	return signInWithEmailAndPassword(auth, email, password);
};

export default logIn;