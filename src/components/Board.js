import React, { useState, useEffect } from "react";

const Board = () => {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  // localStorage에서 게시글 불러오기
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts")) || [];
    setPosts(savedPosts);
  }, []);

  // 게시글이 변경될 때마다 저장
  useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  // 새 게시글 추가
  const addPost = () => {
    if (title.trim() === "" || content.trim() === "") return;

    const newPost = {
      id: Date.now(),
      title,
      content,
    };

    setPosts([newPost, ...posts]);
    setTitle("");
    setContent("");
  };

  // 특정 게시글 삭제
  const deletePost = (id) => {
    const updatedPosts = posts.filter((post) => post.id !== id);
    setPosts(updatedPosts);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>📋 게시판</h2>
      
      {/* 게시글 입력 */}
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="제목 입력"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: "100%", padding: "8px", marginBottom: "8px" }}
        />
        <textarea
          placeholder="내용 입력"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ width: "100%", height: "80px", padding: "8px" }}
        ></textarea>
        <button onClick={addPost} style={{ width: "100%", padding: "10px", background: "#4CAF50", color: "white", border: "none" }}>
          게시글 추가
        </button>
      </div>

      {/* 게시글 목록 */}
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {posts.length === 0 ? (
          <p>📌 게시글이 없습니다.</p>
        ) : (
          posts.map((post) => (
            <li key={post.id} style={{ borderBottom: "1px solid #ddd", padding: "10px 0" }}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <button 
                onClick={() => deletePost(post.id)} 
                style={{ background: "red", color: "white", border: "none", padding: "5px 10px", cursor: "pointer" }}>
                삭제
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Board;
