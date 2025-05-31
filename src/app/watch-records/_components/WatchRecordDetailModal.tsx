import type { WatchRecord } from "@/app/schema/watch-record";
import Modal from "@/components/modal/Modal";
type WatchRecordDetailModalProps = {
  isOpen: boolean;
  watchRecord: WatchRecord | null;
  onClose: () => void;
};

const WatchRecordDetailModal = ({
  isOpen,
  onClose,
  watchRecord,
}: WatchRecordDetailModalProps) => {
  if (!watchRecord) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={watchRecord.title}>
      <div className="flex flex-col">
        <p>
          鑑賞日:{" "}
          {watchRecord.watchedOn
            ? watchRecord.watchedOn.toLocaleDateString()
            : ""}
        </p>
        <p>評価: {watchRecord.rating}</p>
        <p>
          メモ
          <br />
          {watchRecord.memo}
        </p>
      </div>
    </Modal>
  );
};

export default WatchRecordDetailModal;
