import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

export default function BasicBreadcrumbs({ pages }) {
  return (
    <div role="presentation" style={{ margin: "80px 0px" }}>
      <Breadcrumbs aria-label="breadcrumb">
        {pages.map((page, index) => {
          const isLast = index === pages.length - 1;
          return (
            <Link
              key={index}
              underline="none"
              href={page.url}
              color={isLast ? "black" : "inherit"} // MUI theme color (red)
              sx={{
                fontWeight: isLast ? 400 : 400,
                pointerEvents: isLast ? "none" : "auto", // disable click on last
              }}
            >
              {page.title}
            </Link>
          );
        })}
      </Breadcrumbs>
    </div>
  );
}
