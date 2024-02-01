"use client";
import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import CommonModal from "@/Components/Tables/DataTable/APITables/RowSelectionAndDeletion/CommonModal";
import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowsSelectionAndDeletionHeading } from "@/Constant";
import {
  RowsSelectionAndDeletionSubHeading,
  DeleteDataTableColumns,
} from "@/Data/Table/DataTable";

import {
  Nav,
  Button,
  Card,
  CardBody,
  Col,
  Row,
  Container,
  NavItem,
  NavLink,
} from "reactstrap";

import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { Layers, Zap } from "react-feather";
import { memo } from "react";

const layout =({ children }: { children: React.ReactNode }) => {
  const [basicLineTab, setBasicLineTab] = useState("1");
  const router = useRouter();
  const pathName = usePathname();

  const TabNavItemsData = [
    {
      id: "1",
      icon: <i className="icofont icofont-ui-home"></i>,
      text: "WebHook Logs",
      url: "/logs/webhook",
    },
    {
      id: "2",
      icon: <i className="icofont icofont-man-in-glasses"></i>,
      text: "Broker Logs",
      url: "/logs/broker",
    },
    ,
  ];

  return (
    <>
      <CommonBreadcrumb parent="Table" pageTitle="WebHook Logs" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <Nav className="border-tab" tabs>
                  {TabNavItemsData.map((item: any, i) => (
                    <NavItem key={i}>
                      <NavLink
                        href="#"
                        className={pathName.includes(item.url) ? "active" : ""}
                        onClick={() => {
                          setBasicLineTab(item.id);
                          router.push(item.url);
                        }}
                      >
                        {item.icon}
                        {item.text}
                      </NavLink>
                    </NavItem>
                  ))}
                </Nav>
                {children}
              </CardBody>
            </Card>
          </Col>
          {/* <CustomFiltering /> */}
        </Row>
      </Container>
    </>
  );
};

export default layout;
