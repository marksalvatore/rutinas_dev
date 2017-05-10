import React from 'react';
import PropTypes from 'prop-types';

import Drill from './Drill';
import DrillCategories from './DrillCategories';
import DrillListTitle from './DrillListTitle';
import Nav from './Nav';
import RoutineTitles from './RoutineTitles';

const NewRoutineRender = (props) => {

  if(props.routinesCount < 7) {
    // Don't allow more than 7 routines (one for each day of the week)

    return (
        <section className="NewRoutine">

          <Nav />

          <h2>New Routine</h2>

          <div className="controls">

            <RoutineTitles 
                routineTitle={props.routineTitle} 
                titlesForSelect={props.titlesForSelect} />

            <DrillCategories 
                categories={props.categories} 
                selectedCategory={props.selectedCategory} 
                updateCategory={props.updateCategory} />

          </div>

          <div className="wrapper">

            <ul className="frame dropShadow anim-slideUpExpand">
               { Object
                 .keys(props.drills)
                 .map(key => 
                   <Drill  
                     key={props.drills[key].id}
                     id={props.drills[key].id}

                     details={props.drills[key]}
                     isDrillSelected={props.isDrillSelected}
                     index={key}
                     selectedCategory={props.selectedCategory}
                     toggleSelectItem={props.toggleSelectItem}
                    />)
               }
             </ul>

             <ul className="frame-list">
                 <div className="frame-list-title">Selected Drills</div>
                 {props.selectedDrills.map( key => 
                     <DrillListTitle 
                       key={key.id}
                       id={key.id}
                       title={key.title}
                     />)
                 }
                 <div className="wrapper">
                   <button className="btn-primary" onClick={props.primaryAction}>Save Routine</button>
                 </div>
             </ul>
          </div>

        </section> 
    );


  } else {

    return (
       <section className="NewRoutine">

         <Nav />

         <h2>New Routine</h2>

         <div className="text-left">
           <p><strong className="color">Rutinas</strong> support 7 routines, one for each day of the week. If you'd like to change a routine, first go to the <strong>Routines</strong> tab to delete it, then click the <strong>New+</strong> tab again to create it.</p>
         </div>

      </section>   

    );
  }

  
}

NewRoutineRender.contextTypes = {
  router: React.PropTypes.object
}

NewRoutineRender.propTypes = {
  categories: PropTypes.array.isRequired,
  drills: PropTypes.array.isRequired,
  isDrillSelected: PropTypes.func.isRequired,
  primaryAction: PropTypes.func.isRequired,
  routinesCount: PropTypes.number.isRequired,
  selectedCategory: PropTypes.string.isRequired,
  selectedDrills: PropTypes.array.isRequired,
  titlesForSelect: PropTypes.array.isRequired,
  toggleSelectItem: PropTypes.func.isRequired,
  updateCategory: PropTypes.func.isRequired,
  updateRoutineTitle: PropTypes.func.isRequired
}

export default NewRoutineRender;
