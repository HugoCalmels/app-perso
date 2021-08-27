import { useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addSheets, getSheets } from '../actions/post.action';



const SheetForm = () => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [lesson, setLesson] = useState('none');
  const [link, setLink] = useState('');

  const user = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();

  const handleForm = async (e) => {
    e.preventDefault();

    if (title && content){
      const data = {
        title,
        content,
        author: user[0].name,
        likes : 0,
        lesson,
        link

      };

      await dispatch(addSheets(data))
      setTitle('');
      setContent('');
      setLesson('');
      setLink('');
      dispatch(getSheets());
    }
  };

  return (
    <div>
      <form onSubmit={e => handleForm(e)}>
      <input type="text" placeholder="Titre" value={title} onChange={e => setTitle(e.target.value) }/>
      <textarea placeholder="Description" value={content} onChange={e => setContent(e.target.value) }/>
   
      <select  value={lesson} onChange={e => setLesson(e.target.value) }>
        <option value="none" >none</option>
        <option value="hooks" >hooks</option>

        <option value="test" >test</option>
      </select>

      <input type="text" placeholder="https://.." value={link} onChange={e => setLink(e.target.value) }/>

      <input type="submit" value="Valider" />
      </form>
    </div>
  );
};

export default SheetForm;


/*    <input type="url" placeholder="Link" value={link} onChange={e => setLink(e.target.value) }/>

<input type="select" value={language} onChange={e => setLanguage(e.target.value) }/>
<input type="select" value={library} onChange={e => setLibrary(e.target.value) }/>
<input type="select" value={lesson} onChange={e => setLesson(e.target.value) }/>


   <select  value={lesson} onChange={e => setLesson(e.target.value) }>
        <option value="none" >none</option>
        <option value="hooks"  selected>hooks</option>

        <option value="test" >test</option>
      </select>

*/