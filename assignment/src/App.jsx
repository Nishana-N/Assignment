import React from 'react';
import { useSelector } from 'react-redux';
import Category from './components/Category';
import AddWidgetForm from './components/AddWidgetForm';
import './App.css'

function App() {
  const categories = useSelector(state => state.categories);

  return (
    <>

<div>
      <h1>Dashboard</h1>
      {categories.map(category => (
        <div key={category.name}>
          <Category category={category} />
          <AddWidgetForm categoryName={category.name} />
        </div>
      ))}
    </div>
      
    </>
  )
}

export default App
