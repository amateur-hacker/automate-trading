import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BrowserUsesChart from "./BrowserUses";
import TotalEarningChart from "./Earning";
import FinanceChart from "./Finance";
import LiveProductChart from "./LiveProducts";
import MarketingExpenses from "./MarketingExpense";
import MonthlySalesChart from "./MonthlySales";
import OrderStatusChart from "./OrderStatus";
import OrderStatus2Chart from "./OrderStatus2";
import ProductChart from "./Products";
import ProjectChart from "./Projects";
import SaleChart from "./Sale";
import SkillStatusChart from "./SkillStatus";
import TurnoverChart from "./Turnover";
import UsesChart from "./Uses";

const ChartWidgets = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Charts" parent="Widgets" />
      <Container fluid>
        <Row>
          <SaleChart />
          <ProjectChart />
          <ProductChart />
          <MarketingExpenses />
          <TotalEarningChart />
          <SkillStatusChart />
          <OrderStatusChart />
          <LiveProductChart />
          <TurnoverChart />
          <MonthlySalesChart />
          <UsesChart />
          <BrowserUsesChart />
          <FinanceChart />
          <OrderStatus2Chart />
        </Row>
      </Container>
    </>
  );
};

export default ChartWidgets;
