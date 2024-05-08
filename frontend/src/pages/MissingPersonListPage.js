import { Button, Input, Radio, Typography } from "antd";
import styled from "styled-components";
import { SearchOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { CardView } from "../components/missingPersonList/CardView";
import { dummyAll } from "../data/DummyData";
import List from "rc-virtual-list";
import { getAllMissingPerson } from "../core/api";
const { Text, Link } = Typography;

function MissingPersonListPage() {
  const [filter, setFilter] = useState("all"); // ["all", "process", "finish"
  const [missingPersonList, setMissingPersonList] = useState([]);
  const ContainerHeight = 1000;
  useEffect(() => {
    //setMissingPersonList(dummyAll);
    getAllMissingPerson(1).then((res) => {
      setMissingPersonList(res.data);
      console.log("getData", res);
    });
    console.log(missingPersonList);
  }, []);

  const onFilterChange = (e) => {
    console.log("radio checked", e.target.value);
    setFilter(e.target.value);
  };

  const onScroll = (e) => {
    if (Math.abs(e.currentTarget.scrollHeight - e.currentTarget.scrollTop - ContainerHeight) <= 1) {
      getAllMissingPerson(1).then((res) => {
        setMissingPersonList(res);
        console.log("missingPersonList", missingPersonList);
      });
    }
  };
  const Filter = () => {
    return (
      <StFilter>
        <FilterWrapper className="radio-custom" defaultValue={"all"} onChange={onFilterChange} value={filter}>
          <Radio value={"all"}>전체</Radio>
          <Radio value={"process"}>탐색중</Radio>
          <Radio value={"finish"}>종료</Radio>
        </FilterWrapper>
      </StFilter>
    );
  };
  const SearchBox = () => {
    return (
      <StSearchBox>
        <Input
          suffix={<SearchOutlined />}
          placeholder="실종자 입력"
          size="large"
          variant="borderless"
          allowClear
          style={{ borderRadius: "1rem", backgroundColor: "white" }}></Input>
      </StSearchBox>
    );
  };
  return (
    <StMissingPersonListPage>
      <Typography.Title level={3}>실종자 현황</Typography.Title>
      <TopContainer>
        <Filter />
        <SearchBox />
      </TopContainer>
      <ContentsContainer>
        <ExplainText>클릭하면 실종자 리포트 화면으로 이동합니다.</ExplainText>
        {/* <List data={missingPersonList} height={ContainerHeight} itemHeight={200} itemKey="id" onScroll={onScroll}>
          {(item) => <CardView key={item.id} data={item} />}
        </List> */}
        <CardContainer>
          {missingPersonList &&
            missingPersonList.map((missingPerson) => {
              return <CardView key={missingPerson.id} data={missingPerson} />;
            })}
        </CardContainer>

        {/* <CardView /> */}
      </ContentsContainer>
    </StMissingPersonListPage>
  );
}
export default MissingPersonListPage;

const StMissingPersonListPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  padding: 4.4rem 5rem;
  gap: 2rem;
  overflow: hidden;
`;
const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const StFilter = styled.div``;

const sharedRadioStyle = `
    border-radius: 10rem;
    padding: 0.5rem 1.9rem;
    font-size: 1.6rem;
`;

const FilterWrapper = styled(Radio.Group)`
  &.radio-custom .ant-radio-wrapper {
    border: 0.1rem solid #8b8b8b;
    border-radius: 10rem;
    padding: 0.5rem 1.9rem;
    color: #8b8b8b;
    background-color: white;
    font-size: 1.6rem;
  }

  &.radio-custom .ant-radio-wrapper-checked {
    border: 0.1rem solid #1890ff;
    background-color: #1890ff;
    color: white;
    ${sharedRadioStyle}
  }

  //기존 라디오 버튼 숨기기
  &.radio-custom .ant-radio {
    position: absolute;
    left: -9999px;
    overflow: hidden;
  }
`;

const StSearchBox = styled.div``;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 1.4rem 1.4rem 1.4rem 4.4rem;
  gap: 1rem;
  border-radius: 1rem;
  background-color: white;
`;

const ExplainText = styled(Text)`
  font-size: 1.2rem;
  color: #8b8b8b;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  flex-wrap: wrap;
  flex-basis: 100%;
  gap: 2.6rem;

  width: 100%;
  height: 100%;
  padding-right: 3rem;
  padding-bottom: 10rem;

  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10rem;
    background: #8b8b8b;
  }
`;
