import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams } from "react-router-dom";

function ResultPagination({
  query,
  totalpages,
  activePage: page,
}: {
  query: string;
  totalpages: number | undefined;
  activePage?: number | undefined;
}) {
  const [searchParams] = useSearchParams();
  const currentPage = searchParams.get("page");

  console.log(currentPage);
  return (
    <div>
      <Pagination className="width-stack-xy">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              to={`/search?query=${query}&page=${page !== undefined && page > 1 ? page - 1 : 1}`}
            />
          </PaginationItem>
          <PaginationItem>
            {Array.from({ length: totalpages ?? 0 }, (_, index) => index)
              .slice(
                parseInt(currentPage ?? "1", 10) - 1,
                parseInt(currentPage ?? "1", 10) + 9,
              )
              .map((pageIndex) => (
                <PaginationLink
                  key={pageIndex}
                  to={`/search?query=${query}&page=${pageIndex + 1}`}
                  isActive={page === pageIndex + 1}
                >
                  {pageIndex + 1}
                </PaginationLink>
              ))}
          </PaginationItem>

          {(totalpages ?? 0) > 10 && (
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
          )}
          <PaginationItem>
            <PaginationNext
              to={`/search?query=${query}&page=${page !== undefined && page < (totalpages ?? 1) ? page + 1 : (totalpages ?? 1)}`}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

export default ResultPagination;
