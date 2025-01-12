import FileDetailItem from "./FileDetailItem";

export default function FileDetailItems() {
  return (
    <>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-5 divide-x py-5">
        <FileDetailItem title="Filename" info="filename.jpg" />
        <FileDetailItem title="Filesize" info="124 Kb" />
        <FileDetailItem title="Date" info="24-07-2024" />
        <FileDetailItem title="Uploaded by" info="Jimmy van der Velde" />
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-y-5 divide-x py-5">
        <FileDetailItem title="Type" info="Video" />
        <FileDetailItem title="Status" info="Converting (21%)" />
        <FileDetailItem title="Approval" info="Cleared" />
        <FileDetailItem title="Expires at" info="24-07-2025" />
      </div>
    </>
  );
}
