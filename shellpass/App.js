import React, { useState } from 'react';
import Router from './src/routes/Router';
import Navigation from './src/auth/navigation';

export default function App() {
   const [user, setUser] = useState();

return !user? <Navigation setUser={setUser} /> : <Router />
};



