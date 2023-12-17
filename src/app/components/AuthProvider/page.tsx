import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../../../api/firebase'


// export function AuthProvider(initialUser) {
//   const [user, setUser] = useState(initialUser);
//   const router = useRouter();
//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth => {
//       setUser(auth);
//     });
//     return () => {
//       unsubscribe();
//     };
//   }, []);
//   useEffect(() => { onAuthStateChanged(auth => {
//     if (user === undefined) return;
//     if (user?.email !== authUser?.email) {
//       router.refresh();
//     }
//       });
//   }, [user]);
//   return user;
// }
