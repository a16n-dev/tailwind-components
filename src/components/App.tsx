import mixpanel from 'mixpanel-browser';
import React, { useState } from 'react';
import { FiGrid, FiHome } from 'react-icons/fi';
import { Link, Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Badge from './atom/Badge';
import Navbar from './atom/Navbar';
import Page from './atom/Page';
import Sidebar from './atom/Sidebar';

// Register analytics
const token = process.env.REACT_APP_MIXPANEL_TOKEN;
if (token) {
  mixpanel.init(token);
}

const App = () => (
    <div className={'flex flex-col font-sans'}>
      {/* <Banner gradient>This is an important message!</Banner> */}
      <div className={'flex'}>
        <Sidebar>
          <Sidebar.Header>General Stuff</Sidebar.Header>
          <Sidebar.Item icon={FiHome}>Home<Badge variant={'success'} className={'text-xs mx-2'}>New</Badge></Sidebar.Item>
          <Sidebar.Dropdown title={'Components'} icon={FiGrid}>
            <Sidebar.DropdownItem>Buttons</Sidebar.DropdownItem>
            <Sidebar.DropdownItem>Cards</Sidebar.DropdownItem>
            <Sidebar.DropdownItem>Alerts</Sidebar.DropdownItem>
          </Sidebar.Dropdown>
        </Sidebar>
        <Page>
          <Navbar noBg>Very Cool</Navbar>
          <Switch>
            <Route path='/' component={Home}></Route>
          </Switch>
        </Page>
      </div>
    </div>
  );

export default App;
