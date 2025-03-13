import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

// Header
function Header(props){
  console.log('props: ', props, props.title);
  return <header>
  <h1><a href='/' onClick={event=>{
    event.preventDefault();
    props.onChangeMode();
  }}>{props.title}</a></h1>
</header>
}

// Nav
function Nav(props){
  const list = [];
  for(let i=0; i<props.topics.length; i++){
    let temp = props.topics[i];
    list.push(<li key={temp.id}>
      <a id={temp.id} href={'/read/'+temp.id} onClick={event=>{
        event.preventDefault();
        props.onChangeMode(Number(event.target.id));
      }
      }>{temp.title}</a>
      </li>)
  }

  return <nav>
  <ol>
    {list}
  </ol>
</nav>
}

function Article(props){
  return <article>
  <h2>{props.title}</h2>
  {props.body}
</article>
}

function App() {
  
  const topics = [
    {id:1, title:'html', body:'html is...'},
    {id:2, title:'css', body:'css is...'},
    {id:3, title:'javascript', body:'javascript is...'}
  ]

  const [mode, setMode] = useState('Welcome');
  const [id, setId] = useState(null);

  let content = null;
  if(mode === 'Welcome'){
    content = <Article title="Welcome" body="hello, WEB"></Article>
  }else if(mode === 'Read'){
    let title, body = null;
    for(let i=0; i<topics.length; i++){
      if(topics[i].id === id){
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>
  }
  return (
    <div>
      <Header title="REACT" onChangeMode={()=>{
        setMode('Welcome');
      }}></Header>
      <Nav topics={topics} onChangeMode={(_id)=>{
        setMode('Read');
        setId(_id);
      }
      }></Nav>
      {content}
    </div>
  );
}

export default App;
