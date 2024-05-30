import { Image, List } from "antd";
import styled from "styled-components";
import { CloseOutlined } from "@ant-design/icons";

import Icon from "@ant-design/icons/lib/components/Icon";
import { getGuardianSecondResult, getGuardianSelectImage, getGuardianSelectedResult } from "../core/api";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function GuardianShowResultPage() {
  const location = useLocation();

  const [data, setData] = useState([]);
  const handleClose = () => {
    window.history.back();
  };

  useEffect(() => {
    fetchData();
    // 우클릭 방지
    document.addEventListener("contextmenu", preventContextMenu);
    // 화면 캡쳐 방지 키 조합
    document.addEventListener("keydown", preventScreenshot);
    // 모바일 화면 캡쳐 방지
    window.addEventListener("blur", handleBlur);

    return () => {
      document.removeEventListener("contextmenu", preventContextMenu);
      document.removeEventListener("keydown", preventScreenshot);
      window.removeEventListener("blur", handleBlur);
    };
  }, []);
  const preventContextMenu = (e) => e.preventDefault();

  const preventScreenshot = (e) => {
    if (e.key === "PrintScreen" || (e.ctrlKey && e.key === "p")) {
      e.preventDefault();
      alert("화면 캡쳐가 금지되어 있습니다.");
    }
  };

  const handleBlur = () => {
    alert("화면 캡쳐가 감지되었습니다.");
  };

  useEffect(() => {}, [data]);

  const fetchData = () => {
    if (location.state.step === "first") {
      getGuardianSelectImage().then((res) => {
        console.log("res", res);
        setData(res);
      });
    } else if (location.state.step === "second") {
      getGuardianSecondResult().then((res) => {
        setData(res);
      });
    } else {
      getGuardianSelectedResult().then((res) => {
        setData(res);
      });
    }
  };
  return (
    <StGuardianShowResultPage>
      <HeaderContainer>
        <CloseButton onClick={() => handleClose()}>
          <CloseIcon component={CloseOutlined} />
        </CloseButton>
        <Title>{location.state.title}</Title>
      </HeaderContainer>
      <ContentsContainer>
        <ListContainer
          grid={{
            gutter: 25,
            xl: 3,
          }}
          dataSource={data}
          renderItem={(item) => (
            <List.Item>
              <ItemImage
                className="custom-image"
                src={item.imgUrl}
                preview={{
                  width: 900,
                }}
              />
            </List.Item>
          )}
        />
      </ContentsContainer>
    </StGuardianShowResultPage>
  );
}
export default GuardianShowResultPage;

const StGuardianShowResultPage = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;
const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 14rem;
  top: 0;
  z-index: 1;

  padding: 2rem 5rem;

  background-color: white;
  box-shadow: 0 1rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 11rem;
  height: 11rem;

  &:hover {
    background-color: #f2f2f2;
    border-radius: 2rem;
  }
`;

const CloseIcon = styled(Icon)`
  font-size: 5rem;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: 5.5rem;
  font-weight: 600;
  color: black;
  margin-right: 5rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding: 0 5rem;
  background-color: white;
  border-radius: 1rem;
`;
const ListContainer = styled(List)`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
  scroll-snap-align: center;
`;

const ItemImage = styled(Image)`
  &.custom-image {
    width: 27.5rem;
    height: 45rem;
    border-radius: 2.5rem;
    border: ${(props) => (props.select == "true" ? "0.8rem solid #0580F1" : "none")};
    &.ant-image-preview {
      width: 100%;
      background-color: #fff;
    }
  }
`;
