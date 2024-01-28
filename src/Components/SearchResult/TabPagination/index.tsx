import { Href, Next, Previous } from "@/Constant";

const TabPagination = () => {
  return (
    <div className="info-block m-t-30">
      <nav aria-label="...">
        <ul className="simple-list pagination pagination-primary d-flex flex-row">
          <li className="page-item disabled">
            <a className="page-link" href={Href} tabIndex={-1}>
              {Previous}
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={Href}>
              1
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href={Href}>
              2 <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={Href}>
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href={Href}>
              {Next}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default TabPagination;
