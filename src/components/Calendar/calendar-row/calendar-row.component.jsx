import React, {useState,useEffect} from "react"
import "./calendar-row.style.css"

export const CalendarRow = (props) =>{
    const onObj = {
        class: "calendar-row-day-cel-colored",
        status: true
    }
    const offObj = {
        class: "calendar-row-day-cel",
        status: false
    }
    const makeArray = () =>{
        const arrays = []
        for(let i=0; i<30; i++){
            arrays.push(offObj)
        }
        return arrays;
    }
    const makeDivs = () =>{
        const arrays = []
        for(let i=0; i<28; i++){
            arrays.push(<div key={i} className={color[i].class} onClick={()=>divClicked(i)} > {(i===props.subject) ? <h1>{props.subjectInfo}</h1> : null} </div>)
        }
        return arrays
    }
  
    const [state,setState] = useState([props.Day,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])
    const [color,setColor] = useState( makeArray )
 

    useEffect( () =>{
        setState([props.Day,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0])    
        setColor(makeArray)    
        console.log("cleared")
    },[props.Clear])



    const divClicked = (index) =>{
        let placeHolderColor = [...color];
        let placeHolderState = [...state];
        
        
        let trueIndex = state.indexOf(index+1);

        
        (color[index].status === false) ? placeHolderState.splice(index+1,1,index+1) : placeHolderState.splice(trueIndex,1,0);
        (color[index].status === false) ? placeHolderColor.splice(index,1,onObj) : placeHolderColor.splice(index,1,offObj);   
       
        
        // setState(state => placeHolderState,props.ParentFunction(state,props.index));
        setState(state =>  placeHolderState, props.ParentFunction(placeHolderState,props.index));
        setColor(placeHolderColor);
     

        
        
    }
    
    
    return(
        
        <div className="calendar-row-container">
            <div className="calendar-row-header"><h1 className="calendar-row-header-text" >{props.Day}</h1></div>
            {makeDivs().map(el=>el)}
        </div>
        
    )

}