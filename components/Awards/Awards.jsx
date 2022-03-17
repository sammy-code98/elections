import ProgressLine from "./ProgressLine";
export default function Awards() {
  return (
    <div className="mt-24 md:32">
      <div className="text-3xl text-center text-gray-800">Recent Awards</div>
      <div className="grid  grid-cols-1rid md:grid-cols-3 md:gap-6  md:px-32 mt-12 px-4">
        <div className="m-2">
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
        <div className="m-2">
          <span className="text-base text-gray-800 font-bold">
          Award for Demystifying Covid-19 Politics (2020)
          </span>
          <ProgressLine
            visualParts={[
              {
                percentage: "50%",
                color: "skyBlue",
              },
            ]}
          />
        </div>
        <div className="m-2">
          <span className="text-base text-gray-800 font-bold">
            Most Security Conscious Governor (2017)
          </span>
          <ProgressLine
            visualParts={[
              {
                percentage: "80%",
                color: "gray",
              },
            ]}
          />
        </div>
        <div className="m-2">
          <span className="text-base text-gray-800 font-bold">
            Governor of the year on Security (2020)
          </span>
          <ProgressLine
            visualParts={[
              {
                percentage: "40%",
                color: "green",
              },
            ]}
          />
        </div>
        <div className="m-2">
          <span className="text-base text-gray-800 font-bold">
            {" "}
            Special Recognition Award (2018)
          </span>
          <ProgressLine
            visualParts={[
              {
                percentage: "65%",
                color: "yellow",
              },
            ]}
          />
        </div>
        <div className="m-2">
          <span className="text-base text-gray-800 font-bold">
            Good Governance Award (2017)
          </span>
          <ProgressLine
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
