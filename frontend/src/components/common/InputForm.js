import styled from "styled-components";
import { Form, Input } from "antd";

export const InputForm = ({ label, name }) => {
  return (
    <StInputForm>
      <InputLabel>{label}</InputLabel>
      <InputItem name={name}>
        <InputField variant="borderless" readOnly={true} />
      </InputItem>
    </StInputForm>
  );
};

export const CenterInputForm = ({ label, name }) => {
  return (
    <StCenterInputForm>
      <InputLabel>{label}</InputLabel>
      <InputItem name={name}>
        <InputField variant="borderless" readOnly={true} />
      </InputItem>
    </StCenterInputForm>
  );
};

export const HorizontalInputForm = ({ label, name, lines }) => {
  return (
    <StHorizontalInputForm label={label} name={name} colon={false} className="form-custom">
      {lines ? (
        <MultiLineInputField
          variant="borderless"
          readOnly={true}
          autoSize={{
            minRows: 1,
            maxRows: 3,
          }}></MultiLineInputField>
      ) : (
        <HorizontalInputText variant="borderless" readOnly={true} />
      )}
    </StHorizontalInputForm>
  );
};

/* 각 정보 input 영역 */
const StInputForm = styled.div`
  display: flex;
  flex-direction: column;
  height: 3.9rem;
  margin-bottom: 0.6rem;
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    height: 3rem;
    margin-bottom: 0.4rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    height: 3rem;
  }
`;
const InputItem = styled(Form.Item)`
  padding: 0;
  margin: 0;
  height: 2.2rem;
  min-height: 0rem;
  &.ant-form-item {
    min-height: 0rem;
  }
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    height: 2rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    height: 1.8rem;
  }
`;

const InputLabel = styled.span`
  padding-bottom: 0;
  color: #00000060;
  font-size: 1rem;
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    font-size: 0.7rem;
  }
`;

const InputField = styled(Input)`
  padding: 0;
  color: black;
  font-size: 1.4rem;
  line-height: 2.2rem;
  margin-bottom: 0.6rem;
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    font-size: 1rem;
  }
`;

const StCenterInputForm = styled(StInputForm)`
  align-items: center;
`;

const StHorizontalInputForm = styled(Form.Item)`
  margin: 0;
  &.form-custom .ant-form-item-label > label {
    margin: 0;
    color: #8b8b8b;
    font-size: 1.5rem;
    @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
      font-size: 1.2rem;
    }
    @media (max-width: 1280px) and (min-width: 0px) {
      font-size: 1rem;
    }
  }
  &.form-custom .ant-form-item-label > label::after {
    margin: 0;
  }
`;

const HorizontalInputText = styled(Input)`
  padding-left: 0;
  padding-right: 0;
  font-size: 1.5rem;
  font-weight: 500;
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    font-size: 1rem;
  }
`;
const MultiLineInputField = styled(Input.TextArea)`
  padding: 0;
  font-size: 1.5rem;
  @media (max-width: 1440px) and (min-width: 1367px), (max-width: 1366px) and (min-width: 1281px) {
    font-size: 1.2rem;
  }
  @media (max-width: 1280px) and (min-width: 0px) {
    font-size: 1rem;
  }
`;
