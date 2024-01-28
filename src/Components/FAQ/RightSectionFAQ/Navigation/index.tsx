import { AskOurCommunity, AskQuestion, ContactUs, Href, Navigation } from '@/Constant';
import { FAQNavigationData } from '@/Data/FAQ/Faq';
import { Mail, MessageCircle, MessageSquare, Settings } from 'react-feather';
import { Button, Card, CardBody, CardHeader, Col } from 'reactstrap';

const NavigationFAQ = () => {
  return (
    <Col lg="12">
    <Card className="card-mb-faq">
      <CardHeader className="faq-header">
        <h5>{Navigation}</h5><Settings />
      </CardHeader>
      <CardBody className="faq-body">
        <Button color='primary' className="navigation-btn"><a style={{ color: '#fff' }} href={Href}>
          <MessageSquare className="m-r-10" />{AskQuestion}</a></Button>
        <div className="navigation-option">
          <ul>
            {FAQNavigationData.map((item,i) => (
              <li key={i}><a href={Href}>{item.icon}{item.title}</a><span className={item.class}>{item.value}</span></li>
             ))}
          </ul>
          <hr />
          <ul>
            <li><a href={Href}><MessageCircle />{AskOurCommunity}</a></li>
            <li><a href={Href}><Mail />{ContactUs}</a></li>
          </ul>
        </div>
      </CardBody>
    </Card>
  </Col>
  )
}

export default NavigationFAQ