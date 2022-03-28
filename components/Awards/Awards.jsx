import ProgressLine from "./ProgressLine";
export default function Awards() {
  return (
    <div className="mt-24 md:32">
      <div className="text-3xl text-center text-gray-800">Recent Awards</div>
      <div  className="grid  grid-cols-1 md:grid-cols-2 md:gap-6   md:px-96 mt-12 px-4">
        <div className="m-2 ">
          <span className="text-base text-gray-800 font-bold">
          Award For Prudent Financial Resource Management.

          </span>
          <ProgressLine
        
            visualParts={[
              {
                percentage: "100%",
                color: "blue",
              },
            ]}
          />
        </div>
      
      </div>
    </div>
  );
}
