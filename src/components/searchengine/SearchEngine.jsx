import React from "react";
import { EngineBtn, SearchEngineWrapper } from "./styled";
import { SettingBtn, SettingInfoMessage } from "../../pages/Settings/styled";

export const SearchEngine = ({
  onClickSetting,
  selectedEngine,
  setSelectedEngine,
}) => {
  const engineArr = ["Google", "Naver", "Daum", "Nate"];

  const onClickEngine = (e) => {
    setSelectedEngine(e.currentTarget.value);
  };
  return (
    <SearchEngineWrapper>
      <SettingInfoMessage>
        사용하실 검색엔진을 선택 해주세요. 2/2
      </SettingInfoMessage>
      <div className="engineBox">
        {engineArr.map((item) => {
          return (
            <EngineBtn
              type="button"
              key={item}
              value={item}
              onClick={(e) => onClickEngine(e)}
            >
              <img
                src={
                  item === "Daum"
                    ? `https://www.${item}.net/favicon.ico`
                    : `https://www.${item}.com/favicon.ico`
                }
                alt={`${item}`}
              />
            </EngineBtn>
          );
        })}
      </div>

      <SettingBtn onClick={onClickSetting} disabled={!selectedEngine}>
        완료
      </SettingBtn>
    </SearchEngineWrapper>
  );
};
