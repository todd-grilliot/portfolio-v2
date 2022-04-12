import React from 'react'
import Header from '../components/Header'
import { useLocation, matchPath } from 'react-router-dom';
import { projectObj } from '../libraries/projectObj';
import PropTypes from "prop-types";

const ProjectPage = () => {
  //if our url matches one of the ids in the projectObj, then render that one... react router match... somehting something...
  // const projects = useLocation().state.projectObj;
  // console.log(projects);
  console.log(useLocation().pathname);
  return (
    <div>
      <Header />
      ProjectPage
      </div>
  )
}
ProjectPage.propTypes = {
  location: PropTypes.any,
  match: PropTypes.any,
  history: PropTypes.any,
}
export default ProjectPage