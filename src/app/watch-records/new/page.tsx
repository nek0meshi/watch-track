"use client";

import {
  type WatchRecordCreate,
  WatchRecordCreateSchema,
} from "@/app/schema/watch-record";
import InputLabel from "@/components/form/InputLabel";
import Container from "@/components/layout/Container";
import Loading from "@/components/loading/Loading";
import BreadcrumbItem from "@/components/nav/BreadcrumbItem";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import PageTitle from "@/components/typography/PageTitle";
import AppButton from "@/components/ui/buttons/AppButton";
import { useCreateWatchRecord } from "@/hooks/queries/useWatchRecords";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function WatchRecordNewPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(WatchRecordCreateSchema),
  });
  const { mutate: createWatchRecord, isPending } = useCreateWatchRecord();
  const router = useRouter();

  const onSubmit = (data: WatchRecordCreate) => {
    console.log(data);
    try {
      createWatchRecord(data);
      router.push("/watch-records");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Container>
      <Loading isLoading={isPending} />
      <Breadcrumbs>
        <BreadcrumbItem href="/watch-records">鑑賞ログ一覧</BreadcrumbItem>
        <BreadcrumbItem>鑑賞ログ新規作成</BreadcrumbItem>
      </Breadcrumbs>
      <PageTitle>鑑賞ログ新規作成</PageTitle>
      <form
        className="flex flex-col gap-4 mt-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <InputLabel label="作品名" error={errors.title?.message}>
          <input
            {...register("title")}
            type="text"
            className="input input-sm w-full"
          />
        </InputLabel>
        <InputLabel label="鑑賞日" error={errors.watchedOn?.message}>
          <input
            {...register("watchedOn")}
            type="date"
            className="input input-sm w-full"
          />
        </InputLabel>
        <InputLabel label="評価" error={errors.rating?.message}>
          <input
            {...register("rating", { valueAsNumber: true })}
            type="number"
            className="input input-sm w-full"
          />
        </InputLabel>
        <InputLabel label="メモ" error={errors.memo?.message}>
          <textarea
            {...register("memo")}
            className="textarea textarea-sm w-full"
          />
        </InputLabel>
        <AppButton type="submit" className="btn btn-primary mt-4">
          作成
        </AppButton>
        <AppButton
          type="button"
          className="btn btn-outline"
          onClick={() => router.push("/watch-records")}
        >
          戻る
        </AppButton>
      </form>
    </Container>
  );
}
