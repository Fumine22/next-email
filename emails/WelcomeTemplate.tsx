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
import Mail from "../public/mail.svg";

const WelcomeTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>Cảm ơn bạn đã đăng ký khóa học của LIKELION!</Preview>
      <Tailwind>
        <Body className="bg-[#EFEFEF] py-10">
          <Container className="bg-white">
            {/* Header */}
            <Section className="p-10">
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
            <Heading className="max-w-[370px] text-center m-auto pb-2">
              Cảm ơn bạn đã đăng ký khóa học của LIKELION!
            </Heading>
            <Text className="max-w-[500px] text-center m-auto pt-2 text-base pb-10">
              Thanh toán của bạn đang được chúng tôi xác nhận. LIKELION sẽ liên
              hệ bạn trong vòng 24h làm việc (trừ thứ 7, CN và các ngày lễ).
            </Text>

            <Hr className="py-[20px] border-t-[10px]" />

            {/* Body */}
            <Section className="px-[30px]">
              <Section className="bg-[#FFF7F3] rounded-[20px] px-10">
                <Text className="bg-[#FF8F43] text-center text-[#FFFFFF] font-bold text-xl w-[324px] h-[35px] rounded-[8px] m-0">
                  Thông tin đăng ký khoá học
                </Text>

                <Heading className="text-2xl">Tên khoá học</Heading>

                <Row>
                  <Column className="w-[460px] text-left text-lg">
                    Giá gốc (Thanh toán 1 lần)
                  </Column>
                  <Column className="w-[250px] text-lg"></Column>
                  <Column className="w-[170px] text-right text-lg">
                    đ x,xxx,xxx
                  </Column>
                </Row>
                <Row>
                  <Column className="w-[250px] text-left text-lg">
                    Giảm giá
                  </Column>
                  <Column className="w-[250px] text-right text-lg">-xx%</Column>
                  <Column className="w-[170px] text-right text-lg">
                    - đ x,xxx,xxx
                  </Column>
                </Row>
                <Row>
                  <Column className="w-[250px] text-left text-lg"></Column>
                  <Column className="w-[250px] text-right text-lg">
                    NHAPMA123
                  </Column>
                  <Column className="w-[170px] text-right text-lg">
                    - đ x,xxx,xxx
                  </Column>
                </Row>

                <Hr />

                <Row>
                  <Column className="w-[200px] text-left font-bold text-xs">
                    <Heading>Tổng tiền</Heading>
                  </Column>
                  <Column className="w-[200px]"></Column>
                  <Column className="w-[150px] text-right text-[#FF8F43] font-bold text-xs">
                    <Heading>đ x,xxx,xxx</Heading>
                  </Column>
                </Row>
              </Section>

              <Heading className="pt-[36px] text-[#FF8F43] font-bold text-3xl">
                Chi tiết khoá học
              </Heading>

              <Heading className="flex gap-[30px] m-0">
                <Text className="font-bold w-[170px] text-lg">
                  Tên khoá học:
                </Text>
                <Text className="font-bold text-lg pr-[30px]">
                  Bootcamp Lập Trình Web Fullstack
                </Text>
                {/* <Text className="text-lg border-solid rounded px-3 py-1">
                  Offline
                </Text> */}
              </Heading>

              <Section>
                <Row>
                  <Column className="text-left w-[170px] text-lg font-bold py-[5px]">
                    Khai giảng:
                  </Column>
                  <Column className="font-medium text-lg py-[5px]">
                    dd/mm/yyyy
                  </Column>
                </Row>
                <Row>
                  <Column className="text-left w-[170px] text-lg font-bold py-[5px]">
                    Lộ trình học:
                  </Column>
                  <Column className="font-medium text-lg py-[5px]">
                    3 tháng/120 buổi học
                  </Column>
                </Row>
                <Row>
                  <Column className="text-left w-[170px] text-lg font-bold py-[5px]">
                    Lịch học:
                  </Column>
                  <Column className="font-medium text-lg py-[5px]">
                    Thứ 2 đến thứ 6 | 09:00 - 17:00
                  </Column>
                </Row>
                <Row>
                  <Column className="text-left w-[170px] text-lg font-bold py-[5px]">
                    Địa điểm:
                  </Column>
                  <Column className="font-medium text-lg py-[5px]">
                    Y5 Office 135 Hai Bà Trưng, Quận 1, TP.HCM
                  </Column>
                </Row>
                <Row>
                  <Column className="text-left w-[170px] text-lg font-bold pt-[5px] pb-[17px]">
                    Giảng viên:
                  </Column>
                  <Column className="font-medium text-lg pt-[5px] pb-[17px]">
                    Nguyễn Đức Huy - Fullstack Developer
                  </Column>
                </Row>

                <Button
                  href="https://www.likelion.edu.vn/courses/khoa-hoc-lap-trinh-web-fullstack"
                  className="bg-black text-white px-[27px] py-[13px] rounded"
                >
                  Xem lộ trình học
                </Button>
              </Section>

              <Section className="pb-10">
                <Heading className="pt-[36px] text-[#FF8F43] font-bold text-3xl">
                  Thông tin học viên
                </Heading>
                <Row className="m-0">
                  <Column className="w-[300px]">
                    <Heading className="text-2xl m-0">Họ và tên</Heading>
                    <Text className="text-base m-0">Lorem, ipsum dolor.</Text>
                  </Column>
                  <Column className="w-[300px]">
                    <Heading className="text-2xl m-0">Email</Heading>
                    <Text className="text-base m-0">Lorem, ipsum dolor.</Text>
                  </Column>
                </Row>
                <Row className="pt-5 flex">
                  <Column className="w-[300px] text-xs align-baseline">
                    <Heading className="text-2xl m-0">Số điện thoại</Heading>
                    <Text className="text-base m-0">xxx xxxx xxx</Text>
                  </Column>
                  <Column className="w-[300px] text-xs">
                    <Heading className="text-2xl my-0">Địa chỉ</Heading>
                    <Text className="text-base my-0">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptatem, illo.
                    </Text>
                  </Column>
                </Row>
              </Section>
            </Section>

            <Hr className="py-[20px] border-t-[10px]" />

            <Section className="pb-10 px-[30px]">
              <Heading className="text-[#FF8F43] font-bold text-3xl text-center">
                Cảm ơn bạn đã tin tưởng và lựa chọn học ở LIKELION!
              </Heading>

              <Text className="text-lg">
                Hãy liên hệ với chúng mình khi bạn cần hỗ trợ trong quá trình
                thanh toán:
              </Text>
              <Row>
                <Column className="w-[11px] h-[11px] pr-[10px]">
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695697272/Vector_frqkqr.png"
                    alt="Phone"
                    width="11"
                    height="11"
                  />
                </Column>
                <Column>(+84) 86 713 3779</Column>
              </Row>
              <Row>
                <Column className="w-[11px] h-[11px] pr-[10px]">
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695697497/Group_2_ktbn3h.png"
                    alt="Mail"
                    width="11"
                    height="11"
                  />
                  <Mail />
                </Column>
                <Column>likelion.vn@likelion.net</Column>
              </Row>
              <Row>
                <Column className="w-[11px] h-[11px] pr-[10px]">
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695697496/Group_1_1_eyep0k.png"
                    alt="Zalo"
                    width="11"
                    height="11"
                  />
                </Column>
                <Column>zalo.me/likelionvn</Column>
              </Row>
              <Row>
                <Column className="w-[11px] h-[11px] pr-[10px]">
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695697497/Vector_1_ypqbmg.png"
                    alt="Messenger"
                    width="11"
                    height="11"
                  />
                </Column>
                <Column>m.me/likelionvietnam</Column>
              </Row>
            </Section>

            <Hr className="py-[20px] border-t-[10px]" />

            <Section className="pb-7 px-[30px]">
              <Heading className="font-bold text-xl">
                Tìm hiểu thêm về LIKELION ở đây
              </Heading>
              <Row>
                <Column>
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695700196/image_6_zmxkul.png"
                    alt="Blog-1"
                    width="281"
                    height="201"
                    className="px-2"
                  />
                </Column>
                <Column>
                  <Img
                    src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695700196/image_7_mhotlj.png"
                    alt="Blog-2"
                    width="281"
                    height="201"
                    className="px-2"
                  />
                </Column>
              </Row>
            </Section>

            <Hr className="p-0 m-0 border-t-[10px]" />

            <Section className="bg-black p-16">
              <Section className="mb-4">
                <Img
                  src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695701224/Group_3_zjpvvp.png"
                  alt="Logo"
                  width="230"
                  height="26"
                  className="mx-auto"
                />
              </Section>
              <Section>
                <Img
                  src="https://res.cloudinary.com/dxxjbfnyq/image/upload/v1695701137/Group_2_nmie7k.png"
                  alt="Media"
                  width="221"
                  height="32"
                  className="mx-auto"
                />
              </Section>
              <Text className="text-white text-center pt-10 m-0">
                © 2020-2023 LIKELION Vietnam® All Rights Reserved
              </Text>
              <Text className="text-white text-center m-0">
                Floor 25, Lim Tower, 9 - 11 Ton Duc Thang, Ben Nghe Ward,
                Distric 1, HCMC
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default WelcomeTemplate;
