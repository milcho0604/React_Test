import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  return (
    <div className="text-center p-6">
      <h1 className="text-2xl font-bold">메인 페이지</h1>
      <button 
        onClick={() => navigate("/exchange")} 
        className="mt-4 px-4 py-2 bg-green-500 text-white rounded"
      >
        환율 계산기로 이동
      </button>
      <button 
        onClick={() => navigate("/board")} 
        className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        게시판으로 이동
      </button>
      <button 
        onClick={() => navigate("/test")} 
        className="mt-4 ml-2 px-4 py-2 bg-red-500 text-white rounded"
      >
        테스트로 이동
      </button>
    </div>
  );
}

export default Main;
