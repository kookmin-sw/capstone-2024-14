import styled from "styled-components";
import { useEffect, useState } from "react";
import { CustomOverlayMap, Map, MapMarker, useMap } from "react-kakao-maps-sdk";
import { Button } from "antd";
import { CloseOutlined } from "@ant-design/icons";
export const ReportMap = ({ step1data }) => {
  const [cctvState, setCctvState] = useState({});
  const [step1Position, setStep1Position] = useState([]);
  const [betweenState, setBetweenState] = useState({});
  const [step2State, setStep2State] = useState({});
  const [step1State, setStep1State] = useState(true);

  useEffect(() => {
    console.log("ReportMap", step1data);
    if (step1data) {
      console.log("step1data", step1data);
      const processedData = step1data.reduce((acc, curr) => {
        const existingCctvIndex = acc.findIndex((item) => item.id === curr.cctv.id);
        if (existingCctvIndex !== -1) {
          acc[existingCctvIndex].images.push({ resultId: curr.resultId, imgUrl: curr.imgUrl });
        } else {
          acc.push({
            id: curr.cctv.id,
            images: [{ resultId: curr.resultId, imgUrl: curr.imgUrl }],
            latlng: { lat: curr.cctv.longitude, lng: curr.cctv.latitude },
          });
        }
        return acc;
      }, []);
      setStep1Position(processedData);
    }
  }, [step1data]);

  useEffect(() => {
    console.log("step1Position", step1Position);
  }, [step1Position]);

  const Item = ({ item }) => {
    return (
      <ItemContainer>
        <ItemImage src={item.imgUrl} alt="Image" />
        {/* <p>{item.date}</p>
        <p>{item.time}</p>
        <p>정확도:{item.similarity}</p> */}
      </ItemContainer>
    );
  };

  const EventMarkerContainer = ({ position, images, markerStyle }) => {
    const map = useMap();
    const [isVisible, setIsVisible] = useState(false);

    return (
      <>
        <MapMarker
          position={position} // 마커를 표시할 위치
          // @ts-ignore
          onClick={(marker) => {
            map.panTo(marker.getPosition());
            setIsVisible(true);
          }}
          // onMouseOver={() => setIsVisible(true)}
          // onMouseOut={() => setIsVisible(false)}
          image={{
            src: markerStyle, // 마커이미지의 주소입니다
            size: {
              width: 24,
              height: 35,
            }, // 마커이미지의 크기입니다
          }}
        />
        {isVisible && (
          <CustomOverlayMap position={position}>
            <ContentsContainer>
              <TopContainer>
                <p>이미지 목록</p>
                <Button type="link" icon={<CloseOutlined />} onClick={() => setIsVisible(false)}></Button>
              </TopContainer>

              <ImageContainer>
                {images && images.map((item) => <Item key={item.resultId} item={item} />)}
              </ImageContainer>
            </ContentsContainer>
          </CustomOverlayMap>
        )}
      </>
    );
  };

  return (
    <StReportMap>
      <Map center={{ lat: 37.610826, lng: 126.994317 }} style={{ width: "100%", height: "100%" }}>
        {step1State &&
          step1Position &&
          step1Position.map(
            (position) => (
              console.log("position", position),
              (
                // <MapMarker
                //   key={`step1-${position.id}`}
                //   position={position.latlng}
                //   image={{
                //     src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png", // 마커이미지의 주소입니다
                //     size: {
                //       width: 24,
                //       height: 35,
                //     }, // 마커이미지의 크기입니다
                //   }}
                // />
                <EventMarkerContainer
                  key={`step1-${position.id}`}
                  position={position.latlng}
                  images={position.images}
                  markerStyle={"https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png"}
                />
              )
            ),
          )}
      </Map>
    </StReportMap>
  );
};

const StReportMap = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  max-width: 90rem;
`;

const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 30rem;
  height: 30rem;
  padding: 1rem;
  background-color: white;
  border-radius: 1rem;

  overflow-y: hidden;
`;

const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.4rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 10rem;
    background: #8b8b8b;
  }
`;
const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.9rem;

  p {
    @media all and (max-width: 1537px) {
      font-size: 1rem;
    }
    font-size: 1.3rem;
  }
`;

const ItemImage = styled.img`
  width: 14.4rem;
  height: 23.8rem;
  margin-right: 0.9rem;
  @media all and (max-width: 1537px) {
    width: 7.2rem;
    height: 11.9rem;
  }
`;
