import {
  Body,
  Button,
  Container,
  Column,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>Cảm ơn bạn đã đăng ký khóa học của LIKELION!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            {/* Header */}
            <Section className="p-5">
              <Img
                src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695176110/logo_aa9g2j.png"
                alt="Logo"
                width="180"
                height="20"
                className="mb-6 mx-auto"
              />
              <Img
                src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695176111/lion_rwistv.png"
                alt="Lion"
                width="122"
                height="116"
                className="mx-auto"
              />
            </Section>
            <Heading className="max-w-[370px] text-center m-auto pb-3">
              Cảm ơn bạn đã đăng ký khóa học của LIKELION!
            </Heading>
            <Text className="max-w-[377px] text-center m-auto pt-3">
              Thanh toán của bạn đang được chúng tôi xác nhận. LIKELION sẽ liên
              hệ bạn trong vòng 24h làm việc (trừ thứ 7, CN và các ngày lễ).
            </Text>

            <Hr />

            {/* Body */}
            <Section>
              <Heading className="bg-[#FF8F43] text-center text-[#FFFFFF] font-bold text-xl max-w-[324px] max-h-[35px] rounded-[8px]">
                Thông tin đăng ký khoá học
              </Heading>
              <Section className="bg-[#FFF7F3]">
                <Heading>Tên khoá học</Heading>

                <Row>
                  <Column>Giá gốc (Thanh toán 1 lần)</Column>
                  <Column>đ x,xxx,xxx</Column>
                </Row>
                <Row>
                  <Column>Giảm giá</Column>
                  <Column>-xx%</Column>
                  <Column>- đ x,xxx,xxx</Column>
                </Row>
                <Row>
                  <Column>NHAPMA123</Column>
                  <Column>- đ x,xxx,xxx</Column>
                </Row>
              </Section>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
