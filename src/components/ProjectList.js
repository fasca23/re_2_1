import React from 'react';
import PropTypes from 'prop-types';

function ProjectList({projects}) {
  // Разбиваем на три колонки
  // Округляем до большего целого
  const l = Math.ceil(projects.length/3);
  const one = projects.filter((item, index) => index < l);
  const two = projects.filter((item, index) => index >= l && index < 2*l - 1);
  const three =  projects.filter((item, index) => index >= 2*l - 1);
  return (
    <div className="img-content">
      <div className="columns">
        {one.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
      <div className="columns">
        {two.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
      <div className="columns">
        {three.map((item, index) => <div key={index} className="img-container"><img src={item.img} alt="" className="image"></img></div>)}
      </div>
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array.isRequired
}
  
export default ProjectList;