import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Auth } from "aws-amplify";
//import aws_exports from "./oAuth";
import { Button, Heading, Flex, View } from "@aws-amplify/ui-react";
import MyTickets from './MyTickets';

//Auth.configure(aws_exports);

const Home = () => <Heading level={3}>This is Home</Heading>;
const Profile = () => <Heading level={3}>This is Profile</Heading>;
//const MyTickets = () => <Heading level={3}>This is My Tickets</Heading>;
const MyAssets = () => <Heading level={3}>This is My Assets</Heading>;

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .then((userData) => setUser(userData))
      .catch((err) => console.log(err));
  }, []);

  const signOut = () => {
    Auth.signOut()
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  return user ? (
    <Router>
      <Flex direction="column" align="center" gap="1rem">
        <View padding="1rem" border="1px solid" borderColor="var(--amplify-colors-brand-primary)">
          <Heading level={4}>LE COMPTE METALIVE</Heading>
        </View>
        <Flex direction="row" justify="around" gap="1rem">
          <Link to="/" style={{ marginRight: '20px' }}>Home</Link>
          <Link to="/profile" style={{ marginRight: '20px' }}>Mes informations personelles</Link>
          <Link to="/tickets" style={{ marginRight: '20px' }}>Mes Billets</Link>
          <Link to="/assets" style={{ marginRight: '20px' }}>Mes Fichiers</Link>
          <Button onClick={signOut}>Sign Out</Button>
        </Flex>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/tickets" element={<MyTickets />} />
          <Route path="/assets" element={<MyAssets />} />
        </Routes>
      </Flex>
    </Router>
  ) : (
    <Flex direction="column" align="center" gap="1rem">
      <img src="logo.png" alt="logo" style={{ width: '150px', marginTop: '50px' }}/>
      <Heading level={3}>Welcome to our application!</Heading>
      <Button onClick={() => Auth.federatedSignIn()}>Sign In</Button>
    </Flex>
  );
};

export default App;
