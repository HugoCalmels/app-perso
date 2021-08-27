import { isEmpty } from "./Utils";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import { editSheet } from '../actions/post.action';
import { deleteSheet } from '../actions/post.action';
import Like from './Like';
import './sheet.css';


const Sheet = ({sheet}) => {
  const [editToggle, setEditToggle] = useState(false);
  const user = useSelector((state) => state.userReducer);
  const lesson = useSelector((state) => state.lessonReducer);
  const library = useSelector((state) => state.libraryReducer);
  const language = useSelector((state) => state.languageReducer);
  const [editContent, setEditContent] = useState(sheet.content);
  const [editLesson, setEditLesson] = useState(sheet.lesson);
  const dispatch = useDispatch();


  const handleEdit = (e) => {
    e.preventDefault();

    const sheetData = {
      title: sheet.title,
      author: user[0].name,
      likes: sheet.likes,
      content: editContent,
      id: sheet.id,
      lesson: editLesson,
      link: sheet.link

    };

    dispatch(editSheet(sheetData));
    setEditToggle(false);
  };

  return (
    <div className="sheet">
      <div className="sheetWrapper">

        <div className="headSheetWrapper">
          <div className="sheetTitle">
            <h2>{sheet.title}</h2>
          </div>
          {!isEmpty(user[0]) && user[0].name === sheet.author && (
          <div className="edit-delete">
            <button onClick={() => setEditToggle(!editToggle)}>edit</button>
            <button onClick={() => dispatch(deleteSheet(sheet.id))}>delete</button>
          </div>
          )}
        </div>

   
   

      {editToggle ? (
        <form onSubmit={e => handleEdit(e)}>
        <textarea defaultValue={sheet.content}
        onChange={e=> setEditContent(e.target.value)}></textarea>

        <select  defaultValue={sheet.lesson} onChange={e => setEditLesson(e.target.value) }>
        <option value="none" >none</option>
        <option value="hooks" >hooks</option>
        <option value="test" >test</option>
        </select>

        <input type="submit" value="Valider modification" />
      </form>
      ) : (

        <div>
          <a href={`https://${sheet.link}`}>link : https://{sheet.link}</a>
         
           <br />
           <span>content :{sheet.content}</span>
           <br />
           <span>lesson : {sheet.lesson}</span>
           <br />
           <span>library : {!isEmpty(library[0]) && library[0].name}</span>
           <br />
           <span>language : {!isEmpty(language[0]) && language[0].name}</span>

           <br />
          <span><Like sheet={sheet}/></span>
          </div>


      )}
      
      <div className="author">
        <h5>{sheet.author}</h5>
        </div>


        </div>
    </div>
  )
}

export default Sheet



/*

<select  value={sheet.lesson} onChange={e => setEditLesson(e.target.value) }>
        <option value="none" >none</option>
        <option value="hooks"  selected>hooks</option>
        <option value="test" >test</option>
        </select>


        */