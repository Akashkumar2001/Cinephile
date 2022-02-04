import React from 'react';
function Card(props){
  /* props acts as object to access the */
    return (<>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="movie" className="card_img"/>
          <div className="card_info"> 
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <a href={props.link} target="_blank" rel="noreferrer">
              <button>Watch Now</button>
            </a>
          </div>
    
        </div>
      </div>
      </>);
  }

  export default Card;