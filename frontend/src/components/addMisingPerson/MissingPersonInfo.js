import { useState } from "react";
import styled from "styled-components";
import { Form, Input, DatePicker, TimePicker, Radio, Typography, Row, Col } from "antd";
import { SeacrchBox } from "../common/SearchBox";
import moment from "moment";

const options = [
  {
    label: "남성",
    value: "남성",
  },
  {
    label: "여성",
    value: "여성",
  },
];
const config = {
  rules: [
    {
      type: "object",
      message: "Please select time!",
    },
  ],
};
const requiredConfig = {
  rules: [
    {
      type: "object",
      message: "필수 항목입니다!",
      required: true,
    },
  ],
};

export const MissingPersonInfo = ({ form }) => {
  const [userGender, setUserGender] = useState("남성");

  const genderChange = ({ target: { value } }) => {
    console.log("gender checked", value);
    setUserGender(value);
  };
  return (
    <Wrapper>
      <Typography.Title
        level={5}
        style={{
          margin: 0,
        }}>
        실종자
      </Typography.Title>
      <Row gutter={[9, 2]}>
        <Col span={9}>
          <Form.Item
            name={["user", "name"]}
            label="성명"
            rules={[
              {
                required: true,
              },
            ]}>
            <NameInput placeholder="성명입력" />
          </Form.Item>
        </Col>
        <Col span={7}>
          <Form.Item
            name={["user", "gender"]}
            label="성별"
            rules={[
              {
                required: true,
              },
            ]}>
            <Radio.Group options={options} onChange={genderChange} value={userGender} optionType="button" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={["user", "birth"]} label="생년월일" {...requiredConfig}>
            <DatePicker placeholder="생년월일 입력" />
          </Form.Item>
        </Col>
        <Col span={16}>
          <Form.Item name="missingLocation" label="실종위치">
            <SeacrchBox title={"실종위치"} form={form} name="missingLocation" />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={["user", "missingTime"]} label="실종일시" {...config}>
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm"
              placeholder="시간 입력"
              disabledDate={(d) => !d || d.isAfter(moment())}
              disabledTime={(d) => !d || d.isAfter(moment())}
            />
          </Form.Item>
        </Col>
        <Col span={13}>
          <Form.Item name={["user", "introduction"]} label="특이사항">
            <TextArea placeholder="내용을 입력해주세요." />
          </Form.Item>
        </Col>
      </Row>
    </Wrapper>
  );
};

// 각 정보 입력 영역
const Wrapper = styled.div`
  //display: flex;
  // flex-direction: column;
  margin-bottom: 1rem;

  // gap: 1.6rem;
`;
// const Col = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0rem;
// `;
// const Row = styled.div`
//   display: flex;
//   flex-direction: row;
//   /* justify-content: space-between; */
//   gap: 5.62rem;
// `;

const NameInput = styled(Input)`
  width: 19.5rem;
`;

const TextArea = styled(Input.TextArea)`
  //width: 40rem;
`;
