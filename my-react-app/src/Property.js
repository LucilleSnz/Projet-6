import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import data from '../src/data/logements.json';
import Slideshow from './components/Slideshow';

const Property = () => {
  const { id } = useParams();
  const property = data.find(p => p.id === id);

  if (!property) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div>
      <Slideshow property={property}/>
    </div>
  );
};

export default Property;