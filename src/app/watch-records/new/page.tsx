import Container from "@/components/layout/Container";
import BreadcrumbItem from "@/components/nav/BreadcrumbItem";
import Breadcrumbs from "@/components/nav/Breadcrumbs";

export default function WatchRecordNewPage() {
  return (
    <Container>
      <Breadcrumbs>
        <BreadcrumbItem href="/watch-records">一覧</BreadcrumbItem>
        <BreadcrumbItem>新規作成</BreadcrumbItem>
      </Breadcrumbs>
      <div>WatchRecordNew</div>
    </Container>
  );
}
