import type { WatchRecord } from "@/app/schema/watch-record";

type WatchRecordBlockProps = {
  watchRecord: WatchRecord;
  onClickDetail: () => void;
};

export const WatchRecordBlock = ({
  watchRecord,
  onClickDetail,
}: WatchRecordBlockProps) => {
  return (
    <div className="flex flex-row items-center py-2 border-b border-gray-200 max-h-[100px] w-full">
      <div className="flex flex-col flex-1 min-w-0">
        <div className="text-lg font-bold">{watchRecord.title}</div>
        {/* <div>{watchRecord.watchedOn ? watchRecord.watchedOn.toLocaleDateString() : '' }</div> */}
        <div>評価: {watchRecord.rating}</div>
        <div className="text-ellipsis overflow-hidden whitespace-nowrap w-full">
          {watchRecord.memo}
        </div>
      </div>
      <div className="flex flex-col ml-auto">
        <button
          type="button"
          onClick={onClickDetail}
          className="btn btn-tertiary btn-sm"
        >
          詳細
        </button>
      </div>
    </div>
  );
};
