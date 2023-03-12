// component
import DiaryCard from "./components/DiaryCard";
import PaginationComponent from "../../component/Pagination";

const Diary = () => {
  console.log("diary");
  return (
    <div className="p-3">
      <h3 className="text-center py-3">日記</h3>
      <div className="d-flex flex-wrap justify-content-center">
        {
          Array("a","a","a","a","a","a","a","a","a","a","a","a","a","a","a","a").map((_, idx)=>{
            return <DiaryCard key={idx}/>
          })
        }
      </div>
      <PaginationComponent/>
    </div>
  )
}

export default Diary;