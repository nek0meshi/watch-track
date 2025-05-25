import { WatchRecord } from "@/app/schema/watch-record";

type WatchRecordBlockProps = {
  watchRecord: WatchRecord;
};

export const WatchRecordBlock = ({ watchRecord }: WatchRecordBlockProps) => {
  return <div className="flex flex-col p-2 border-b border-gray-200">
    <div className="text-lg font-bold">{watchRecord.title}</div>
    {/* <div>{watchRecord.watchedOn ? watchRecord.watchedOn.toLocaleDateString() : '' }</div> */}
    <div>評価: {watchRecord.rating}</div>
    <div>{watchRecord.memo}</div>
  </div>;
};
