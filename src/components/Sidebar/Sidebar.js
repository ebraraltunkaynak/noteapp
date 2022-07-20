import {useState} from 'react'
import Plus from '../../assets/plus.png'
import './Sidebar.css'



function Sidebar(props) {

    const color =["#8e44ad","#d35400","#27ae60", "#c0392b","#1abc9c"]
    const [listOpen, setListOpen] = useState(false)
  return (
    <div>
    <img src={Plus} alt="plus" className="plus" onClick={()=>setListOpen(!listOpen)}/>
    <ul className= {`sidebar-list ${listOpen?"sidebar-list-active":""}`}> 
    {
        color.map((item,index)=> (  
             <li key={index}
              className='sidebar-list-item'
               style={{backgroundColor: item}}
               onClick={()=>props.addNote(item)}
        />
   )) }
   
    </ul>

    </div>
  )
}

export default Sidebar