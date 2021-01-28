import React from 'react';
import {Container,Row,Col} from 'react-bootstrap';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import FacebookIcon from '@material-ui/icons/Facebook';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import './Footer.scss';
function Footer(){
    return (
        <div className="footer_container">
            <Container>
                <Row>
                    <Col xl={4} className="row_footer">
                        <div style={{marginBottom:'1em',display:'flex'}}>
                            <HelpOutlineIcon/>
                            <span className="text_content"> Giới Thiệu</span>
                        </div>
                        <div>
					        Đọc truyện online, đọc truyện chữ, truyện hay. Website luôn cập nhật những bộ truyện mới thuộc các thể loại đặc sắc như truyện tiên hiệp, truyện kiếm hiệp, hay truyện ngôn tình một cách nhanh nhất.				
                        </div>
                    </Col>
                    <Col xl={4} className="row_footer">
                        <div style={{marginBottom:'1em',display:'flex'}}>
                            <MonetizationOnIcon/>
                            <span className="text_content"> Ủng Hộ Chúng Tôi</span>
                        </div>
                        <div>
                        </div>
                    </Col>
                    <Col xl={4} className="row_footer">
                    <div style={{marginBottom:'1em',display:'flex'}}>
                        <ContactMailIcon/>
                        <span className="text_content">Liên Hệ</span>
                    </div>
                    <div>
                        <div className="info_contact">
                            <span><MailOutlineIcon /></span> <a href="mailto:truyenmoi247@gmail.com">truyenmoi247@gmail.com</a>
                        </div>
                        <div className="info_contact">
                            <span><FacebookIcon/></span> <a href="https://fb.com/nam.havan.37051579">https://fb.com/nam.havan.37051579</a> 
                        </div>
                    </div>
                    </Col>
                </Row>
                <div className="footer_copyright">
                    Copyright © 2020 TruyenMoi247
                </div>
            </Container>
        </div>
    )
}
export default Footer ;