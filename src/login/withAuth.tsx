// import { useEffect, useState } from 'react';

// export default function withAuth(PageComponent: any) {
//   return function WithAuth() {
//     let [isAuthenticated, setIsAuthenticated] = useState(false);
//     useEffect(() => {
//       setIsAuthenticated(localStorage.getItem('isAuthenticated') === 'true' ? true : false);
//     }, [setIsAuthenticated]);

//     return <PageComponent isAuthenticated={isAuthenticated} />;
//   };
// }
