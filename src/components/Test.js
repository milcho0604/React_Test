import React, { useState } from "react";

function Test() {
  const [mode, setMode] = useState("Welcome");
  const [id, setId] = useState(null);
  const [topics, setTopics] = useState([
    { id: 1, title: "HTML", body: "HTML is..." },
    { id: 2, title: "CSS", body: "CSS is..." },
    { id: 3, title: "JavaScript", body: "JavaScript is..." },
  ]);
  const [nextId, setNextId] = useState(4);

  let content = null;
  let contextControl = null;

  if (mode === "Welcome") {
    content = <Article title="Welcome" body="Hello, WEB"></Article>;
  } else if (mode === "Read") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = <Article title={title} body={body}></Article>;
    contextControl = (
      <>
        <li>
          <a
            href={"/update/" + id}
            onClick={(event) => {
              event.preventDefault();
              setMode("Update");
            }}
          >
            Update
          </a>
        </li>
        <li>
          <input
            type="button"
            value="Delete"
            onClick={() => {
              const newTopics = topics.filter((topic) => topic.id !== id);
              setTopics(newTopics);
              setMode("Welcome");
            }}
          />
        </li>
      </>
    );
  } else if (mode === "Create") {
    content = (
      <Create
        onCreate={(_title, _body) => {
          const newTopic = { id: nextId, title: _title, body: _body };
          setTopics([...topics, newTopic]);
          setMode("Read");
          setId(nextId);
          setNextId(nextId + 1);
        }}
      />
    );
  } else if (mode === "Update") {
    let title, body = null;
    for (let i = 0; i < topics.length; i++) {
      if (topics[i].id === id) {
        title = topics[i].title;
        body = topics[i].body;
      }
    }
    content = (
      <Update
        title={title}
        body={body}
        onUpdate={(title, body) => {
          const newTopics = topics.map((topic) =>
            topic.id === id ? { id, title, body } : topic
          );
          setTopics(newTopics);
          setMode("Read");
        }}
      />
    );
  }

  return (
    <div>
      <Header
        title="REACT"
        onChangeMode={() => {
          setMode("Welcome");
        }}
      />
      <Nav
        topics={topics}
        onChangeMode={(_id) => {
          setMode("Read");
          setId(_id);
        }}
      />
      {content}
      <ul>
        <li>
          <a
            href="/create"
            onClick={(event) => {
              event.preventDefault();
              setMode("Create");
            }}
          >
            Create
          </a>
        </li>
        {contextControl}
      </ul>
    </div>
  );
}

// Header 컴포넌트
function Header(props) {
  return (
    <header>
      <h1>
        <a
          href="/"
          onClick={(event) => {
            event.preventDefault();
            props.onChangeMode();
          }}
        >
          {props.title}
        </a>
      </h1>
    </header>
  );
}

// Nav 컴포넌트
function Nav(props) {
  return (
    <nav>
      <ol>
        {props.topics.map((topic) => (
          <li key={topic.id}>
            <a
              id={topic.id}
              href={"/read/" + topic.id}
              onClick={(event) => {
                event.preventDefault();
                props.onChangeMode(Number(event.target.id));
              }}
            >
              {topic.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

// Article 컴포넌트
function Article(props) {
  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

// Create 컴포넌트
function Create(props) {
  return (
    <article>
      <h2>Create</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onCreate(event.target.title.value, event.target.body.value);
        }}
      >
        <p>
          <input type="text" name="title" placeholder="Title" />
        </p>
        <p>
          <textarea name="body" placeholder="Body"></textarea>
        </p>
        <p>
          <input type="submit" value="Create" />
        </p>
      </form>
    </article>
  );
}

// Update 컴포넌트
function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [body, setBody] = useState(props.body);

  return (
    <article>
      <h2>Update</h2>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          props.onUpdate(title, body);
        }}
      >
        <p>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </p>
        <p>
          <textarea
            name="body"
            value={body}
            onChange={(event) => setBody(event.target.value)}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="Update" />
        </p>
      </form>
    </article>
  );
}

export default Test;
