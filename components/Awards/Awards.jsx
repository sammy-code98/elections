import ProgressLine from "./ProgressLine";
export default function Awards() {
  return (
    <div className="mt-32">
      <div className="text-3xl text-center font-medium">Recent Awards</div>
      <div className="grid grid-cols-3 gap-6  px-32 mt-12">
          <div className="m-2">
          <ProgressLine
          label="AWARD FOR DEMYSTIFYING COVID-19 POLITICS (2020)"
          visualParts={[
            {
              percentage: "30%",
              color: "blue",
            },
          ]}
        />
          </div>
          <div className="m-2">
          <ProgressLine
          label="BEST GOVERNOR AWARD (2019)"
          visualParts={[
            {
              percentage: "50%",
              color: "skyBlue",
            },
          ]}
        />
          </div>
          <div className="m-2">
          <ProgressLine
          label="MOST SECURITY CONSCIOUS GOVERNOR (2017)"
          visualParts={[
            {
              percentage: "80%",
              color: "gray",
            },
          ]}
        />
          </div>
          <div className="m-2">
          <ProgressLine
          label="GOVERNOR OF THE YEAR ON SECURITY (2020)"
          visualParts={[
            {
              percentage: "40%",
              color: "green",
            },
          ]}
        />
          </div>
          <div className="m-2">
          <ProgressLine
          label="SPECIAL RECOGNITION AWARD (2018)"
          visualParts={[
            {
              percentage: "65%",
              color: "yellow",
            },
          ]}
        />
          </div>
          <div className="m-2">
          <ProgressLine
          label="GOOD GOVERNANCE AWARD (2017)"
          visualParts={[
            {
              percentage: "100%",
              color: "red",
            },
          ]}
        />
          </div>
        
         
      </div>
    </div>
  );
}
