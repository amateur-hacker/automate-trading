import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BitCoin from "./Bitcoin";
import Ripple from "./Ripple";
import Ethereum from "./Ethereum";
import Litecoin from "./Litecoin";
import TradingActivity from "./TradingActivity";
import NotificationCrypto from "./Notifications";
import ChatCard from "./Chat";
import CandlestickCard from "./CandleStick";
import BuySellCard from "./BuyAndSellCrypto";

const Crypto = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Crypto" parent="Dashboard" />
      <Container fluid className="crypto-dash">
        <Row>
          <BitCoin />
          <Ripple />
          <Ethereum />
          <Litecoin />
          <TradingActivity />
          <NotificationCrypto />
          <ChatCard />
          <CandlestickCard />
          <BuySellCard />
        </Row>
      </Container>
    </>
  );
};

export default Crypto;
