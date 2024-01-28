import CommonCardHeader from '@/CommonComponents/CommonCardHeader'
import { Data, DefaultBootstrapBreadcrumb, HomeText, Href, Library } from '@/Constant'
import { DefaultBreadcrumbSubHeading } from '@/Data/BonusUi/Breadcrumb'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from 'reactstrap'

const DefaultBreadcrumb = () => {

  return (
    <Col sm="12" md="6">
    <Card>
      <CommonCardHeader heading={DefaultBootstrapBreadcrumb} subHeading={DefaultBreadcrumbSubHeading}/>
      <CardBody>
        <Breadcrumb className="pt-0 pl-0">
          <BreadcrumbItem className="active">{HomeText}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb className=" pl-0">
          <BreadcrumbItem ><a href={Href}>{HomeText}</a></BreadcrumbItem>
          <BreadcrumbItem className="active">{Library}</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb className=" pl-0">
          <BreadcrumbItem ><a href={Href}>{HomeText}</a></BreadcrumbItem>
          <BreadcrumbItem ><a href={Href}>{Library}</a></BreadcrumbItem>
          <BreadcrumbItem className="active">Data</BreadcrumbItem>
        </Breadcrumb>
        <Breadcrumb className=" mb-0 pb-0 pl-0">
          <BreadcrumbItem ><a href={Href}><i className="fa fa-home"></i></a></BreadcrumbItem>
          <BreadcrumbItem >{Library}</BreadcrumbItem>
          <BreadcrumbItem className=" active">{Data}</BreadcrumbItem>
        </Breadcrumb>
      </CardBody>
    </Card>
  </Col>
  )
}

export default DefaultBreadcrumb