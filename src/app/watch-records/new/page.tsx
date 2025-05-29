import Container from "@/components/layout/Container";
import BreadcrumbItem from "@/components/nav/BreadcrumbItem";
import Breadcrumbs from "@/components/nav/Breadcrumbs";
import PageTitle from "@/components/typography/PageTitle";
export default function WatchRecordNewPage() {
  return (
    <Container>
      <Breadcrumbs>
        <BreadcrumbItem href="/watch-records">鑑賞ログ一覧</BreadcrumbItem>
        <BreadcrumbItem>鑑賞ログ新規作成</BreadcrumbItem>
      </Breadcrumbs>
      <PageTitle>鑑賞ログ新規作成</PageTitle>
      <div>WatchRecordNew</div>
    </Container>
  );
}
