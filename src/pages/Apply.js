import React from 'react';
import './Apply.css';
import NavigationBar from '../components/NavigationBar'
import Footer from '../components/Footer';
import JobOpenings from '../components/JobOpenings';
import JobOpeningsHeader from '../components/JobOpeningsHeader';

export default function Apply() {
  return (
    <div className="Apply">
      <NavigationBar/>
      <JobOpeningsHeader/>
      <JobOpenings/>
      <Footer/>
    </div>
  );
}
