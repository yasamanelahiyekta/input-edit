import { Badge, Button, Spinner } from 'react-bootstrap';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeTitle, changenumber, getPosts } from './redux/Action';
import { useEffect, useState } from 'react';

function App() {
  const [text, setText] = useState("")
  const [select, setSelect] = useState(0)
  const { data, loading, error } = useSelector(s => s.posts)
  console.log(data, loading, error);
  useEffect(() => {
    dispatch(getPosts())
  }, [])
  const dispatch = useDispatch()
  return (
    <div className="App">
      { loading ? <Spinner animation='border' variant='ligth' /> : error ? <Badge bg='danger'>{ error }</Badge> : data.map((item, index) =>
        <div key={ item.id }>
          <h3>{ item.id == select ? (<>
            <input type='text' value={ text } onChange={ (e) => setText(e.target.value) } />
            <button onClick={ () => {
              setSelect(0);
              dispatch(changeTitle(text, index));
            } }>Edit</button>
          </>
          ) : <Badge bg='ligth ' onClick={ () => {
            setSelect(item.id);
            setText(item.title)
          }


          }>{ item.title }</Badge> }

          </h3>
        </div>
      ) }
    </div>
  );
}

export default App;
