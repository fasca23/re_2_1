import React, {useState} from 'react';
import PropTypes from 'prop-types';

import Toolbar from './Toolbar';
import ProjectList from './ProjectList';

function Portfolio({filters, projects}) {
    // объявляем переменную состояния useState - перерисовка
  const [filter, setFilter] = useState('All');
  
  let images = null;

  if (filter === 'All') {
    images = projects;
  } else {
    images = projects.filter((image) => image.category === filter);
  }

  return (
    <div className="main-content">
      <Toolbar filters={filters} 
               selected={filter}
               onSelectFilter={(filter) => setFilter(filter.target.innerText)}/>
      <ProjectList projects={images}/>
    </div>
  );
}

Portfolio.propTypes = {
  filters: PropTypes.array.isRequired,
  projects:  PropTypes.array.isRequired,
}
  
export default Portfolio;