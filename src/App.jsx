import './App.css'

function App() {

  return (
    <>
        <div className={"w-full h-full"}>
        <div className='flex'>
            <button className={"w-[100px]"}>
                미리보기
            </button>
            <button>
                마크다운
            </button>
        </div>
        <textarea className={"w-full"}></textarea>
        </div>
    </>
  )
}

export default App
